// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the Filter button
var button = d3.select("#filter-btn");

// Select the date form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Event hanlder function for the form
function runEnter() {
    // Prevent page from refreshing
    d3.event.preventDefault();

    // // Select input element and get raw html node
    var inputElement = d3.select("#datetime");

    // Get the value of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    // console.log(tableData); 

    // Filter the data based on user input
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    // Create a table variable to append the html table
    var tbody = d3.select("filtered-table");

    // Remove any previous child elements from the table 
    tbody.html("");

    // Append rows to table
    filteredData.forEach(ufo => {
        var row =  tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

