// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the Filter button
var button = d3.select("#filter-btn");

// Select the date form
var form = d3.select("#datetime");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Event hanlder function for the form
function runEnter() {
    // Prevent page from refreshing
    d3.event.preventDefault();

    // // Select input element and get raw html node
    // var inputElement = 
}
    // Get the value of the input element
    var inputValue = form.property("value");
    
    console.log(inputValue);
    console.log(tableData);

    // Filter the data based on user input
    var filteredData = tableData.filter

