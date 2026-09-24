# Workbook Lab

## Architecture and dependency decision

The UI is a bounded semantic HTML table in `js/lab.js`, with real inputs and roving keyboard focus. A worksheet supports 120 rows × 26 columns; a workbook supports up to 12 sheets. The DOM approach keeps cells discoverable to accessibility tools and preserves the project's static vanilla-JavaScript architecture. It is designed for learning datasets, not million-row production workbooks.

`js/engine.js` tokenizes and parses expressions into an AST, resolves cell/range references, detects cycles and delegates supported functions to Formula.js. It never evaluates input as JavaScript. IF and IFERROR evaluate lazily so unused error branches do not break valid results. Evaluation caches are scoped to a render and discarded after changes. Range bounds and formula lengths are checked before calculation.

Evaluated alternatives (September 2026):

| Option | Findings | Decision |
| --- | --- | --- |
| Formula.js 4.6.1 | MIT; registry reports July 2026 update; documented browser use; function library rather than grid/parser. Full package ~2.4 MB unpacked; selected local bundle ~81 KB minified. | Selected function implementation. Custom parser and semantic grid supply references and interaction. |
| HyperFormula 3.4 | Rich dependency/formula engine, TypeScript-oriented integration; GPLv3 or purchased proprietary license. | Not selected without a deliberate product licensing decision. |
| Univer | Active TypeScript office-suite architecture, Apache-2.0 core, broad spreadsheet capabilities and customization. Presets package alone is not a meaningful total bundle-size measure. | Not selected for this small static site; larger integration and accessibility/performance surface than this bounded teaching grid. No comparative runtime benchmark was performed. |
| Handsontable formula-parser | Existing standalone parsing approach; older repository and broader legacy behavior to audit. | Not selected; retain a small explicit supported grammar with regression coverage. |

Primary sources: [Formula.js usage](https://formulajs.info/), [Formula.js license](https://github.com/formulajs/formulajs/blob/master/LICENSE), [HyperFormula licensing](https://hyperformula.handsontable.com/docs/guide/license-key.html), [Univer repository](https://github.com/dream-num/univer), [formula-parser repository](https://github.com/handsontable/formula-parser). Package version, dependencies and size were also checked through npm metadata.

`lib/formula-entry.js` explicitly selects functions. `npm run build` bundles them into `js/vendor/formulas.js` using esbuild. The checked-in bundle means serving the app does not require npm or a CDN. Update the entrypoint and rebuild; do not hand-edit vendor output. Preserve third-party notices.

## Workbook schema and persistence

```js
{
  version: 1,
  title: 'Northline retail · 60 orders',
  dataset: 'retail',
  active: 'data',
  exercise: null, // or stable exercise ID
  project: undefined, // optional project ID
  sheets: [{
    id: 'data', name: 'Data', freeze: true,
    cells: { A1: { raw: 'Revenue', format: 'header' } },
    widths: {}, heights: {}
  }]
}
```

`xfa_workbook` stores the active workbook in localStorage. `xfa_exercises` stores successful checks; `xfa_projects` stores project completion. Existing learner storage keys are retained. Local writes report failures and suggest export. There is no account or cloud sync. Changing origin or browser profile creates a separate storage area.

Undo/redo keeps up to 40 workbook snapshots in memory. Edits, fills, formatting, sorting, sheet changes and imports are reversible during the current session; history does not survive reload. A new edit clears the redo branch. Reset restores known exercise seed data in one transaction. Loading another dataset or exercise replaces the active workbook; export work you want to retain before switching or reloading.

## Exercise contract

`js/exercises.js`: formula tasks with stable ID, title, topic, dataset, target (normally Analysis!B3), instruction, hint and reference solution. `exerciseExpected` evaluates the reference against a fresh seed. The checker compares numbers with tolerance and text exactly, requiring a formula rather than a typed result. This does not prove arbitrary formula equivalence or prevent determined gaming.

`js/practice-skills.js`: structural tasks with custom seed cells and a `check(lab)` function. Examples validate range selection, percentage/currency/date formatting, relative/absolute fill, whole-record sorting, filtering and sheet naming. `createExerciseWorkbook` builds a fresh seed without touching lesson progress.

Lessons refer to exercises by ID. Opening a lesson saves its resume state; opening practice does not erase that lesson. Projects open their own dataset and record a project association. Unsupported advanced workflows explicitly run in Excel.

## Interaction

- Click a cell to select it; Shift-click or Shift-arrows extends a rectangular range.
- The name box accepts A1 or B2:C5; the formula bar edits the active cell.
- Type to replace a selected cell. F2/double-click/Enter enters edit mode; Enter or Tab commits; Escape cancels.
- Arrows navigate; Shift-arrows select. Ctrl/Cmd+C/X/V handles tab-separated clipboard values, with cut clearing the selection. Clipboard copies calculated values; use Fill down to propagate relative formulas.
- Ctrl/Cmd+Z undoes, Ctrl+Y or Cmd+Shift+Z redoes, Ctrl/Cmd+D fills down. The top selected row supplies the pattern.
- Formatting: General, Number, Currency (USD display), Percent, Date and Bold/header.
- Column/row edges resize with the pointer. Cell size provides a keyboard-accessible alternative.
- Sort orders the selected rectangle by its first column, converting formulas in that rectangle to values. Select whole records and omit headers. Undo restores the source.
- Filtering is a case-insensitive substring across the row, not a full Excel AutoFilter.
- Freeze keeps row 1 under the column headings. Sheet names update cross-sheet formulas; removal causes broken references until restored.

## Import/export and limits

CSV import accepts quoted commas, newlines and doubled quotes, up to 500 KB, 120 rows and 26 columns. Formula-like CSV text is not executed. CSV export writes calculated values, quotes fields and neutralizes formula-like text. Workbook JSON retains formulas and formats; import validates bounds, IDs, names and cell types and rejects oversized/malformed input. JSON imports reset custom row/column dimensions.

Supported formula syntax: numeric/text/Boolean constants, A1 references with dollar locks, qualified sheet references, rectangular ranges, arithmetic, percentages, comparisons, concatenation, parentheses and explicitly bundled functions. XLOOKUP supports exact first-to-last matches with an optional fallback. Modern array results do not spill; unsupported functions return #NAME?. Circular dependencies report the Lab-specific #CIRC!.

No XLSX, charts, pivots, structured Table references, named ranges, external workbooks, macros, array arithmetic, dynamic spill, locale-specific separators or full Excel coercion/error parity. Date behavior targets modern 1900-system serials; the historical 1900 leap-day edge is not reproduced. Use DATE for unambiguous date input. Mobile retains a scrollable grid and a simplified wrapping toolbar; substantial workbook tasks work best on a larger display.

## Validation

`npm test`: parser, functions, errors, CSV, content contracts, persistence and workbook history. `npm run test:e2e`: browser routes at four widths and real editing/import/export/learning flows. `npm run check`: syntax and local asset paths. Run `npm run build` after changing the formula entrypoint or dependency version.
