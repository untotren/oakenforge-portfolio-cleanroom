import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// Mirrors axe's label-content-name-mismatch normalisation: lowercase, collapse
// whitespace, drop punctuation and symbols such as the decorative arrows.
const normalise = (text) =>
  text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

// Visible text of an element's markup, excluding aria-hidden subtrees.
function visibleText(markup) {
  let out = markup;
  let prev;
  do {
    prev = out;
    out = out.replace(/<(\w+)\b[^>]*\baria-hidden="true"[^>]*>(?:(?!<\1\b)[\s\S])*?<\/\1>/g, ' ');
  } while (out !== prev);
  return out.replace(/<[^>]+>/g, ' ');
}

const labelledLinks = [...html.matchAll(/<a\b([^>]*\baria-label="([^"]*)"[^>]*)>([\s\S]*?)<\/a>/g)].map(
  ([, attrs, label, inner]) => ({
    attrs,
    label,
    href: attrs.match(/\bhref="([^"]*)"/)?.[1],
    visible: normalise(visibleText(inner)),
  }),
);

test('every aria-labelled link includes its visible text in its accessible name', () => {
  for (const link of labelledLinks) {
    if (!link.visible) continue;
    assert.ok(
      normalise(link.label).includes(link.visible),
      `aria-label "${link.label}" on ${link.href} must contain visible text "${link.visible}"`,
    );
  }
});

test('hero action link keeps its copy and destination', () => {
  const hero = labelledLinks.find((link) => /class="round-link"/.test(link.attrs));
  assert.ok(hero, 'hero round-link not found');
  assert.equal(hero.href, '#work');
  assert.equal(hero.visible, 'view the work');
  assert.ok(normalise(hero.label).startsWith('view the work'));
});

test('project image links name the visible "Visit site" action and keep destinations', () => {
  const projects = labelledLinks.filter((link) => /class="project-image\b/.test(link.attrs));
  assert.deepEqual(
    projects.map((link) => link.href),
    [
      'https://magicalmemories.travel/',
      'https://www.holographictrayce.com/',
      'https://petiquette.lordimboard.com/',
      'https://lazyloonpontoon.com/',
      'https://geraldsmallishandsons.com/',
      'https://woodsguide.lordimboard.com/',
    ],
  );
  for (const link of projects) {
    assert.equal(link.visible, 'visit site');
    assert.ok(normalise(link.label).startsWith('visit site'), `label "${link.label}"`);
  }
  assert.equal((html.match(/<span class="visit">Visit site <span aria-hidden="true">↗<\/span><\/span>/g) ?? []).length, 6);
});
