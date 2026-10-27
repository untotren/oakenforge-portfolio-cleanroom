export const TEMPLATE_DATA = Object.freeze([
  { id: 'artist-prism', name: 'Artist Prism', industries: ['creative-portfolio'] },
  { id: 'automotive-service', name: 'Automotive Service', industries: ['home-trades-auto'] },
  { id: 'builder-heritage', name: 'Builder Heritage', industries: ['home-trades-auto', 'creative-portfolio'] },
  { id: 'editorial-portfolio', name: 'Editorial Portfolio', industries: ['creative-portfolio'] },
  { id: 'field-guide', name: 'Field Guide', industries: ['community-learning', 'professional-technical'] },
  { id: 'fitness-classes', name: 'Fitness Classes', industries: ['health-beauty-pets', 'community-learning'] },
  { id: 'instrument-dark', name: 'Instrument Dark', industries: ['professional-technical', 'products-retail'] },
  { id: 'lakeside-booking', name: 'Lakeside Booking', industries: ['travel-venues'] },
  { id: 'mission-community', name: 'Common Chord Mission', industries: ['community-learning'] },
  { id: 'pet-service', name: 'Pet Service Friendly', industries: ['health-beauty-pets'] },
  { id: 'professional-services', name: 'Professional Services', industries: ['professional-technical'] },
  { id: 'restaurant-cafe', name: 'Restaurant & Cafe Menu', industries: ['food-drink'] },
  { id: 'retail-catalog', name: 'Retail Catalog', industries: ['products-retail', 'creative-portfolio'] },
  { id: 'riverside-venue', name: 'Riverside Venue', industries: ['travel-venues', 'food-drink'] },
  { id: 'salon-wellness', name: 'Salon & Wellness Services', industries: ['health-beauty-pets'] },
  { id: 'travel-editorial', name: 'Travel Editorial', industries: ['travel-venues'] },
  { id: 'warm-trades', name: 'Warm Trades', industries: ['home-trades-auto'] }
]);

const option = (value, label) => Object.freeze({ value, label });
export const QUESTIONS = Object.freeze([
  Object.freeze({
    id: 'industry',
    legend: 'What kind of work does the site need to support?',
    hint: 'Choose the closest fit. You can also skip this question.',
    options: Object.freeze([
      option('food-drink', 'Restaurant, cafe, bakery, or bar'),
      option('health-beauty-pets', 'Salon, wellness, fitness, or pet service'),
      option('home-trades-auto', 'Builder, trades, automotive, or outdoor work'),
      option('travel-venues', 'Tours, travel planning, hospitality, or venue'),
      option('products-retail', 'Shop, maker, catalog, or product line'),
      option('professional-technical', 'Consulting, professional, technical, or advisory work'),
      option('creative-portfolio', 'Artist, maker, portfolio, or case studies'),
      option('community-learning', 'Nonprofit, program, guide, or education'),
      option('other-not-sure', 'Something else / not sure yet')
    ])
  }),
  Object.freeze({
    id: 'goal',
    legend: 'What should the site help visitors do first?',
    hint: 'Pick the main job. Other needs can go in the project brief.',
    options: Object.freeze([
      option('understand-services', 'Understand the offer and inquire'),
      option('choose-starting-design', 'Compare design directions or templates'),
      option('browse-products', 'Browse products or a catalog'),
      option('book-or-plan', 'Plan an appointment, tour, class, reservation, or inquiry'),
      option('learn-or-reference', 'Read, search, follow a guide, or choose a program path'),
      option('see-work', 'Review a body of work, portfolio, or project story'),
      option('not-sure', 'Not sure yet')
    ])
  }),
  Object.freeze({
    id: 'stage',
    legend: 'Where is the project starting from?',
    hint: 'This shapes the starting point, not a promised scope or timeline.',
    options: Object.freeze([
      option('new-site', 'A first or replacement site from scratch'),
      option('redesign', 'An existing site needs clearer structure or design'),
      option('template-start', 'A demo or template seems close and should be adapted'),
      option('repair-finish', 'Existing work needs cleanup, launch, or proof'),
      option('not-sure', 'Not sure yet')
    ])
  }),
  Object.freeze({
    id: 'feature',
    legend: 'Which feature matters most at the start?',
    hint: 'Production connections and content tools are scoped separately.',
    options: Object.freeze([
      option('contact-service', 'Clear contact or quote path and service pages'),
      option('schedule-request', 'Schedule, booking, class, reservation, or request preview'),
      option('catalog-products', 'Catalog, product details, filters, or interest list'),
      option('content-guide', 'Chapters, articles, guide, or searchable reference'),
      option('portfolio-gallery', 'Work gallery, case studies, media, or showreel'),
      option('admin-content', 'Admin or content tools may be needed'),
      option('not-sure', 'Not sure yet')
    ])
  }),
  Object.freeze({
    id: 'readiness',
    legend: 'How ready is the project?',
    hint: 'This describes readiness only. It does not promise a delivery date.',
    options: Object.freeze([
      option('ready-now', 'Ready to outline scope now'),
      option('next-1-3', 'Aiming in the next few months'),
      option('exploring', 'Comparing directions, with no deadline'),
      option('needs-discovery', 'Content or audience decisions still need work'),
      option('not-sure', 'Not sure yet')
    ])
  })
]);

