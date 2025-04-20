function changeStuff() {
  // Select elements
  let heading = document.getElementById("heading");
  let link = document.getElementById("myLink");

  // ✅ Modify element properties
  heading.textContent = "Heading Changed!";
  heading.style.color = "blue";
  heading.style.fontSize = "28px";

  // ✅ Modify attributes
  link.setAttribute("href", "https://openai.com");
  link.setAttribute("target", "_self");
  link.textContent = "Go to OpenAI";

  // ✅ Add new attribute
  link.setAttribute("title", "Click to go to OpenAI");

  // ✅ Remove an attribute
  // link.removeAttribute("target");
}