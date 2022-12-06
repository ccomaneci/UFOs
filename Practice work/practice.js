// Printing a string with JavaScript
console.log("Hello, world!");

# Printing a string with Python
print("Hello, world!")

// Simple JavaScript console.log statement
function printHello(); {
    console.log("Hello there!");
}
//console.log("Hello there!")
//Hello There!


// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  // console.log(addition(4, 5));
  //9 


  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  // console.log(doubleAddition(65, 34));
  //198


  // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
  //printHello = () => "Hello there!";


  // Original addition function
function addition(a, b) {
    return a + b;
  }
  // Converted to an arrow function
addition = (a, b) => a + b;
//addition


// Original addition function
function addition(a, b) {
    return a + b;
  }
  // Converted to an arrow function
addition = (a, b) => a + b;
//addition


// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  doubleAddition = (c, d) => addition(c, d) * 2;
  //doubleAddition


  //for loop
  var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

  for (var i = 0; i < vegetables.length; i++) {
      console.log("I love " + vegetables[i]);
  }
  for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }


 function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
    Filter the default data to show only the date entered
};
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};


function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);