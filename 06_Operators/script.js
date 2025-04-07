function performOperations() {
    // Get values from the input fields
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Perform arithmetic operations
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    let remainder = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
    let exponentiation = num1 ** num2;

    // Display the results in the HTML
    document.getElementById("sum").textContent = sum;
    document.getElementById("difference").textContent = difference;
    document.getElementById("product").textContent = product;
    document.getElementById("quotient").textContent = quotient;
    document.getElementById("remainder").textContent = remainder;
    document.getElementById("exponentiation").textContent = exponentiation;
}
