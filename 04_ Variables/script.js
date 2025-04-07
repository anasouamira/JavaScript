// 1. Using `var`
var name = "Alice";
console.log("Using var:", name);  // Output: Alice

var name = "Bob";  // Redeclaring the same variable with `var`
console.log("Reassigned with var:", name);  // Output: Bob


// 2. Using `let`
let age = 30;
console.log("Using let:", age);  // Output: 30

age = 35;  // Reassigning the value
console.log("Reassigned with let:", age);  // Output: 35

// let age = 40;  // Error! Cannot redeclare variable with `let` in the same scope


// 3. Using `const`
const pi = 3.14;
console.log("Using const:", pi);  // Output: 3.14

// pi = 3.14159;  // Error! Cannot reassign a constant variable

// const pi = 3.14159;  // Error! Cannot redeclare a constant variable
