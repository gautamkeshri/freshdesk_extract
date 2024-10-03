const tableData = [];
document.querySelectorAll('.rt-tr-group').forEach(rowGroup => {
  const rowData = [];
  rowGroup.querySelectorAll('.rt-td').forEach(cell => {
    rowData.push(cell.innerText.trim());
  });

  if (rowData.length) {
    tableData.push(rowData);
  }
});

// Convert multi-line entries into separate rows
const formattedData = [];
tableData.forEach(row => {
  const maxLines = Math.max(...row.map(cell => cell.split('\n').length));  // Get max lines in the row
  for (let i = 0; i < maxLines; i++) {
    const formattedRow = row.map(cell => cell.split('\n')[i] || "");  // Handle cases where there are fewer lines
    formattedData.push(formattedRow);
  }
});

// Display data in table format
console.table(formattedData);
