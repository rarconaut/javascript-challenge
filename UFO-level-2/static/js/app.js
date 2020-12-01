// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the Filter button
var button = d3.select("#filter-btn");

// Select the date form
var form = d3.select("#form");

// Select the different selectors
var selectCity = d3.select("#selectCity")
var selectState = d3.select("#selectState")
var selectCountry = d3.select("#selectCountry")
var selectShape = d3.select("#selectShape")


// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
selectCity.on("change", runEnter);
selectState.on("change", runEnter);
selectCountry.on("change", runEnter);
selectShape.on("change", runEnter);

// Event hanlder function for the form
function runEnter() {
    // Prevent page from refreshing
    d3.event.preventDefault();

    // // Select input element and get raw html node
    // var inputElement = d3.select("#datetime");

    // Get the value of the input element
    var inputDate = d3.select("#datetime").property("value");
    
    var inputCity = d3.select("#selectCity").property("value");
    var inputState = d3.select("#selectState").property("value");
    var inputCountry = d3.select("#selectCountry").property("value");
    var inputShape = d3.select("#selectShape").property("value");

    console.log(inputDate, inputCity, inputState, inputCountry, inputShape);
    // console.log(tableData); 

    // Filter the data based on user input
    var filteredData = tableData.filter(ufo => 
        ufo.datetime === inputDate ||
        ufo.city === inputCity ||
        ufo.state === inputState || 
        ufo.country === inputCountry ||
        ufo.shape === inputShape);

    console.log(filteredData);

    // Create a table variable to append the html table
    var tbody = d3.select("#filtered-table");
    console.log(tbody)
    // Remove any previous child elements from the table 
    tbody.html("");

    // Append rows to table
    filteredData.forEach(ufo => {
        console.log(ufo)
        var row =  tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

// function getData() {
//     // Prevent page from refreshing
//     d3.event.preventDefault();

//     // Conditional to select input element, get raw html node, and assign inputElement variable
//     var inputValue2 = d3.select("#selectCity").property("value");
//     var inputValue3 = d3.select("#selectState").property("value");
//     var inputValue4 = d3.select("#selectCountry").property("value");
//     var inputValue5 = d3.select("#selectShape").property("value");
//     console.log(inputValue2, inputValue3, inputValue4, inputValue5);
// }