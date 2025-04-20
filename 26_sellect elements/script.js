// Select element by ID
let title = document.getElementById("mainTitle");

// Select elements by class (returns a list)
let paragraphs = document.getElementsByClassName("text");

// Select using querySelector (first match)
let firstPara = document.querySelector(".text");

// Select all matching elements
let allParas = document.querySelectorAll(".text");

// Add event to button
document.getElementById("changeBtn").onclick = function() {
  title.textContent = "Title Changed!"; // Change h1 text
  paragraphs[0].style.color = "blue";   // Change first paragraph
  firstPara.style.fontWeight = "bold";  // Bold first paragraph
};