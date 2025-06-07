// Parent class
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        return `${this.name} makes a generic sound.`;
      }
    }

    // Child class
    class Dog extends Animal {
      constructor(name, breed) {
        super(name); // Call parent constructor to set name
        this.breed = breed;
      }

      speak() {
        // Call the parent class's speak() method
        return super.speak() + ` ${this.name} barks.`;
      }
    }

    function showMessages() {
      const dog = new Dog("Rex", "German Shepherd");

      const result = `
        🐶 Name: ${dog.name}<br>
        🐕 Breed: ${dog.breed}<br>
        🗣️ Sound: ${dog.speak()}
      `;

      document.getElementById("output").innerHTML = result;
    }