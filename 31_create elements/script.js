function createBox() {
  // Create main div
  let newDiv = document.createElement("div");
  newDiv.classList.add("box");

  // Create a paragraph
  let p = document.createElement("p");
  p.textContent = "📄 This is a paragraph inside the box.";

  // Create an image
  let img = document.createElement("img");
  img.src = "https://via.placeholder.com/100";
  img.alt = "Sample image";

  // Create a button
  let btn = document.createElement("button");
  btn.textContent = "Click Me";

  // Add click event to the button
  btn.onclick = function() {
    alert("Button inside the box was clicked!");
  };

  // Append all to the main div
  newDiv.appendChild(p);
  newDiv.appendChild(img);
  newDiv.appendChild(btn);

  // Append the box to the container
  document.getElementById("container").appendChild(newDiv);
}