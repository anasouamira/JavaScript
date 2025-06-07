class Person {
      constructor(name) {
        this._name = name; // underscore means "internal"
      }

      // Getter: returns the name in uppercase
      get name() {
        return this._name.toUpperCase();
      }

      // Setter: trims and sets the name
      set name(newName) {
        this._name = newName.trim();
      }
    }

    const person = new Person("Alice");

    function updateName() {
      // Get input from the user
      const newName = document.getElementById("nameInput").value;
      
      // Use the setter
      person.name = newName;

      // Use the getter
      document.getElementById("output").innerHTML = `👤 Updated Name: ${person.name}`;
    }