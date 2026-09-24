# Content guide

## Voice and structure

Write for an adult learning a practical skill. Be precise, supportive and direct. Explain the reason for a technique before introducing advanced mechanics. Avoid baby talk, streak pressure and unexplained jargon. ADHD-friendly means visible structure and controllable depth, not nearly empty screens.

A micro-lesson teaches one concept in roughly 3–10 minutes including the exercise. Reading-only timing varies; do not pad prose to reach a duration. Use objective, explanation, worked example, try-it task, common mistake, checkpoint, notes and next lesson. Optional explanations belong in disclosures. The objective should be an observable action, not “understand Excel.”

Split a broad topic when it asks learners to learn a new rule and a new workflow simultaneously. Relative references, absolute references and mixed references are separate lessons. Applied practice can revisit a function in a genuinely different business question; do not create superficial duplicates by swapping names or arbitrary numbers.

## Sources and schemas

`js/academy.js` contains 24 modern tracks. `MicroTopics` records use five pipe-separated fields: title, principle, worked example, task and misconception. `FunctionConcepts` explains the function behind each dataset-backed exercise lesson. The runtime combines these authored records with `js/exercises.js`. `js/curriculum.js` retains original course IDs for existing progress.

Do not reorder existing micro-topic rows without preserving their IDs; current IDs use the original position within a track. Append new records or migrate to explicit stable IDs before reorganizing. Avoid duplicating lesson titles. `tests/content.test.cjs` checks uniqueness, minimum completeness and exercise links.

Terminology: workbook = container of worksheets; worksheet = a grid; range = a group of cells; value = stored/calculated content; format = its presentation. Explain a business measure's numerator, denominator, units, date window and sign convention.

## Exercises and checkpoints

Use fictional deterministic seed data, a specific target, a task, a useful hint, a reference solution and a validation rule. Source datasets have 36–60 rows rather than only toy examples. Structural exercises may use a small controlled example to isolate selection, filling or sorting.

Formula exercises accept equivalent supported formulas producing the expected value and require formula input. Their expected result comes from the reference formula on a fresh seed workbook. This is formative feedback, not a secure exam system or proof of formula equivalence. State exercises inspect exact relevant workbook properties.

A checkpoint must have one correct answer, plausible misconceptions and a useful explanation. Correct option positions vary. Avoid trick questions and unrelated distractors. Persist the score under its actual track and lesson IDs so review recommendations refer to the right concept.

For a new topic:

1. Check `CURRICULUM.md` for overlap and prerequisites.
2. Add a stable lesson record with a worked example and an observable task.
3. Add or link an appropriate exercise; advanced features outside the Lab explicitly require Excel.
4. Add a checkpoint explaining the distinction being tested.
5. Connect a relevant project and update the generated curriculum map.
6. Run content/formula tests and open the affected lesson in the browser.

## Excel accuracy and compatibility

Never claim the Lab implements all Excel behavior. It does not support dynamic spill arrays, structured Table references, PivotTables, Power Query, DAX, VBA or XLSX import/export. Teach these using explicit Excel follow-along tasks and downloadable datasets.

Verify version-sensitive claims against Microsoft documentation. XLOOKUP is absent from Excel 2016/2019; FILTER, UNIQUE, SORT and LET are not “Microsoft 365 only.” Dates use numeric serials; identifiers may require text; number formatting does not change arithmetic precision.

Current primary references:

- [Microsoft XLOOKUP](https://support.microsoft.com/en-us/excel/functions/xlookup-function)
- [Microsoft FILTER](https://support.microsoft.com/en-us/excel/functions/filter-function)
- [Microsoft LET](https://support.microsoft.com/en-us/excel/functions/let-function)
- [Microsoft keyboard shortcuts](https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel)
- [Microsoft calculation precedence](https://support.microsoft.com/en-us/excel/calculation-operators-and-precedence-in-excel)

These were consulted for compatibility, shortcut mappings and parser precedence. Future version changes should be verified when relevant, not researched unconditionally for every content edit.
