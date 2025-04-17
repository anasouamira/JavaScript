let result = "";

// Loop from 1 to 5
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    result += "Skipping 3 with continue<br>";
    continue; // Skip number 3
  }

  if (i === 5) {
    result += "Stopping at 5 with break<br>";
    break; // Stop the loop when i = 5
  }

  result += "Number: " + i + "<br>";
}

// Show result in HTML
document.getElementById("output").innerHTML = result;

// Also log to console
console.log("Loop with break and continue completed.");