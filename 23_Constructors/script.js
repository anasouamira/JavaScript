    // Constructor function to create person objects
    function Person(name, age) {
      this.name = name;         // Assign name property
      this.age = age;           // Assign age property

      // Method: greet
      this.greet = function() {
        return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
      };
    }

    function createPeople() {
      // Create two person objects using the constructor
      const person1 = new Person("Alice", 25);
      const person2 = new Person("Bob", 30);

      // Call the greet method and display the result
      const result = `
        👩 ${person1.greet()}<br>
        👨 ${person2.greet()}
      `;

      document.getElementById("output").innerHTML = result;
    }