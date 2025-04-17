    // Create an empty string to hold the result
    let output = "";

    // Use a for loop to repeat something 5 times
    for (let i = 1; i <= 5; i++) {
      // Add each number to the output string
      output += "This is loop number: " + i + "<br>";
    }

    // Show the result on the web page
    document.getElementById("loopOutput").innerHTML = output;

    // Also log to the browser console
    console.log("Loop finished");