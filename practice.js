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

