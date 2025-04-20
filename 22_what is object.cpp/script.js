// Creating an object
let person = {
  name: "Ayesha",
  age: 25,
  isStudent: true,
  greet: function() {
    return "Hi, my name is " + this.name;
  }
};

// Accessing properties
let name = person.name; // or person["name"]
let age = person.age;
let greeting = person.greet();

// Show in HTML
document.getElementById("output").innerHTML =
  "Name: " + name + "<br>" +
  "Age: " + age + "<br>" +
  "Greeting: " + greeting;