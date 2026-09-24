/* ============================================================
   Curriculum — Excel Focus Academy course structure
   ============================================================ */
const Curriculum = [
  {
    id: 'orientation',
    title: 'Excel Orientation',
    description: 'Meet Excel — learn the interface, navigate like a pro, and create your first workbook.',
    lessons: [
      {
        id: 'orient-1',
        title: 'Welcome to Excel',
        duration: '5 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>What Excel is, what spreadsheets are used for, and how this course works.</p>
          <h3>Why this matters</h3>
          <p>Excel is one of the most widely used tools in business, finance, education, and data analysis. Learning it opens doors to reporting, analysis, and automation.</p>
          <h3>The concept in simple language</h3>
          <p>Excel is a spreadsheet program — a grid of rows and columns where you can store data, do calculations, and build visualizations.</p>
          <h3>Step-by-step: Your first steps</h3>
          <ol>
            <li>Open Excel (or use Excel for the web at <code>office.com</code>)</li>
            <li>Click <strong>Blank Workbook</strong></li>
            <li>Look at the grid — each rectangle is a <strong>cell</strong></li>
            <li>Click any cell and type <strong>Hello</strong></li>
          </ol>
          <h3>Example</h3>
          <div class="lesson-example"><pre>A1: Hello
B1: World
C1: =A1&" "&B1</pre></div>
          <h3>Common mistake</h3>
          <p>Typing a long paragraph directly into a cell. Use a separate text editor for notes, and keep cells focused on one piece of data.</p>
          <h3>Quick challenge</h3>
          <p>Open Excel and type your name in cell A1. Press Enter. Done — you just entered data!</p>
          <h3>Short recap</h3>
          <p>Excel = grid of cells. Each cell has an address (column + row). Type data into cells.</p>
          <h3>What comes next</h3>
          <p><a href="#" onclick="App.navigate('learn','orientation','orient-2')">Next: Navigating the Interface →</a></p>`,
        quiz: {
          question: 'What is the address of the cell in column B, row 3?',
          options: ['A3', 'B3', 'C3', 'B2'],
          correct: 1,
          explanation: 'Cell addresses use column letter first, then row number. Column B, Row 3 = B3.'
        }
      },
      {
        id: 'orient-2',
        title: 'Navigating the Interface',
        duration: '8 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Find your way around Excel: ribbon, formula bar, sheet tabs, and more.</p>
          <h3>Why this matters</h3>
          <p>Knowing where things are saves time and reduces frustration.</p>
          <h3>The concept in simple language</h3>
          <p>Excel's interface has several key areas: the Ribbon (commands), Formula Bar (shows/edit cell content), Name Box (cell address), and Sheet Tabs (switch sheets).</p>
          <h3>Key areas</h3>
          <ul>
            <li><strong>Ribbon</strong> — Tabs with commands (Home, Insert, Formulas…)</li>
            <li><strong>Formula Bar</strong> — Shows what's in the selected cell</li>
            <li><strong>Name Box</strong> — Shows the address of the selected cell</li>
            <li><strong>Sheet Tabs</strong> — Bottom tabs to switch worksheets</li>
            <li><strong>Status Bar</strong> — Bottom: shows sums, averages, mode</li>
          </ul>
          <h3>Step-by-step</h3>
          <ol>
            <li>Click the <strong>Home</strong> tab — see the font, alignment, and number groups</li>
            <li>Click cell A1 and look at the Formula Bar</li>
            <li>Look at the Name Box (left of Formula Bar) — it shows A1</li>
            <li>Click the sheet tab at the bottom to switch sheets</li>
          </ol>
          <h3>Common mistake</h3>
          <p>Not noticing the Formula Bar — always check it to see the actual cell value, especially when a cell shows a result but the formula is hidden.</p>
          <h3>Quick challenge</h3>
          <p>Click different cells and watch the Name Box and Formula Bar change. Can you find cell Z100?</p>
          <h3>Short recap</h3>
          <p>Ribbon = commands. Formula Bar = cell content. Name Box = cell address. Sheet Tabs = switch sheets.</p>
          <h3>What comes next</h3>
          <p><a href="#" onclick="App.navigate('learn','orientation','orient-3')">Next: Workbooks & Worksheets →</a></p>`,
        quiz: {
          question: 'Where do you see the address of the currently selected cell?',
          options: ['Status Bar', 'Name Box', 'Ribbon', 'Sheet Tab'],
          correct: 1,
          explanation: 'The Name Box, located to the left of the Formula Bar, displays the address of the active cell.'
        }
      },
      {
        id: 'orient-3',
        title: 'Workbooks & Worksheets',
        duration: '7 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Workbook vs worksheet — and how to manage sheets.</p>
          <h3>Why this matters</h3>
          <p>A workbook can contain many worksheets — keeping data organized saves hours.</p>
          <h3>The concept in simple language</h3>
          <p>A <strong>workbook</strong> is the whole file (.xlsx). A <strong>worksheet</strong> is one tab/sheet inside it. Think of a workbook as a binder, and worksheets as the pages.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Right-click a sheet tab → <strong>Insert</strong> → Worksheet</li>
            <li>Right-click a sheet tab → <strong>Rename</strong></li>
            <li>Right-click a sheet tab → <strong>Move or Copy</strong></li>
            <li>Right-click a sheet tab → <strong>Delete</strong></li>
          </ol>
          <h3>Example</h3>
          <p>Create a workbook named "Budget 2025" with sheets: Income, Expenses, Summary.</p>
          <h3>Common mistake</h3>
          <p>Deleting a sheet without checking — there's no undo after saving. Always double-check.</p>
          <h3>Quick challenge</h3>
          <p>Create a new workbook, rename Sheet1 to "Data", add a second sheet named "Summary".</p>
          <h3>Short recap</h3>
          <p>Workbook = file. Worksheet = tab. Rename, add, delete, and reorder sheets from right-click menu.</p>
          <h3>What comes next</h3>
          <p><a href="#" onclick="App.navigate('learn','orientation','orient-4')">Next: Cells, Rows & Columns →</a></p>`,
        quiz: {
          question: 'What file extension does a modern Excel workbook use?',
          options: ['.xls', '.xlsx', '.csv', '.docx'],
          correct: 1,
          explanation: '.xlsx is the default format since Excel 2007. .xls is the older format. .csv is plain text.'
        }
      },
      {
        id: 'orient-4',
        title: 'Cells, Rows & Columns',
        duration: '8 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Understand the grid: rows, columns, cells, ranges, and how to select them.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li><strong>Column</strong> — vertical, labeled A, B, C… (up to XFD)</li>
            <li><strong>Row</strong> — horizontal, labeled 1, 2, 3…</li>
            <li><strong>Cell</strong> — intersection of column and row (e.g., C5)</li>
            <li><strong>Range</strong> — a block of cells (e.g., A1:D10)</li>
          </ol>
          <h3>Selecting</h3>
          <ul>
            <li>Click a cell to select it</li>
            <li>Click and drag to select a range</li>
            <li>Ctrl+A to select all</li>
            <li>Shift+Click to select a range from one cell to another</li>
          </ul>
          <h3>Example</h3>
          <p>Select A1:C5 — click A1, hold Shift, click C5.</p>
          <h3>Common mistake</h3>
          <p>Confusing rows and columns. Remember: columns go up/down (letters), rows go left/right (numbers).</p>
          <h3>Quick challenge</h3>
          <p>Select cells B2 through D6. Try Ctrl+Shift+End to select to the last used cell.</p>
          <h3>Short recap</h3>
          <p>Columns = letters (vertical). Rows = numbers (horizontal). Cells = intersections. Ranges = blocks.</p>`,
        quiz: {
          question: 'What is the address of the cell at column E, row 8?',
          options: ['E8', '8E', 'EE', '88'],
          correct: 0,
          explanation: 'Cell addresses always put the column letter first, then the row number: E8.'
        }
      },
      {
        id: 'orient-5',
        title: 'Basic Navigation & Editing',
        duration: '10 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Move around Excel efficiently, enter and edit data, save and open files.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li><strong>Enter data:</strong> Click a cell, type, press Enter</li>
            <li><strong>Edit data:</strong> Double-click cell or press F2</li>
            <li><strong>Navigate:</strong> Arrow keys, Tab (right), Shift+Tab (left)</li>
            <li><strong>Save:</strong> Ctrl+S — always save frequently!</li>
            <li><strong>Open:</strong> Ctrl+O</li>
            <li><strong>New:</strong> Ctrl+N</li>
          </ol>
          <h3>Zoom</h3>
          <p>Use the zoom slider at the bottom-right or Ctrl+Scroll to zoom in/out.</p>
          <h3>Undo/Redo</h3>
          <p>Ctrl+Z undo, Ctrl+Y redo. You can undo many steps.</p>
          <h3>Common mistake</h3>
          <p>Not saving often. Get in the habit of Ctrl+S every few minutes.</p>
          <h3>Quick challenge</h3>
          <p>Create a simple list: A1="Apples", A2="Bananas", A3="Cherries". Save the file as "fruit-list.xlsx".</p>
          <h3>Short recap</h3>
          <p>Click to select, type to enter, Ctrl+S to save, Ctrl+Z to undo, Ctrl+O to open.</p>`,
        quiz: {
          question: 'Which shortcut saves the current file?',
          options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+O', 'Ctrl+N'],
          correct: 1,
          explanation: 'Ctrl+S saves the current file. Ctrl+P prints, Ctrl+O opens, Ctrl+N creates new.'
        }
      }
    ]
  },
  {
    id: 'beginner',
    title: 'Beginner Excel',
    description: 'Formatting, basic formulas, and essential beginner skills.',
    lessons: [
      {
        id: 'begin-1',
        title: 'Number Formats & Basic Formatting',
        duration: '10 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Format numbers as currency, percentage, and decimal. Apply fonts, borders, and alignment.</p>
          <h3>Why this matters</h3>
          <p>Proper formatting makes data readable and prevents calculation errors.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Type 0.15 in a cell</li>
            <li>Select the cell → Home tab → click <strong>%</strong></li>
            <li>Type 100 in another cell → format as <strong>Currency</strong></li>
            <li>Try <strong>Increase Decimal</strong> / <strong>Decrease Decimal</strong></li>
          </ol>
          <h3>Common formats</h3>
          <ul>
            <li><strong>Currency</strong> — $1,234.56</li>
            <li><strong>Percentage</strong> — 15%</li>
            <li><strong>Number</strong> — 1,234.56</li>
            <li><strong>Date</strong> — 1/15/2025</li>
          </ul>
          <h3>Quick challenge</h3>
          <p>Enter 0.22 in A1 and format as percentage. Enter 1500 in B1 and format as currency.</p>
          <h3>Short recap</h3>
          <p>Home tab → Number group → format buttons. Use % for percentages, $ for currency.</p>`,
        quiz: {
          question: 'If you type 0.25 and apply Percentage format, what does the cell display?',
          options: ['0.25', '25', '25%', '0.25%'],
          correct: 2,
          explanation: 'Percentage format multiplies by 100 and adds the % sign. 0.25 becomes 25%.'
        }
      },
      {
        id: 'begin-2',
        title: 'Formulas & The SUM Function',
        duration: '12 min',
        difficulty: 'Beginner',
        content: `
          <h3>What you will learn</h3>
          <p>Write your first formula using SUM and understand formula basics.</p>
          <h3>Why this matters</h3>
          <p>Formulas are the core of Excel — they calculate automatically when data changes.</p>
          <h3>The concept</h3>
          <p>Every formula starts with <strong>=</strong>. The SUM function adds numbers together.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Type 10 in A1, 20 in A2, 30 in A3</li>
            <li>Click A4, type <strong>=SUM(A1:A3)</strong></li>
            <li>Press Enter — see 60</li>
          </ol>
          <h3>Formula anatomy</h3>
          <div class="lesson-example"><pre>=SUM(A1:A3)
│   │    │
│   │    └─ Range: A1 through A3
│   └────── Function name
└────────── Every formula starts with =</pre></div>
          <h3>Common mistake</h3>
          <p>Forgetting the = sign. Typing SUM(A1:A3) without = makes Excel treat it as text.</p>
          <h3>Quick challenge</h3>
          <p>In B1:B5 enter 1,2,3,4,5. In B6 write =SUM(B1:B5). The answer should be 15.</p>
          <h3>Short recap</h3>
          <p>Formulas start with =. SUM adds a range. =SUM(range)</p>`,
        quiz: {
          question: 'What must every Excel formula start with?',
          options: ['+', '=', '#', '$'],
          correct: 1,
          explanation: 'Wait — the correct answer is = ! Every formula must start with the equals sign.'
        }
      },
      {
        id: 'begin-3',
        title: 'Relative & Absolute References',
        duration: '12 min',
        difficulty: 'Intermediate',
        content: `
          <h3>What you will learn</h3>
          <p>Understand relative references, absolute references ($), and when to use each.</p>
          <h3>Why this matters</h3>
          <p>References determine whether a formula adjusts when copied — this is one of the most important concepts in Excel.</p>
          <h3>The concept</h3>
          <ul>
            <li><strong>Relative</strong> (A1) — adjusts when copied</li>
            <li><strong>Absolute</strong> ($A$1) — stays fixed when copied</li>
            <li><strong>Mixed</strong> ($A1 or A$1) — one part fixed, one relative</li>
          </ul>
          <h3>Step-by-step</h3>
          <ol>
            <li>Type 5 in A1, 10 in B1</li>
            <li>In C1 type =A1*B1 → result 50</li>
            <li>Copy C1 to C2 — formula becomes =A2*B2 (relative adjusts)</li>
            <li>Now type =A1*$B$1 in C1 — copy to C2 → B1 stays locked</li>
          </ol>
          <h3>When to use $</h3>
          <p>Use $ when a cell reference should NOT change when you copy the formula — like a tax rate or constant.</p>
          <h3>Common mistake</h3>
          <p>Not locking reference cells when copying formulas down. The $B$1 stays $B$1; A1 becomes A2, A3, etc.</p>
          <h3>Quick challenge</h3>
          <p>In A1:A5 enter 10,20,30,40,50. In B1 enter 2. In C1 type =A1*$B$1. Copy C1 down to C5. All values should double.</p>
          <h3>Short recap</h3>
          <p>=A1 (relative) adjusts when copied. =$A$1 (absolute) stays fixed. Press F4 to toggle reference types.</p>`,
        quiz: {
          question: 'What does $B$1 do when a formula is copied to another cell?',
          options: ['Adjusts column only', 'Adjusts row only', 'Stays locked on B1', 'Becomes B2'],
          correct: 2,
          explanation: '$B$1 is an absolute reference — both column and row are locked with $. The reference stays on B1 no matter where you copy the formula.'
        }
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Excel',
    description: 'Tables, logical functions, lookups, charts, and data tools.',
    lessons: [
      {
        id: 'int-1',
        title: 'IF & Logical Functions',
        duration: '12 min',
        difficulty: 'Intermediate',
        content: `
          <h3>What you will learn</h3>
          <p>Use IF, AND, OR to make decisions in your spreadsheets.</p>
          <h3>Why this matters</h3>
          <p>Logical functions let Excel make choices — pass/fail, discount eligible, over budget, etc.</p>
          <h3>The concept</h3>
          <p>IF checks a condition and returns one value if true, another if false.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Type 85 in A1</li>
            <li>In B1 type <strong>=IF(A1>=70,"Pass","Fail")</strong></li>
            <li>Change A1 to 60 — B1 updates to "Fail"</li>
          </ol>
          <h3>AND and OR</h3>
          <div class="lesson-example"><pre>=IF(AND(A1>70,B1>70),"Both Pass","Not Both")
=IF(OR(A1>70,B1>70),"At Least One Pass","None Pass")</pre></div>
          <h3>Common mistake</h3>
          <p>Forgetting quotes around text values in IF results. "Pass" needs quotes; 70 does not.</p>
          <h3>Quick challenge</h3>
          <p>A1=90, B1=60. Write =IF(AND(A1>=80,B1>=80),"Both High","Not Both High"). Result should be "Not Both High".</p>
          <h3>Short recap</h3>
          <p>=IF(condition, value_if_true, value_if_false). AND requires all true. OR requires any true.</p>`,
        quiz: {
          question: 'What does =IF(AND(A1>5,B1>5),"OK","NO") return if A1=3 and B1=8?',
          options: ['OK', 'NO', 'Error', 'Blank'],
          correct: 1,
          explanation: 'AND(A1>5,B1>5) is FALSE because A1=3 is not >5. So IF returns the value_if_false: "NO".'
        }
      },
      {
        id: 'int-2',
        title: 'XLOOKUP',
        duration: '15 min',
        difficulty: 'Intermediate',
        content: `
          <h3>What you will learn</h3>
          <p>Use XLOOKUP to find values in a table — the modern replacement for VLOOKUP.</p>
          <h3>Why this matters</h3>
          <p>XLOOKUP is more flexible, easier to write, and doesn't break when columns are inserted.</p>
          <h3>The concept</h3>
          <p>XLOOKUP looks for a value in a column and returns a corresponding value from another column.</p>
          <h3>Syntax</h3>
          <div class="lesson-formula">=XLOOKUP(what, where, return_what, "not found")</div>
          <h3>Step-by-step</h3>
          <ol>
            <li>Create a table: A1:B4 with names and scores</li>
            <li>A1:Alice, B1:90, A2:Bob, B2:85, A3:Carol, B3:95</li>
            <li>In D1 type "Bob", in E1 type <strong>=XLOOKUP(D1,A1:A3,B1:B3,"Not found")</strong></li>
            <li>Result: 85</li>
          </ol>
          <h3>Why XLOOKUP over VLOOKUP?</h3>
          <ul>
            <li>Can look left (VLOOKUP cannot)</li>
            <li>Doesn't break when columns are inserted</li>
            <li>Has a built-in "not found" option</li>
            <li>Easier to read</li>
          </ul>
          <div class="lesson-example"><pre>=XLOOKUP("Bob", A1:A3, B1:B3, "Not found")
│        │      │      │      └─ If not found
│        │      │      └─ Return this column
│        │      └─ Look in this column
│        └─ Look for this value
└─ Function name</pre></div>
          <h3>Compatibility</h3>
          <span class="compat-badge compat-m365">Microsoft 365</span> XLOOKUP requires Excel 2021 or Microsoft 365.
          <h3>Common mistake</h3>
          <p>Forgetting to lock ranges with $ when copying the formula. Use $A$1:$A$3 for fixed lookup ranges.</p>
          <h3>Quick challenge</h3>
          <p>Table: A1:A3 has "Apple","Banana","Cherry". B1:B3 has 1.2,0.5,2.0. Find Cherry's price with XLOOKUP.</p>
          <h3>Short recap</h3>
          <p>=XLOOKUP(lookup_value, lookup_array, return_array, if_not_found). More flexible than VLOOKUP.</p>`,
        quiz: {
          question: 'What is a key advantage of XLOOKUP over VLOOKUP?',
          options: ['Faster calculation', 'Can look left', 'Works in older Excel', 'Smaller file size'],
          correct: 1,
          explanation: 'XLOOKUP can look left (return a column to the left of the lookup column). VLOOKUP can only look right.'
        }
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Excel',
    description: 'Advanced formulas, data modeling, error handling, and professional spreadsheet design.',
    lessons: [
      {
        id: 'adv-1',
        title: 'Nested Formulas & LET',
        duration: '12 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Combine formulas inside each other and use LET for readability.</p>
          <h3>Why this matters</h3>
          <p>Complex calculations often need multiple steps. Nesting and LET help you write clear, powerful formulas.</p>
          <h3>The concept</h3>
          <p>A nested formula puts one function inside another. LET lets you name intermediate results so formulas are easier to read.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Type =IF(A1>90,"A",IF(A1>80,"B","C")) — nested IF</li>
            <li>Rewrite with LET: =LET(grade,A1,IF(grade>90,"A",IF(grade>80,"B","C")))</li>
          </ol>
          <div class="lesson-example"><pre>=LET(
  taxRate, 0.07,
  subtotal, A1*B1,
  tax, subtotal*taxRate,
  subtotal+tax
)</pre></div>
          <h3>Common mistake</h3>
          <p>Too many nested IFs become unreadable. Use LET or IFS to simplify.</p>
          <h3>Quick challenge</h3>
          <p>Rewrite =IF(A1>90,"High",IF(A1>70,"Medium","Low")) using LET.</p>
          <h3>Short recap</h3>
          <p>Nested formulas = formulas inside formulas. LET = name intermediate values.</p>`,
        quiz: {
          question: 'What does LET do in Excel?',
          options: ['Deletes cells', 'Names intermediate values', 'Locks cells', 'Formats text'],
          correct: 1,
          explanation: 'LET lets you assign names to intermediate calculations, making formulas easier to read and debug.'
        }
      },
      {
        id: 'adv-2',
        title: 'Excel Error Handling',
        duration: '10 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Understand and fix common Excel errors.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li><strong>#N/A</strong> — Value not found (usually VLOOKUP/XLOOKUP)</li>
            <li><strong>#VALUE!</strong> — Wrong data type in formula</li>
            <li><strong>#REF!</strong> — Invalid cell reference (deleted cell)</li>
            <li><strong>#DIV/0!</strong> — Division by zero</li>
            <li><strong>#NAME?</strong> — Function name misspelled</li>
          </ol>
          <h3>Fix #DIV/0!</h3>
          <div class="lesson-example"><pre>=IFERROR(A1/B1, "N/A")</pre></div>
          <h3>Fix #N/A</h3>
          <div class="lesson-example"><pre>=IFNA(VLOOKUP(...), "Not found")</pre></div>
          <h3>Common mistake</h3>
          <p>Ignoring errors instead of fixing them. Always trace the root cause.</p>
          <h3>Quick challenge</h3>
          <p>Wrap =A1/B1 in IFERROR to show "Check denominator" when B1 is 0.</p>
          <h3>Short recap</h3>
          <p>#N/A = not found. #VALUE! = wrong type. #REF! = bad reference. #DIV/0! = divide by zero.</p>`,
        quiz: {
          question: 'What error appears when you divide by zero?',
          options: ['#VALUE!', '#REF!', '#DIV/0!', '#N/A'],
          correct: 2,
          explanation: '#DIV/0! appears when a formula divides by zero or an empty cell.'
        }
      }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Clean data, analyze trends, and make data-driven decisions.',
    lessons: [
      {
        id: 'da-1',
        title: 'Data Cleaning Fundamentals',
        duration: '12 min',
        difficulty: 'Intermediate',
        content: `
          <h3>What you will learn</h3>
          <p>Clean messy data: duplicates, blanks, inconsistent formats.</p>
          <h3>Why this matters</h3>
          <p>Real-world data is messy. Cleaning is often 80% of the analysis work.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Remove duplicates: Data → Remove Duplicates</li>
            <li>Trim spaces: =TRIM(cell)</li>
            <li>Standardize categories: =UPPER(), =PROPER()</li>
            <li>Find blanks: Filter by blank</li>
            <li>Fix dates: Text to Columns</li>
          </ol>
          <h3>Common problems</h3>
          <ul>
            <li>Leading/trailing spaces</li>
            <li>Mixed case (USA vs Usa vs usa)</li>
            <li>Dates stored as text</li>
            <li>Extra blank rows</li>
          </ul>
          <h3>Quick challenge</h3>
          <p>In A1:A5 you have names with extra spaces. Use =TRIM() to clean them.</p>
          <h3>Short recap</h3>
          <p>TRIM removes spaces. UPPER/PROPER standardize case. Remove Duplicates cleans rows.</p>`,
        quiz: {
          question: 'Which function removes extra spaces from text?',
          options: ['CLEAN', 'TRIM', 'PROPER', 'UPPER'],
          correct: 1,
          explanation: 'TRIM removes extra spaces. CLEAN removes non-printable characters.'
        }
      },
      {
        id: 'da-2',
        title: 'Descriptive Statistics',
        duration: '10 min',
        difficulty: 'Intermediate',
        content: `
          <h3>What you will learn</h3>
          <p>Calculate mean, median, mode, range, and standard deviation.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>=AVERAGE(range) — mean</li>
            <li>=MEDIAN(range) — middle value</li>
            <li>=MODE(range) — most frequent</li>
            <li>=STDEV(range) — standard deviation</li>
            <li>=MIN(range) & =MAX(range) — range</li>
          </ol>
          <h3>Business question</h3>
          <p>"Which product has the highest average rating?" → =AVERAGEIF(Product,"Widget",Rating)</p>
          <h3>Quick challenge</h3>
          <p>Calculate the average, median, and standard deviation of a 20-item dataset.</p>
          <h3>Short recap</h3>
          <p>Mean = average. Median = middle. Mode = most common. StDev = spread.</p>`,
        quiz: {
          question: 'Which function returns the middle value in a dataset?',
          options: ['AVERAGE', 'MODE', 'MEDIAN', 'STDEV'],
          correct: 2,
          explanation: 'MEDIAN returns the middle value when data is sorted.'
        }
      }
    ]
  },
  {
    id: 'dashboards',
    title: 'Dashboards & Visualization',
    description: 'Build professional, interactive Excel dashboards.',
    lessons: [
      {
        id: 'dash-1',
        title: 'Dashboard Design Principles',
        duration: '15 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Design dashboards that are clear, readable, and actionable.</p>
          <h3>Why this matters</h3>
          <p>A good dashboard communicates insights instantly. A bad one confuses the reader.</p>
          <h3>Key principles</h3>
          <ul>
            <li><strong>Clarity:</strong> One message per chart</li>
            <li><strong>Hierarchy:</strong> Most important info first</li>
            <li><strong>Color:</strong> Use color meaningfully, not decoratively</li>
            <li><strong>White space:</strong> Don't overcrowd</li>
            <li><strong>Interactivity:</strong> Use slicers and filters</li>
          </ul>
          <h3>Dashboard layout</h3>
          <ol>
            <li>Title + KPI cards at top</li>
            <li>Key charts in the middle</li>
            <li>Filters/slicers on the side</li>
            <li>Notes/executive summary at bottom</li>
          </ol>
          <h3>Common mistake</h3>
          <p>Too many charts — focus on the 3-5 most important metrics.</p>
          <h3>Quick challenge</h3>
          <p>Sketch a dashboard layout for a sales report with 3 KPIs and 2 charts.</p>
          <h3>Short recap</h3>
          <p>Clarity > decoration. KPIs first, charts next, filters on side.</p>`,
        quiz: {
          question: 'What should be at the top of a dashboard?',
          options: ['Pie charts', 'Title + KPIs', 'Raw data', 'Slicers'],
          correct: 1,
          explanation: 'A dashboard should start with a title and key KPI cards — the most important metrics at a glance.'
        }
      }
    ]
  },
  {
    id: 'powerquery',
    title: 'Power Query',
    description: 'Automate data import, cleaning, and transformation.',
    lessons: [
      {
        id: 'pq-1',
        title: 'Power Query Basics',
        duration: '15 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Use Power Query to import, clean, and transform data automatically.</p>
          <h3>Why this matters</h3>
          <p>Power Query eliminates manual data cleaning — repeatable, refreshable pipelines.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>Data → Get Data → From File/From Table</li>
            <li>Power Query Editor opens</li>
            <li>Remove columns, filter rows, rename</li>
            <li>Change data types</li>
            <li>Close & Load</li>
          </ol>
          <h3>Key concepts</h3>
          <ul>
            <li><strong>Append:</strong> Stack tables vertically</li>
            <li><strong>Merge:</strong> Join tables horizontally</li>
            <li><strong>Unpivot:</strong> Convert wide to long</li>
            <li><strong>Group By:</strong> Aggregate data</li>
          </ul>
          <h3>Common mistake</h3>
          <p>Changing source data structure without updating the query — always check column names.</p>
          <h3>Quick challenge</h3>
          <p>Import a CSV, remove blank rows, rename columns, and load to a new sheet.</p>
          <h3>Short recap</h3>
          <p>Power Query = automated data cleaning. Get Data → Transform → Load.</p>`,
        quiz: {
          question: 'What does Power Query primarily do?',
          options: ['Create charts', 'Import and clean data', 'Write VBA', 'Format cells'],
          correct: 1,
          explanation: 'Power Query imports, transforms, and loads data — automating data preparation.'
        }
      }
    ]
  },
  {
    id: 'datamodel',
    title: 'Data Model & Power Pivot',
    description: 'Relational data and DAX basics.',
    lessons: [
      {
        id: 'dm-1',
        title: 'Data Model Concepts',
        duration: '15 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Understand relational data models and Power Pivot.</p>
          <h3>Why this matters</h3>
          <p>Real data lives in multiple tables. The Data Model connects them.</p>
          <h3>Key concepts</h3>
          <ul>
            <li><strong>Fact table:</strong> Measures (sales, revenue)</li>
            <li><strong>Dimension table:</strong> Context (products, dates, regions)</li>
            <li><strong>Star schema:</strong> Fact in center, dimensions around</li>
            <li><strong>Relationships:</strong> Connect tables via shared keys</li>
          </ul>
          <h3>Step-by-step</h3>
          <ol>
            <li>Data → Get Data → load to Data Model</li>
            <li>Manage Relationships</li>
            <li>Create PivotTable from Data Model</li>
            <li>Use DAX measures</li>
          </ol>
          <h3>Quick challenge</h3>
          <p>Create a Data Model with Sales and Products tables. Link via ProductID.</p>
          <h3>Short recap</h3>
          <p>Fact table = data. Dimension table = context. Star schema = connected tables.</p>`,
        quiz: {
          question: 'What is a fact table?',
          options: ['Descriptions', 'Numerical measures', 'Formatting', 'Charts'],
          correct: 1,
          explanation: 'A fact table contains numerical data (sales, revenue) that you analyze.'
        }
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Macros, VBA basics, and task automation.',
    lessons: [
      {
        id: 'auto-1',
        title: 'Macro Basics',
        duration: '15 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Record and run macros to automate repetitive tasks.</p>
          <h3>Why this matters</h3>
          <p>If you repeat a task more than twice, automate it.</p>
          <h3>Step-by-step</h3>
          <ol>
            <li>View → Macros → Record Macro</li>
            <li>Perform actions (format, sort, etc.)</li>
            <li>Stop recording</li>
            <li>Run macro from Macros dialog</li>
          </ol>
          <h3>Macro security</h3>
          <p>Only enable macros from trusted sources. Untrusted macros can contain malware.</p>
          <h3>Common mistake</h3>
          <p>Recording unnecessary steps — clean up the recorded VBA code.</p>
          <h3>Quick challenge</h3>
          <p>Record a macro that formats a header row in bold and adds a fill color.</p>
          <h3>Short recap</h3>
          <p>Record Macro → Perform actions → Stop → Run. Use trusted sources only.</p>`,
        quiz: {
          question: 'How do you start recording a macro?',
          options: ['Data → Sort', 'View → Macros → Record', 'Insert → Chart', 'Formulas → Define'],
          correct: 1,
          explanation: 'View → Macros → Record Macro starts recording your actions.'
        }
      }
    ]
  },
  {
    id: 'expert',
    title: 'Expert Spreadsheet Engineering',
    description: 'Professional-grade workbook design and optimization.',
    lessons: [
      {
        id: 'exp-1',
        title: 'Workbook Architecture',
        duration: '12 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Design maintainable, professional workbooks.</p>
          <h3>Key principles</h3>
          <ul>
            <li><strong>Separation:</strong> Raw data → Calculations → Reporting</li>
            <li><strong>Readability:</strong> Clear names, consistent formatting</li>
            <li><strong>Documentation:</strong> Comments, notes, changelog</li>
            <li><strong>Validation:</strong> Data validation, input controls</li>
            <li><strong>Testing:</strong> Verify calculations against known results</li>
          </ul>
          <h3>Step-by-step</h3>
          <ol>
            <li>Raw Data sheet — unmodified source data</li>
            <li>Calculations sheet — formulas, named ranges</li>
            <li>Report sheet — charts, summaries</li>
            <li>Documentation sheet — notes, assumptions</li>
          </ol>
          <h3>Common mistake</h3>
          <p>Mixing raw data and reports in one sheet — always separate them.</p>
          <h3>Quick challenge</h3>
          <p>Restructure a messy workbook into Raw Data, Calculations, and Report sheets.</p>
          <h3>Short recap</h3>
          <p>Separate data, calculations, and reports. Document everything.</p>`,
        quiz: {
          question: 'What is the recommended workbook architecture?',
          options: ['One sheet for everything', 'Data → Calculations → Report', 'Only charts', 'Only raw data'],
          correct: 1,
          explanation: 'Professional workbooks separate raw data, calculations, and reporting sheets.'
        }
      }
    ]
  },
  {
    id: 'capstone',
    title: 'Professional Capstone',
    description: 'Build a complete business intelligence workbook.',
    lessons: [
      {
        id: 'cap-1',
        title: 'Capstone Project',
        duration: '60 min',
        difficulty: 'Advanced',
        content: `
          <h3>What you will learn</h3>
          <p>Build a complete business intelligence workbook from scratch.</p>
          <h3>Scenario</h3>
          <p>You are a data analyst for a retail company. Build a workbook that:</p>
          <ul>
            <li>Cleans raw sales data</li>
            <li>Creates a Power Query pipeline</li>
            <li>Builds PivotTables and PivotCharts</li>
            <li>Designs an interactive dashboard</li>
            <li>Writes an executive summary</li>
          </ul>
          <h3>Step-by-step</h3>
          <ol>
            <li>Import raw sales data into Power Query</li>
            <li>Clean: remove duplicates, fix dates, standardize categories</li>
            <li>Load cleaned data to Data Model</li>
            <li>Create PivotTables by region, product, month</li>
            <li>Build PivotCharts for visualization</li>
            <li>Add slicers for interactivity</li>
            <li>Design KPI cards with formulas</li>
            <li>Write executive summary</li>
          </ol>
          <h3>Business questions to answer</h3>
          <ul>
            <li>Which region has the highest revenue?</li>
            <li>What is the month-over-month growth rate?</li>
            <li>Which product category is trending up?</li>
            <li>What percentage of revenue comes from top 10 customers?</li>
          </ul>
          <h3>Grading rubric</h3>
          <ul>
            <li>Data cleaning complete (25%)</li>
            <li>PivotTables correct (25%)</li>
            <li>Dashboard functional (25%)</li>
            <li>Executive summary (25%)</li>
          </ul>
          <h3>Hints</h3>
          <p><strong>Hint 1:</strong> Start with Power Query — clean data first.</p>
          <p><strong>Hint 2:</strong> Build PivotTables before charts.</p>
          <p><strong>Hint 3:</strong> Use slicers for dashboard interactivity.</p>
          <p><strong>Show solution:</strong> See the project walkthrough in the Projects section.</p>
          <h3>Short recap</h3>
          <p>Clean → Model → Analyze → Visualize → Summarize. This is the analytics workflow.</p>`,
        quiz: {
          question: 'What is the first step in the analytics workflow?',
          options: ['Build charts', 'Clean data', 'Write summary', 'Add slicers'],
          correct: 1,
          explanation: 'Clean data first. You cannot analyze dirty data accurately.'
        }
      }
    ]
  }
];

// Flat lesson lookup for easy access
function getLesson(levelId, lessonId) {
  const level = Curriculum.find(l => l.id === levelId);
  if (!level) return null;
  return level.lessons.find(l => l.id === lessonId);
}

function getLevel(levelId) {
  return Curriculum.find(l => l.id === levelId);
}

function getAllLessons() {
  const all = [];
  Curriculum.forEach(level => {
    level.lessons.forEach(lesson => {
      all.push({ ...lesson, levelId: level.id, levelTitle: level.title });
    });
  });
  return all;
}