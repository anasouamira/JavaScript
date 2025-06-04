// 1️⃣ Normal function: greet someone
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
let message1 = greet("Ayesha");

// 2️⃣ Function with calculation: multiply two numbers
function multiply(x, y) {
  return x * y;
}

let message2 = "5 * 4 = " + multiply(5, 4);

// 3️⃣ Function without parameters: get current date
function getCurrentDate() {
  const today = new Date();
  return today.toDateString();
}

let message3 = "Today's Date: " + getCurrentDate();

// Display all outputs
document.getElementById("output1").innerHTML = message1;
document.getElementById("output2").innerHTML = message2;
document.getElementById("output3").innerHTML = message3;

// Log all messages
console.log(message1);
console.log(message2);
console.log(message3);