const CATEGORIES = Object.freeze([
  Object.freeze({
    id: 'service-led',
    label: 'Service-led local site',
    templates: Object.freeze(['professional-services', 'warm-trades', 'pet-service', 'salon-wellness', 'automotive-service', 'builder-heritage'])
  }),
  Object.freeze({
    id: 'booking',
    label: 'Booking, schedule, or venue path',
    templates: Object.freeze(['lakeside-booking', 'restaurant-cafe', 'salon-wellness', 'fitness-classes', 'travel-editorial', 'riverside-venue'])
  }),
  Object.freeze({
    id: 'catalog',
    label: 'Catalog or product browsing',
    templates: Object.freeze(['retail-catalog', 'instrument-dark', 'restaurant-cafe'])
  }),
  Object.freeze({
    id: 'portfolio',
    label: 'Portfolio or work showcase',
    templates: Object.freeze(['editorial-portfolio', 'artist-prism', 'builder-heritage', 'retail-catalog'])
  }),
  Object.freeze({
    id: 'guide',
    label: 'Guide, community, or learning site',
    templates: Object.freeze(['field-guide', 'mission-community', 'fitness-classes', 'professional-services'])
  })
]);

const GOAL_CATEGORY = Object.freeze({
  'understand-services': 'service-led',
  'browse-products': 'catalog',
  'book-or-plan': 'booking',
  'learn-or-reference': 'guide',
  'see-work': 'portfolio'
});
const FEATURE_CATEGORY = Object.freeze({
  'contact-service': 'service-led',
  'schedule-request': 'booking',
  'catalog-products': 'catalog',
  'content-guide': 'guide',
  'portfolio-gallery': 'portfolio'
});
const INDUSTRY_CATEGORY = Object.freeze({
  'food-drink': 'booking',
  'health-beauty-pets': 'service-led',
  'home-trades-auto': 'service-led',
  'travel-venues': 'booking',
  'products-retail': 'catalog',
  'professional-technical': 'service-led',
  'creative-portfolio': 'portfolio',
  'community-learning': 'guide'
});
const UNKNOWN = new Set(['not-sure', 'other-not-sure', 'skipped', undefined, null, '']);
const templateIndex = new Map(TEMPLATE_DATA.map((template, index) => [template.id, index]));
const templateById = new Map(TEMPLATE_DATA.map((template) => [template.id, template]));
const categoryById = new Map(CATEGORIES.map((category) => [category.id, category]));

