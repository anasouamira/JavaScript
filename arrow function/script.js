// Arrow function to multiply two numbers
const multiply = (a, b) => a * b;

// Arrow function with no parameter
const welcome = () => "Welcome to JavaScript!";

// Arrow function with one parameter
const greet = name => "Hello, " + name;

// Display output
document.getElementById("output").innerHTML =
  greet("Ali") + "<br>" +
  "4 x 5 = " + multiply(4, 5) + "<br>" +
  welcome();