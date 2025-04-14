    // Declare two variables
    let x = 5;
    let y = "5";
    let z = 3;

    // Build a string to show comparison results
    let output = "";

    // == compares only values (not types)
    output += "x == y: " + (x == y) + "<br>"; // true

    // === compares values and types
    output += "x === y: " + (x === y) + "<br>"; // false

    // != checks if values are not equal
    output += "x != z: " + (x != z) + "<br>"; // true

    // !== checks if values or types are not equal
    output += "x !== y: " + (x !== y) + "<br>"; // true

    // Greater than
    output += "x > z: " + (x > z) + "<br>"; // true

    // Less than or equal to
    output += "z <= x: " + (z <= x) + "<br>"; // true

    // Show result in HTML
    document.getElementById("comparisonOutput").innerHTML = output;

    // Also log in console
    console.log("x:", x, "y:", y, "z:", z);