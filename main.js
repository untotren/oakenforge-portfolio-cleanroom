const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* Template names are read from the rendered cards rather than kept in a second
   hand-maintained list here. scripts/catalog.mjs is the only registry. */
const templateNames = {};
for (const card of document.querySelectorAll('[data-template-id][data-template-name]')) {
  templateNames[card.dataset.templateId] = card.dataset.templateName;
}

/* ---- Selection handoff: ?template=<id> personalises the contact CTA ---- */
const selectedId = new URLSearchParams(window.location.search).get('template');
const selectedName = templateNames[selectedId];
if (selectedName) {
  const summary = document.getElementById('selected-template');
  const link = document.getElementById('project-inquiry');
  if (summary && link) {
    summary.hidden = false;
    summary.textContent = `Selected starting point: ${selectedName}`;
    const subject = `Website quote request — ${selectedName}`;
    const body = `I am interested in using the ${selectedName} template as a starting point.\n\nProject or business name:\nWhat the website needs to do:\nPreferred launch window (if any):\n`;
    link.href = `mailto:dowlingtrenton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.textContent = `Request a quote for ${selectedName} ↗`;
  }
}

/* ---- Two-axis browse -------------------------------------------------------
   The markup ships both panels as plain sections with real headings and two
   ordinary anchors, so with no JS the page reads as one continuous document.
   Here we upgrade that into a proper ARIA tab pattern: roles are applied at
   runtime so assistive tech is never told "tab selected" on a page where both
   panels are in fact visible. Both panels stay in the DOM, so switching axes
   never refetches an image or reflows the page.
--------------------------------------------------------------------------- */
const browse = document.querySelector('[data-browse]');
const switchEl = browse?.querySelector('[data-browse-switch]');
const tabs = browse ? [...browse.querySelectorAll('[data-tab]')] : [];
const panels = new Map(browse ? [...browse.querySelectorAll('[data-panel]')].map((p) => [p.dataset.panel, p]) : []);

if (browse && switchEl && tabs.length > 1 && panels.size === tabs.length) {
  browse.classList.add('has-js');
  switchEl.setAttribute('role', 'tablist');
  switchEl.setAttribute('aria-label', 'Choose how to browse the template library');

  for (const tab of tabs) {
    tab.setAttribute('role', 'tab');
    tab.id = `tab-${tab.dataset.tab}`;
    tab.setAttribute('aria-controls', tab.dataset.tab);
  }
  for (const [id, panel] of panels) {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${id}`);
    panel.setAttribute('tabindex', '-1');
  }

  const activate = (id, { focusTab = false, syncHash = false } = {}) => {
    if (!panels.has(id)) return;
    for (const tab of tabs) {
      const on = tab.dataset.tab === id;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      tab.classList.toggle('is-active', on);
      if (on && focusTab) tab.focus();
    }
    for (const [pid, panel] of panels) panel.hidden = pid !== id;
    browse.dataset.active = id;
    if (syncHash && window.location.hash !== `#${id}`) {
      history.replaceState(null, '', `#${id}`);
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      activate(tab.dataset.tab, { syncHash: true });
    });
    tab.addEventListener('keydown', (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      let next = null;
      if (step) next = tabs[(index + step + tabs.length) % tabs.length];
      else if (event.key === 'Home') next = tabs[0];
      else if (event.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      event.preventDefault();
      activate(next.dataset.tab, { focusTab: true, syncHash: true });
    });
  });

  /* A hash may address a panel (#by-template) or a single industry band
     (#industry-food-drink); the latter implies the industry axis. */
  const axisFor = (hash) => {
    const id = hash.replace(/^#/, '');
    if (panels.has(id)) return id;
    if (id.startsWith('industry-') && panels.has('by-industry')) return 'by-industry';
    return null;
  };

  activate(axisFor(window.location.hash) || 'by-industry');

  /* The native jump happened while the band may still have been hidden, so
     re-run it once the correct panel is shown. */
  const deepTarget = window.location.hash.replace(/^#/, '');
  if (deepTarget.startsWith('industry-')) {
    const band = document.getElementById(deepTarget);
    if (band) requestAnimationFrame(() => band.scrollIntoView({ block: 'start', behavior: 'auto' }));
  }

  window.addEventListener('hashchange', () => {
    const axis = axisFor(window.location.hash);
    if (axis) activate(axis);
  });
}
