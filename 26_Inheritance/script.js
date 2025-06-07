// Parent class
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        return `${this.name} makes a sound.`;
      }
    }

    // Child class (inherits from Animal)
    class Dog extends Animal {
      bark() {
        return `${this.name} barks loudly.`;
      }
    }

    function showAnimalSounds() {
      const myDog = new Dog("Buddy");

      // Inherited method from Animal + own method from Dog
      const result = `
        🗣️ Speak: ${myDog.speak()}<br>
        🐶 Bark: ${myDog.bark()}
      `;

      document.getElementById("output").innerHTML = result;
    }