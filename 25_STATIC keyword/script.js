// Define a class with a static method
    class Calculator {
      // Static method: can only be called on the class
      static multiply(x, y) {
        return x * y;
      }

      // Normal method (just to show the difference)
      divide(x, y) {
        return x / y;
      }
    }

    function useStaticMethod() {
      // Call static method using class name
      const product = Calculator.multiply(4, 5);

      // Create an instance
      const calc = new Calculator();
      const quotient = calc.divide(20, 4);

      // Show results
      document.getElementById("output").innerHTML = `
        ✳️ Static multiply: 4 * 5 = ${product}<br>
        ➗ Instance divide: 20 / 4 = ${quotient}
      `;
    }