 // Define a JavaScript object
    const person = {
      name: "Alice",        // Property: name
      age: 25,              // Property: age
      isStudent: true,      // Property: isStudent
      greet: function() {   // Method: greet
        return "Hello, my name is " + this.name + "!";
      }
    };

    function showPersonDetails() {
      // Accessing and modifying object properties
      person.age = 26;  // Update age
      person.city = "New York";  // Add new property

      // Creating a message with object values
      const message = `
        👤 Name: ${person.name}<br>
        🎂 Age: ${person.age}<br>
        🎓 Student: ${person.isStudent}<br>
        🏙️ City: ${person.city}<br>
        💬 Greet: ${person.greet()}
      `;

      // Display result in the paragraph
      document.getElementById("output").innerHTML = message;
    }