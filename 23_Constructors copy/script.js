// Define a class
    class Person {
      // Constructor runs when you create a new object
      constructor(name, age) {
        this.name = name;  // Set the name property
        this.age = age;    // Set the age property
      }

      // Method: greet
      greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
      }
    }

    function createPeople() {
      // Create two people using the class
      const person1 = new Person("Alice", 25);
      const person2 = new Person("Bob", 30);

      // Call the greet method and show results
      const result = `
        👩 ${person1.greet()}<br>
        👨 ${person2.greet()}
      `;

      document.getElementById("output").innerHTML = result;
    }