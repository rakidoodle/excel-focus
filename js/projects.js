/* ============================================================
   Projects — Project-based learning data
   ============================================================ */
const Projects = [
  { id: 'p1', level: 'orientation', title: 'Personal Expense Tracker',
    scenario: 'You want to track your monthly expenses.',
    objective: 'Create a simple expense tracker with categories and totals.',
    skills: ['Entering data', 'SUM', 'Basic formatting'],
    steps: [
      'Create headers: Date, Category, Item, Amount',
      'Enter 5 sample expenses',
      'Use =SUM() for total',
      'Format Amount as Currency',
      'Add a simple pie chart of categories'
    ],
    advanced: 'Add a monthly summary sheet with SUMIF by category.' },
  { id: 'p2', level: 'beginner', title: 'Monthly Budget',
    scenario: 'Plan your monthly budget across income and expenses.',
    objective: 'Build a budget with income, fixed expenses, and savings goal.',
    skills: ['Formulas', 'Number formatting', 'Basic charts'],
    steps: [
      'Create Income section with categories',
      'Create Expenses section',
      'Use =SUM for totals',
      'Calculate remaining: =Income-Expenses',
      'Add conditional formatting: red if negative'
    ],
    advanced: 'Add a savings tracker with goal progress bar.' },
  { id: 'p3', level: 'beginner', title: 'Grade Tracker',
    scenario: 'Track student grades across assignments.',
    objective: 'Calculate average, min, max grades and letter grades.',
    skills: ['AVERAGE', 'MIN', 'MAX', 'IF'],
    steps: [
      'Enter student names and 5 assignment scores',
      'Use =AVERAGE for final grade',
      'Use =MIN and =MAX',
      'Use =IF for letter grade (>=90 A, >=80 B…)'
    ],
    advanced: 'Add a histogram with COUNTIF for grade distribution.' },
  { id: 'p4', level: 'intermediate', title: 'Sales Report',
    scenario: 'Analyze monthly sales data by region and product.',
    objective: 'Create a sales analysis with lookups, PivotTables, and charts.',
    skills: ['XLOOKUP', 'PivotTables', 'Charts', 'Conditional Formatting'],
    steps: [
      'Import/clean sales data',
      'Use XLOOKUP for product details',
      'Create PivotTable by region and product',
      'Add a PivotChart',
      'Use conditional formatting for top performers'
    ],
    advanced: 'Add a dashboard sheet with KPIs and slicers.' },
  { id: 'p5', level: 'intermediate', title: 'Employee Attendance Tracker',
    scenario: 'Track employee attendance with statuses.',
    objective: 'Build a tracker with data validation and COUNTIF summaries.',
    skills: ['Data Validation', 'COUNTIF', 'Conditional Formatting', 'Tables'],
    steps: [
      'Create table with Employee, Date, Status',
      'Add drop-down list for Status (Present/Absent/Late)',
      'Use COUNTIF for attendance summary',
      'Apply conditional formatting: green=Present, red=Absent'
    ],
    advanced: 'Add a PivotTable showing attendance by employee and month.' },
  { id: 'p6', level: 'intermediate', title: 'Invoice Tracker',
    scenario: 'Track client invoices with due dates and status.',
    objective: 'Build an invoice tracker with date formulas and conditional formatting.',
    skills: ['Dates', 'TODAY', 'IF', 'Conditional Formatting'],
    steps: [
      'Create invoice table: ID, Client, Amount, Due Date, Status',
      'Use =TODAY() for current date',
      'Use =IF to flag overdue: =IF(Due<TODAY(),"Overdue","Paid")',
      'Apply conditional formatting for overdue'
    ],
    advanced: 'Add aging analysis with COUNTIFS by days overdue.' },
  { id: 'p7', level: 'advanced', title: 'Inventory Management Workbook',
    scenario: 'Manage inventory across multiple warehouses.',
    objective: 'Build a multi-sheet inventory system with lookups and formulas.',
    skills: ['VLOOKUP/XLOOKUP', 'SUMIF', 'Tables', 'Data Validation'],
    steps: [
      'Create Raw Data, Inventory, Reports sheets',
      'Use XLOOKUP for product details',
      'Use SUMIF for stock totals',
      'Add reorder alerts with IF',
      'Create a summary chart'
    ],
    advanced: 'Add Power Query to import from CSV and automate refresh.' },
  { id: 'p8', level: 'advanced', title: 'Sales Analysis Dashboard',
    scenario: 'Create a professional sales dashboard for executives.',
    objective: 'Build an interactive dashboard with KPIs, charts, and slicers.',
    skills: ['PivotTables', 'PivotCharts', 'Slicers', 'Dashboard Design'],
    steps: [
      'Prepare clean sales data',
      'Create PivotTable with Region, Product, Sales',
      'Add PivotChart',
      'Insert slicers for filtering',
      'Design KPI cards with formulas'
    ],
    advanced: 'Add a timeline slicer for date filtering and dynamic titles.' },
  { id: 'p9', level: 'powerquery', title: 'Monthly Sales Automation',
    scenario: 'Automate combining messy monthly sales files.',
    objective: 'Use Power Query to combine, clean, and prepare data.',
    skills: ['Power Query', 'Data Cleaning', 'Append Queries'],
    steps: [
      'Import multiple CSV files',
      'Clean: remove blanks, fix dates, standardize categories',
      'Append all months into one table',
      'Load to Excel for analysis'
    ],
    advanced: 'Add error handling and a refresh pipeline.' },
  { id: 'p10', level: 'advanced', title: 'Financial Summary Report',
    scenario: 'Build a quarterly financial summary for a small business.',
    objective: 'Create a professional report with PivotTables, charts, and KPIs.',
    skills: ['PivotTables', 'Calculated Fields', 'Charts', 'Formatting'],
    steps: [
      'Structure income and expense data',
      'Build PivotTable by quarter',
      'Add calculated fields for margins',
      'Create combo chart for revenue vs. expenses',
      'Write executive summary'
    ],
    advanced: 'Add sensitivity analysis with Data Tables.' },
];