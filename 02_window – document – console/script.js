// 1. window example
window.alert("Page is loaded!"); // Alert when the page opens

// 2. console example
console.log("This message is from script.js"); // Shows in browser console

// 3. document example
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  // Change the text on the page
    document.getElementById("title").innerText = "You clicked the button!";

  // Change the background color
    document.body.style.backgroundColor = "lightyellow";

  // Log to console
    console.log("Button was clicked!");
});
