# Baseline audit and implementation decisions

The initial repository was a small static site: 20 lessons across 11 levels, ten project records, a function list, shortcut data and localStorage persistence. It had no build or test configuration.

Rendered desktop/mobile inspection showed the main screens outside the intended content shell, causing a blank-looking primary area and horizontal overflow. Source inspection found an extra closing element around the topbar. The sidebar listed every level before primary tasks; emoji and repeated cards dominated hierarchy. Homepage counts did not match actual content.

Functional defects included project content rendered into the wrong view, assessment content with no matching visible region, placeholder help alerts, duplicate low-energy handlers, duplicate challenge handlers using different containers, all standalone quizzes saved under one generic ID, a focus timer “Off” value falling back to 25 minutes, focus continuation reopening the same lesson and focus exit deleting the resume state. Notes were interpolated without escaping.

Decisions: preserve the static architecture and original learner identifiers, replace the malformed shell, use stable hash routes, simplify primary navigation, separate task-specific compositions, implement native dialogs, persist real lesson quiz IDs and keep resume state. Retain original lessons as a visible legacy section while adding modern micro-tracks. Use real counts from the content arrays. Introduce a bounded working Lab with explicit feature limits instead of claiming complete Excel compatibility.

The first visual refinement corrected an image whose HTML source height overrode its responsive aspect ratio. Subsequent interaction checks exercised formula entry, reference fill, clipboard operations, sheet management and the learning loop. See `QA.md` for the final check record and remaining limitations.
