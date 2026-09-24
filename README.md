# Learn_excel_with_Noki

A focused, professional Excel learning website with an interactive workbook lab. Built with HTML, CSS and vanilla JavaScript; learning records stay in your browser.

[![Feed my Baby](assets/paypal-support.svg)](https://paypal.me/RuffyTrinidad)

Support Noki through PayPal: [Feed my Baby](https://paypal.me/RuffyTrinidad).

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173. The checked-in formula bundle makes the site usable without a build; `npm run build` regenerates it after formula dependency changes. Serve over HTTP for consistent browser storage and download behavior.

## What is included

- 250 lessons: 230 modern micro-lessons across 24 tracks, plus 20 original lessons with preserved IDs.
- 123 workbook exercises: 111 formula tasks and 12 workbook-state tasks; 250 lesson checkpoints.
- 32 projects using eight original, deterministic fictional datasets.
- Searchable references for 49 functions, 25 Windows/Mac shortcuts and nine Excel errors.
- Lesson notes, bookmarks, completion, checkpoint feedback, focus mode, optional timer and low-energy mode.
- An action-oriented dashboard, progress overview, search, native dialogs and responsive navigation.
- Designed light/dark themes, IBM Plex Sans and Mono, original SVG icons and an original editorial illustration.

## Workbook Lab

Edit a 120-row × 26-column workbook with multiple sheets, a formula bar, range selection, relative fill-down, formatting, history, resizing, sorting, filtering and a frozen header. Lessons launch seeded exercises with reset, hints, solutions and deterministic checks. Projects open their own datasets.

Import/export CSV values or JSON workbooks. JSON retains formulas, sheets and supported formatting. CSV is one sheet of values. All work is local; export backups for anything important.

This is a teaching subset of Excel. It does **not** implement XLSX files, dynamic spills, structured references, charts, PivotTables, Power Query, DAX or VBA. Advanced topics provide explicit Excel follow-alongs. See [Lab architecture and limits](docs/SPREADSHEET_LAB.md).

## Verification

```sh
npm run check                 # JavaScript syntax and local asset links
npm test                      # 47 unit and integration tests
npm run build                 # FormulaJS bundle
npx playwright install chromium
npm run test:e2e               # Chromium workflows and four-width layouts
node scripts/curriculum.cjs   # Regenerate curriculum index
```

There is no separate lint or TypeScript configuration. Browser coverage and manual visual review are recorded in [QA](docs/QA.md); other browser engines and assistive technologies require separate checks.

## Repository guide

Start with [AGENTS.md](AGENTS.md) for ownership, commands and editing rules. Scripts intentionally share classic-script globals. Preserve order in `index.html` and stable content IDs/storage keys.

- [Design system](docs/DESIGN_SYSTEM.md)
- [Content guide](docs/CONTENT_GUIDE.md) and [curriculum map](docs/CURRICULUM.md)
- [Architecture](docs/ARCHITECTURE.md) and [spreadsheet lab](docs/SPREADSHEET_LAB.md)
- [Accessibility](docs/ACCESSIBILITY.md)
- [Asset provenance](docs/ASSETS.md), [audit](docs/AUDIT.md), and [QA](docs/QA.md)
- [Third-party notices](THIRD_PARTY_NOTICES.md)

## Hosting and privacy

Deploy the static application files to an HTTP(S) static host; no backend is required. The GitHub Pages workflow in `.github/workflows/pages.yml` publishes only the runtime site files from `main`. In repository Settings → Pages, select GitHub Actions as the publishing source. Google Fonts is the only external runtime resource; system fonts are the fallback. Progress and workbooks use localStorage, without an account or cross-device sync. A different origin/browser profile creates separate storage. Progress export is a JSON backup; a progress-import interface is not currently provided.

Educational project, free to use and share under its original stated terms. Bundled third-party packages retain their own licenses. This is an independent learning product, not Microsoft Excel.
