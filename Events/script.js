// Button click with addEventListener
document.getElementById("jsClick").addEventListener("click", function () {
  alert("Clicked using JS addEventListener!");
});

// Hover box mouse events
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "lightgreen";
  box.textContent = "You're hovering!";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
  box.textContent = "Hover Over Me";
});

// Key press event
document.getElementById("keyInput").addEventListener("keydown", function (event) {
  console.log("You pressed:", event.key);
});

// Form submit
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  alert("Form submitted!");
});