const labelFor = (questionId, value) => {
  if (value === 'skipped' || value == null) return 'Skipped / not sure';
  const question = QUESTIONS.find((item) => item.id === questionId);
  return question?.options.find((item) => item.value === value)?.label || 'Skipped / not sure';
};
const addScores = (scores, ids, points) => {
  for (const id of ids || []) scores.set(id, (scores.get(id) || 0) + points);
};
const addCategory = (scores, categoryId, points) => {
  if (!categoryId) return;
  scores.set(categoryId, (scores.get(categoryId) || 0) + points);
};

export function getResult(rawAnswers = {}) {
  const answers = Object.freeze(Object.fromEntries(QUESTIONS.map(({ id }) => [id, rawAnswers[id] || 'skipped'])));
  const forceNoMatch = UNKNOWN.has(answers.industry) && UNKNOWN.has(answers.goal) && UNKNOWN.has(answers.feature);
  const scores = new Map(TEMPLATE_DATA.map(({ id }) => [id, 0]));
  const categoryScores = new Map(CATEGORIES.map(({ id }) => [id, 0]));

  if (!UNKNOWN.has(answers.industry)) {
    addScores(scores, TEMPLATE_DATA.filter(({ industries }) => industries.includes(answers.industry)).map(({ id }) => id), 5);
    addCategory(categoryScores, INDUSTRY_CATEGORY[answers.industry], 2);
  }
  if (answers.goal === 'choose-starting-design') {
    addScores(scores, TEMPLATE_DATA.map(({ id }) => id), 2);
    if (!UNKNOWN.has(answers.industry)) {
      addScores(scores, TEMPLATE_DATA.filter(({ industries }) => industries.includes(answers.industry)).map(({ id }) => id), 2);
    }
  } else if (!UNKNOWN.has(answers.goal)) {
    const categoryId = GOAL_CATEGORY[answers.goal];
    addScores(scores, categoryById.get(categoryId)?.templates, 4);
    addCategory(categoryScores, categoryId, 4);
  }
  if (answers.feature === 'admin-content') {
    addScores(scores, TEMPLATE_DATA.map(({ id }) => id), 2);
  } else if (!UNKNOWN.has(answers.feature)) {
    const categoryId = FEATURE_CATEGORY[answers.feature];
    addScores(scores, categoryById.get(categoryId)?.templates, 4);
    addCategory(categoryScores, categoryId, 4);
  }

  const matches = forceNoMatch ? [] : [...scores]
    .filter(([, score]) => score >= 4)
    .sort((a, b) => b[1] - a[1] || templateIndex.get(a[0]) - templateIndex.get(b[0]))
    .slice(0, 3)
    .map(([id]) => id);
  const noMatch = matches.length === 0;
  const category = noMatch ? { id: 'no-match', label: 'No single demo selected' } : [...CATEGORIES]
    .sort((a, b) => (categoryScores.get(b.id) || 0) - (categoryScores.get(a.id) || 0) || CATEGORIES.indexOf(a) - CATEGORIES.indexOf(b))[0];

  const stageEmphasis = Object.freeze({
    'new-site': 'Scope and Shape, then Direction & content',
    redesign: 'Direction & content audit, then Design & development',
    'template-start': 'Direction & content, starting from the recommended demos',
    'repair-finish': 'Verify, then Launch & handoff',
    'not-sure': 'Scope and Shape discovery first',
    skipped: 'Scope and Shape discovery first'
  });
  let service = stageEmphasis[answers.stage] || stageEmphasis.skipped;
  if (answers.readiness === 'ready-now') service += '; ready to outline scope';
  else if (answers.readiness === 'next-1-3') service += '; planning window only, not a promised delivery date';
  else service += '; discovery-first planning';

  const recommendation = noMatch
    ? 'No demo recommendation selected yet.'
    : matches.map((id) => `${templateById.get(id).name} (/templates/${id}/)`).join('; ');
  const briefLines = Object.freeze([
    'Oakenforge project-fit brief',
    `Business / industry: ${labelFor('industry', answers.industry)}`,
    `Primary goal: ${labelFor('goal', answers.goal)}`,
    `Starting point: ${labelFor('stage', answers.stage)}`,
    `Feature emphasis: ${labelFor('feature', answers.feature)}`,
    `Readiness: ${labelFor('readiness', answers.readiness)}`,
    `Result category: ${category.label}`,
    `Recommended demos: ${recommendation}`,
    `Service emphasis: ${service}`,
    'Note: This is not a price, package, delivery promise, guarantee, or submitted form.',
    '',
    'Business / project name:',
    'Best contact method:',
    'Notes:'
  ]);
  const briefText = briefLines.join('\n');
  const subject = `Website project fit — ${category.label}`;
  return Object.freeze({
    answers, noMatch, matches: Object.freeze(matches), category, service,
    briefLines, briefText, subject,
    mailto: `mailto:dowlingtrenton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefText)}`
  });
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

export function initFinder(root) {
  const start = root.querySelector('[data-fit-start]');
  const shell = root.querySelector('[data-fit-shell]');
  const stage = root.querySelector('[data-fit-stage]');
  const live = root.querySelector('[data-fit-live]');
  const progressCopy = root.querySelector('[data-fit-progress-copy]');
  const progress = root.querySelector('[data-fit-progress]');
  if (!start || !shell || !stage || !live || !progressCopy || !progress) return;

  let current = 0;
  let answers = {};
  const focusTarget = () => requestAnimationFrame(() => stage.querySelector('[data-fit-focus]')?.focus());
  const announce = (message) => { live.textContent = ''; requestAnimationFrame(() => { live.textContent = message; }); };
  const updateProgress = (step) => {
    progress.value = step;
    progressCopy.textContent = step >= QUESTIONS.length ? 'Your project brief' : `Question ${step + 1} of ${QUESTIONS.length}`;
  };
  const closeFinder = () => {
    shell.hidden = true;
    start.hidden = false;
    start.setAttribute('aria-expanded', 'false');
    start.focus();
  };

  const renderQuestion = () => {
    const question = QUESTIONS[current];
    const selected = answers[question.id];
    updateProgress(current);
    stage.innerHTML = `
      <form class="fit-question" data-fit-form novalidate>
        <fieldset aria-describedby="fit-hint-${question.id} fit-error-${question.id}">
          <legend id="fit-question-${question.id}" data-fit-focus tabindex="-1">${escapeHtml(question.legend)}</legend>
          <p class="fit-hint" id="fit-hint-${question.id}">${escapeHtml(question.hint)}</p>
          <div class="fit-options">${question.options.map(({ value, label }) => `
            <label class="fit-option"><input type="radio" name="${question.id}" value="${value}"${selected === value ? ' checked' : ''}><span>${escapeHtml(label)}</span></label>`).join('')}</div>
          <p class="fit-error" id="fit-error-${question.id}" data-fit-error role="alert" tabindex="-1"></p>
        </fieldset>
        <div class="fit-actions">
          <button type="button" class="fit-secondary" data-fit-back>${current ? 'Back' : 'Close finder'}</button>
          <button type="button" class="fit-secondary" data-fit-restart>Restart</button>
          <button type="button" class="fit-secondary" data-fit-skip>Skip / not sure</button>
          <button type="submit" class="fit-primary">Continue <span aria-hidden="true">→</span></button>
        </div>
      </form>`;
    const form = stage.querySelector('[data-fit-form]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const choice = new FormData(form).get(question.id);
      if (!choice) {
        const error = form.querySelector('[data-fit-error]');
        error.textContent = 'Choose an answer, or use “Skip / not sure.”';
        error.focus();
        return;
      }
      answers[question.id] = choice;
      current += 1;
      if (current === QUESTIONS.length) renderResult(); else renderQuestion();
      focusTarget();
    });
    form.querySelector('[data-fit-back]').addEventListener('click', () => {
      if (!current) return closeFinder();
      current -= 1;
      renderQuestion();
      focusTarget();
    });
    form.querySelector('[data-fit-restart]').addEventListener('click', () => {
      answers = {};
      current = 0;
      renderQuestion();
      announce('Finder restarted. Question 1 of 5.');
      focusTarget();
    });
    form.querySelector('[data-fit-skip]').addEventListener('click', () => {
      answers[question.id] = question.options.find(({ value }) => value === 'not-sure' || value === 'other-not-sure')?.value || 'skipped';
      current += 1;
      if (current === QUESTIONS.length) renderResult(); else renderQuestion();
      focusTarget();
    });
  };

  const renderResult = () => {
    const result = getResult(answers);
    updateProgress(QUESTIONS.length);
    const matches = result.matches.map((id, index) => {
      const template = templateById.get(id);
      return `<article class="fit-match">
        <p>${index === 0 ? 'Closest demo starting point' : 'Also worth exploring'}</p>
        <h4>${escapeHtml(template.name)}</h4>
        <div><a href="/templates/${id}/">Open live demo <span aria-hidden="true">↗</span></a> <a href="/templates/${id}/admin/">Open admin demo <span aria-hidden="true">↗</span></a></div>
      </article>`;
    }).join('');
    stage.innerHTML = `
      <div class="fit-result">
        <p class="kicker">Your result</p>
        <h3 data-fit-focus tabindex="-1">${result.noMatch ? 'No single demo is a clean fit yet.' : 'A practical place to begin.'}</h3>
        <p>${result.noMatch ? 'The audience, content, and required actions should be scoped before choosing a visual starting point.' : 'These are design and interaction references, not fixed packages. Production connections and scope are decided separately.'}</p>
        ${result.noMatch ? '<p class="fit-no-match-links"><a class="fit-text-link" href="#templates">Browse all templates</a> · <a class="fit-text-link" href="#services">See services</a> · <a class="fit-text-link" href="#contact">Request a project quote</a></p>' : `<div class="fit-matches">${matches}</div>`}
        <p class="fit-service">Service emphasis: <a href="#services"><strong>${escapeHtml(result.service)}</strong></a></p>
        <div class="fit-brief" aria-labelledby="fit-brief-title">
          <h4 id="fit-brief-title">Your plain-language project brief</h4>
          <pre data-fit-brief>${escapeHtml(result.briefText)}</pre>
          <p>Review this before opening email. The button only opens your email app; it does not send or store anything.</p>
          <a class="fit-primary" data-fit-mailto href="${escapeHtml(result.mailto)}">Open email with this brief <span aria-hidden="true">↗</span></a>
        </div>
        <div class="fit-actions fit-result-actions">
          <button type="button" class="fit-secondary" data-fit-back-result>Back</button>
          <button type="button" class="fit-secondary" data-fit-edit>Edit answers</button>
          <button type="button" class="fit-secondary" data-fit-restart>Restart</button>
          <a class="fit-secondary" href="#templates">Browse templates</a>
          <a class="fit-secondary" href="#contact">Use the standard quote path</a>
        </div>
      </div>`;
    announce(result.noMatch ? 'Project-fit result ready. No single demo is a clean fit yet.' : `Project-fit result ready. ${result.matches.length} demo recommendations.`);
    stage.querySelector('[data-fit-back-result]').addEventListener('click', () => {
      current = QUESTIONS.length - 1;
      renderQuestion();
      focusTarget();
    });
    stage.querySelector('[data-fit-edit]').addEventListener('click', () => {
      current = 0;
      renderQuestion();
      focusTarget();
    });
    stage.querySelector('[data-fit-restart]').addEventListener('click', () => {
      answers = {};
      current = 0;
      renderQuestion();
      announce('Finder restarted. Question 1 of 5.');
      focusTarget();
    });
  };

  start.addEventListener('click', () => {
    start.hidden = true;
    start.setAttribute('aria-expanded', 'true');
    shell.hidden = false;
    current = 0;
    renderQuestion();
    announce('Project-fit finder started. Question 1 of 5.');
    focusTarget();
  });
}

if (typeof document !== 'undefined') {
  for (const root of document.querySelectorAll('[data-fit-finder]')) initFinder(root);
}
