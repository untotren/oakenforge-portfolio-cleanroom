import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// Innermost `selector{declarations}` blocks, so rules inside @media (390px and 1440px alike) are included.
const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(([, selector, body]) => ({
  selectors: selector.trim().replace(/^@[^{]*$/, '').split(',').map((s) => s.trim()),
  decls: Object.fromEntries(
    body.split(';').map((d) => d.split(':')).filter((p) => p.length > 1)
      .map(([k, ...v]) => [k.trim(), v.join(':').trim()]),
  ),
}));

const tokens = Object.fromEntries(
  rules.filter((r) => r.selectors.includes(':root'))
    .flatMap((r) => Object.entries(r.decls).filter(([k]) => k.startsWith('--'))),
);

const resolve = (value) => {
  const match = /^var\((--[\w-]+)\)$/.exec(value);
  return match ? resolve(tokens[match[1]]) : value;
};

const luminance = (hex) => {
  const full = hex.length === 4 ? `#${[...hex.slice(1)].map((c) => c + c).join('')}` : hex;
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const targets = (selector, pattern) => pattern.test(selector);

test('D2-1: project tags meet WCAG AA contrast on the page background', () => {
  assert.match(html, /<ul class="tags">/, 'index.html renders project tags');

  const background = resolve(
    rules.filter((r) => r.selectors.includes('body') && r.decls.background).at(-1).decls.background,
  );
  // Nothing between body and the tags may paint its own background.
  for (const r of rules) {
    for (const s of r.selectors) {
      if (/^\.(work|project-grid|project|project-copy|tags)(\s+li)?$/.test(s)) {
        assert.ok(!('background' in r.decls) && !('background-color' in r.decls), `${s} sets no background`);
      }
    }
  }

  const tagColors = rules
    .filter((r) => r.decls.color && r.selectors.some((s) => targets(s, /\.tags\s+li\b/)))
    .map((r) => resolve(r.decls.color));
  assert.ok(tagColors.length > 0, 'a .tags li color rule exists');

  for (const color of tagColors) {
    assert.match(color, /^#[0-9a-f]{3,6}$/i, `tag color ${color} is an opaque hex color`);
    const ratio = contrast(color, background);
    assert.ok(ratio >= 4.5, `tag color ${color} on ${background} is ${ratio.toFixed(2)}:1, needs 4.5:1`);
  }
});

test('D2-1: tags inherit full opacity', () => {
  for (const r of rules) {
    if (r.selectors.some((s) => targets(s, /\.tags\b/)) && 'opacity' in r.decls) {
      assert.equal(Number(r.decls.opacity), 1);
    }
  }
});
