  // Create an array with some fruits
  let fruits = ["Apple", "Banana", "Orange"];

  // Show the original array
  let output = "Original array:<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ push() ------------------
  // Add an element at the end
  fruits.push("Mango");
  output += "After push('Mango'):<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ pop() -------------------
  // Remove the last element
  fruits.pop();
  output += "After pop():<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ unshift() ------------------
  // Add an element at the beginning
  fruits.unshift("Pineapple");
  output += "After unshift('Pineapple'):<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ shift() ------------------
  // Remove the first element
  fruits.shift();
  output += "After shift():<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ splice() ------------------
  // Add and remove elements at any position
  // Syntax: splice(startIndex, deleteCount, item1, item2, ...)
  // Example: remove 1 item at index 1 and add "Grapes" and "Peach"
  fruits.splice(1, 1, "Grapes", "Peach");
  output += "After splice(1, 1, 'Grapes', 'Peach'):<br>" + fruits.join(", ") + "<br><br>";

  // ------------------ slice() ------------------
  // Copy part of the array into a new array (does not change the original)
  // Syntax: slice(startIndex, endIndex)
  let slicedFruits = fruits.slice(1, 3); // get elements from index 1 to 2 (3 is not included)
  output += "After slice(1, 3):<br>New array: " + slicedFruits.join(", ") + "<br>";
  output += "Original array is still: " + fruits.join(", ") + "<br><br>";

  // Show the result in the HTML
  document.getElementById("arrayOutput").innerHTML = output;

  // Also log the final arrays to the console
  console.log("Final fruits array:", fruits);
  console.log("Sliced array:", slicedFruits);

  
    // ------------------ Search using indexOf() ------------------
    // indexOf returns the index of the item or -1 if not found
    let index = fruits.indexOf("Orange");
    if (index !== -1) {
      output += "'Orange' found at index: " + index + "<br>";
    } else {
      output += "'Orange' not found.<br>";
    }

    // ------------------ Search using includes() ------------------
    // includes returns true if item is found
    let hasGrapes = fruits.includes("Grapes");
    output += "Does the array include 'Grapes'? " + hasGrapes + "<br><br>";

    // ------------------ Sort the array ------------------
    fruits.sort(); // Alphabetical sort
    output += "After sort():<br>" + fruits.join(", ") + "<br><br>";

    // ------------------ Reverse the array ------------------
    fruits.reverse();
    output += "After reverse():<br>" + fruits.join(", ") + "<br><br>";

    // ------------------ Concat arrays ------------------
    let moreFruits = ["Kiwi", "Pineapple"];
    let allFruits = fruits.concat(moreFruits); // Join two arrays
    output += "After concat with ['Kiwi', 'Pineapple']:<br>" + allFruits.join(", ") + "<br><br>";

    // Show the output in the HTML
    document.getElementById("arrayOutput").innerHTML = output;

    // Also log to console
    console.log("Sorted and reversed fruits array:", fruits);
    console.log("Concatenated array:", allFruits);