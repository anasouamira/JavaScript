// Declare a number
let number = 75;

// We'll store the result here
let message = "";

// if statement to check the number
if (number > 90) {
  message = "Grade: A";
} else if (number > 80) {
  message = "Grade: B";
} else if (number > 70) {
  message = "Grade: C";
} else {
  message = "Grade: D or below";
}

// Display the message in HTML
document.getElementById("result").innerHTML = message;

// Also log to the console
console.log("Score:", number);
console.log(message);