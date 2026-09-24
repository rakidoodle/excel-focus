# Verification record

Verified locally on 24 September 2026. This records observed coverage, not a claim of complete Excel compatibility or accessibility certification.

## Automated checks

| Command | Result | Coverage |
|---|---|---|
| `npm run check` | Pass | Application JavaScript parses; local entrypoint assets exist. |
| `npm test` | 47 passed | Formula parsing, precedence, errors, cross-sheet references, conditional evaluation, fill adjustment, CSV round-trip, content IDs/completeness, seeded solutions, storage, history and import bounds. |
| `npm run build` | Pass | Selected FormulaJS functions compile into an 82,918-byte local bundle. |
| `npm run test:e2e` | 68 passed | Chromium: 56 route/width checks, ten learning/workbook workflows, two dark-grid checks. |
| `node scripts/curriculum.cjs` | Pass | Indexes 250 lessons and 32 projects. |

No standalone lint or TypeScript check is configured. `npm run check` is a syntax/asset check, not a general-purpose linter. Package installation reported zero known vulnerabilities at verification time.

The browser suite tests home, dashboard, curriculum, track, lesson, practice, Lab, projects, functions, shortcuts, errors, progress, settings and assessment at 1440, 1024, 768 and 390 pixels. It verifies the expected H1, one active page, no document-wide horizontal overflow, no uncaught page errors and keyboard operation of mobile navigation. Screenshots suppress transition timing so they show settled layouts.

Interaction coverage includes notes/bookmarks/checkpoints/completion surviving reload; focus timer Off, Escape and theme persistence; global search and reference filters (including search from the same reference route); formula validation, reset, undo/redo and workbook persistence; relative fill and keyboard editing; percentage formatting and whole-record sorting; sheet rename/reference updates, deletion/undo and accessible resizing; CSV import/export, rejected JSON import and valid workbook round-trip; and project reflection/completion/workbook opening.

During the first browser pass, two ambiguous test selectors matched multiple legitimate controls. The selectors were made specific and both workflows passed. A separate review found and fixed same-route function search and improved mobile menu focus entry/return. Earlier exploratory browser checks also exercised clipboard copying and filling formulas across rows.

## Visual review

Inspected screenshots of all 14 routes at all four widths, plus full-size homepage and dark mobile Lab images. Reviewed page hierarchy, density, wrapping, containment, toolbar layout, navigation, selected cells, and theme consistency. The desktop home illustration's excessive fixed height was corrected during iteration. A mid-transition sidebar screenshot was corrected by capturing settled animation states.

Saved review artifacts:

- [1440px contact sheet](qa/layout-1440.jpg)
- [1024px contact sheet](qa/layout-1024.jpg)
- [768px contact sheet](qa/layout-768.jpg)
- [390px contact sheet](qa/layout-390.jpg)
- [Desktop homepage](qa/browser-1440px-layout-home.webp)
- [Mobile homepage](qa/browser-390px-layout-home.webp)
- [Dark mobile Lab](qa/browser-dark-lab-390.webp)
- [Dark desktop Lab](qa/browser-dark-lab-1440.webp)

Individual browser-test screenshots are generated under ignored `test-results/`. Visual review is observational rather than pixel-diff regression testing. Do not treat a screenshot at the top of a page as proof that every lower-page state was examined.

## Accessibility and performance evidence

Primary token contrast against page backgrounds: light text 12.15:1, secondary 5.79:1, muted 4.64:1; dark text 14.94:1, muted 7.67:1. Primary button text is 7.78:1 light and 9.12:1 dark. These calculations cover those token pairs, not every composited state. Keyboard workflows include grid editing, selection, focus dialogs, native form controls and mobile-menu focus return.

Local unthrottled Chromium sample: DOMContentLoaded 325 ms; first Lab render 251 ms for 3,120 inputs; a direct cell update 1 ms. This is one local-machine observation, not a production benchmark or a low-end-device guarantee. The grid is intentionally bounded and not virtualized. Formula bundle is 81 KiB; editorial WebP is 83.4 KiB. Fonts use swap and fallbacks. No spreadsheet framework or external runtime CDN is required.

## Remaining boundaries

- Browser automation ran in Chromium only. Firefox, Safari, touch hardware, screen readers and a complete WCAG audit remain unverified.
- Advanced lessons require real Excel for charts, PivotTables, Power Query, DAX, VBA, dynamic spills and other unsupported Lab features. Version-sensitive features are labeled.
- Formula checking compares against reference results; it is formative feedback, not a secure assessment or a proof of Excel semantic parity.
- Workbooks are bounded to 120 rows, 26 columns and 12 sheets. Imports support CSV/JSON, not XLSX. Sorting converts selected formulas to values; JSON import resets row/column dimensions. See the Lab guide for exact restrictions.
- Storage is local to the browser/origin; no account sync. Workbook JSON can be imported; exported progress has no import UI.
- The 24 modern tracks contain 230 lessons; the 20 retained legacy entries bring the total to 250. Coverage is an instructional foundation, not exhaustive coverage of every advanced Excel feature.
