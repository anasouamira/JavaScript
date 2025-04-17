let result = "";

    // ----- while loop -----
    let i = 1;
    result += "<strong>While Loop:</strong><br>";
    while (i <= 3) {
      result += "i = " + i + "<br>";
      i++;
    }

    // ----- do...while loop -----
    let j = 1;
    result += "<br><strong>Do...While Loop:</strong><br>";
    do {
      result += "j = " + j + "<br>";
      j++;
    } while (j <= 3);

    // ----- do...while loop when condition is false -----
    let k = 5;
    result += "<br><strong>Do...While with false condition:</strong><br>";
    do {
      result += "This runs even though k > 3 (k = " + k + ")<br>";
      k++;
    } while (k <= 3); // false, but runs once

    // Display the result
    document.getElementById("output").innerHTML = result;

    // Log to console
    console.log("Loops executed");