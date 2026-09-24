# AGENTS.md

## Product and priorities

This repository contains an ADHD-friendly, professional Excel education platform with an interactive spreadsheet learning environment. Priorities, in order: educational correctness, functional learning interactions, clear information hierarchy, accessibility, design quality, performance, maintainability.

## Start here

Search for the relevant symbol or content ID before reading large files. Reuse findings and validate changed behavior first. Keep changes focused; do not introduce a framework or unrelated dependency for a small feature.

- `index.html`: shell and ordered classic scripts. Preserve global handler names and load order when editing consumers.
- `js/app.js`, `components.js`: routes, events and page rendering.
- `js/academy.js`, `curriculum.js`: modern micro-lessons and preserved legacy lessons.
- `js/exercises.js`, `practice-skills.js`, `datasets.js`, `project-cases.js`: deterministic learning tasks and fictional data.
- `js/lab.js`, `engine.js`: workbook UI, history, validation and formula parsing.
- `js/reference.js`: current function, shortcut and error references.
- `js/store.js`, `quiz.js`, `focus.js`, `search.js`: persistence and learning interactions.
- `css/styles.css`, `js/icons.js`, `assets/`: shared design and original assets.

## Design and components

Prefer typography, spacing, composition and purposeful imagery over effects. Reuse tokens and existing buttons, disclosures, tables, dialogs, progress bars and navigation. Do not duplicate primitives for minor differences. Avoid decorative gradients, glassmorphism, oversized rounded cards and empty marketing sections. Use IBM Plex typography and original product icons. Respect useful density; design mobile deliberately. New screens must belong to the established product. Preserve visible keyboard focus and reduced-motion behavior.

## Education and workbook rules

Teach one primary concept per micro-lesson. Explain why, show a realistic worked example, then offer practice. Use progressive disclosure for depth. Verify version-sensitive Excel claims with Microsoft sources. Explicitly distinguish desktop Excel tasks from the Lab's supported subset.

Use known seed data and deterministic expected states. Keep reset, undo, editing and keyboard navigation working. Never display fake working controls. Preserve existing lesson/project IDs and `xfa_*` storage keys or provide a compatible migration. Micro-topic positional IDs must not silently change when records are reordered. Escape user-entered text and validate imported workbooks. Do not evaluate formula strings as JavaScript.

## Commands and validation

- Setup: `npm ci`; browser setup: `npx playwright install chromium`.
- Serve: `npm run dev` (http://127.0.0.1:4173).
- Syntax and local-link checks: `npm run check`. No separate lint or typecheck is configured; this is plain JavaScript.
- Unit/integration tests: `npm test`.
- Formula bundle build: `npm run build`. Edit `lib/formula-entry.js`, not generated `js/vendor/formulas.js`; preserve dependency notices.
- Browser tests: `npm run test:e2e`.
- Curriculum map: `node scripts/curriculum.cjs` after content changes.

Test the affected interaction and persistence with disposable browser data. Shared UI changes warrant desktop/mobile and light/dark checks. Do not clear the user's progress. Broaden checks when scope or failures justify it. Report unperformed checks honestly; documentation-only changes need fact/path verification, not the entire application suite.

## Documentation map

`docs/DESIGN_SYSTEM.md`, `CONTENT_GUIDE.md`, `CURRICULUM.md`, `SPREADSHEET_LAB.md`, `ACCESSIBILITY.md`, `ARCHITECTURE.md`, `ASSETS.md`, `AUDIT.md`, `QA.md`. Read the document relevant to the change rather than all of them routinely.
