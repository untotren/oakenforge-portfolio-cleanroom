Build only the static front-end files in this clean-room repository. Do not add dependencies, services, forms, analytics, remote runtimes, or deployment code.

Defect D2-1: axe reports serious color-contrast failures on every project-card tag at both 390px and 1440px. Correct the reusable static CSS token/rule so tags meet WCAG AA without changing page content or layout.

Defect D2-2: axe reports serious label-content-name mismatches for the visible hero action and project image links. Correct the static HTML accessible names so each visible call-to-action text is included in its accessible name; preserve destinations and visible copy.

Acceptance: add deterministic browser or source-level regression tests for the assigned rule; `npm test` exits 0; no external runtime URL is introduced; no file outside the explicit allowlist is created.
