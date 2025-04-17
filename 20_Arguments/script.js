// Function with parameters
function multiply(a, b) {
  return a * b;
}

// Using arguments
let result = multiply(4, 5); // 4 and 5 are arguments

// Function with arguments object
function printArguments() {
  let all = "";
  for (let i = 0; i < arguments.length; i++) {
    all += arguments[i] + " ";
  }
  return "You passed: " + all;
}

let argList = printArguments("Ali", 23, true, "JS");

document.getElementById("output").innerHTML =
  "Multiply Result: " + result + "<br>" + argList;