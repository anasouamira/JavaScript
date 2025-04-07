// 1. Concatenation using `+` operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenating two strings
console.log("Concatenated with +:", fullName); // Output: John Doe

// 2. Concatenation with numbers
let age = 25;
let message = "I am " + age + " years old."; // Concatenating a string and a number
console.log("Concatenated with number:", message); // Output: I am 25 years old.

// 3. Concatenation using `+=` operator
let greeting = "Hello, ";
greeting += "how are you today?"; // Adding more text to the existing string
console.log("Concatenated with +=:", greeting); // Output: Hello, how are you today?

// 4. Concatenation with Template Literals (Modern way)
let person = "John";
let profession = "developer";
let intro = `${person} is a ${profession}.`; // Concatenation with template literals
console.log("Concatenated with Template Literals:", intro); // Output: John is a developer.
