// 1️⃣ Global Scope Example
let globalVar = "I am a global variable!";
function showGlobalVar() {
  return globalVar; // Global variable can be accessed inside function
}

// Display global variable result
document.getElementById("output1").innerHTML = "Global Scope: " + showGlobalVar();

// 2️⃣ Local (Function) Scope Example
function functionScope() {
  let localVar = "I am a local variable!";
  return localVar; // Local variable inside function
}

// Display local variable result
document.getElementById("output2").innerHTML = "Function Scope: " + functionScope();

// 3️⃣ Block Scope Example with let/const
if (true) {
  let blockVar = "I am block scoped!";
  const blockConst = "I am also block scoped!";
}

// Trying to access block-scoped variables outside the block
try {
  document.getElementById("output3").innerHTML = "Block Scope: " + blockVar; // This will throw an error
} catch (error) {
  document.getElementById("output3").innerHTML = "Block Scope Error: " + error.message;
}

// 4️⃣ Self-Invoked Function (IIFE) Example
(function() {
  let secret = "This is a secret from IIFE!";
  console.log(secret); // This works within the IIFE
  document.getElementById("output4").innerHTML = "IIFE says: " + secret; })();