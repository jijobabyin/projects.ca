// Sample data for the table
const tableData = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "San Francisco" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
];

function buildTableGrid(data) {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  // Create table header row
  const headerRow = document.createElement("tr");
  for (let key in data[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  tableHead.appendChild(headerRow);

  // Create table rows for data
  data.forEach((item) => {
    const dataRow = document.createElement("tr");
    for (let key in item) {
      const td = document.createElement("td");
      td.textContent = item[key];
      dataRow.appendChild(td);
    }
    tableBody.appendChild(dataRow);
  });

  // Append the table header and body to the table
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  // Add CSS styling to the table
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";

  tableContainer.appendChild(table);
}

// Call the function with the sample data to build the table
buildTableGrid(tableData);
