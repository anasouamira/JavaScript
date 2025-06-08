// Select elements using various DOM methods
    const title = document.getElementById("mainTitle");
    const para = document.querySelector(".description");
    const list = document.querySelector("#itemList");
    const input = document.getElementById("newItemInput");
    const output = document.getElementById("output");
    const addBtn = document.getElementById("addBtn");
    const toggleBtn = document.getElementById("toggleClassBtn");

    // Add a new list item
    addBtn.addEventListener("click", function () {
      const newText = input.value.trim();

      if (newText !== "") {
        const li = document.createElement("li");              // Create <li>
        li.textContent = newText;                             // Set text
        li.setAttribute("data-item", newText);                // Set attribute
        li.classList.add("item");                             // Add class
        list.appendChild(li);                                 // Add to list

        input.value = "";                                     // Clear input
        output.textContent = `✔️ Added item: ${newText}`;     // Update message
      } else {
        output.textContent = "⚠️ Please enter a value.";
      }
    });

    // Toggle class on the paragraph
    toggleBtn.addEventListener("click", function () {
      para.classList.toggle("highlight");

      const status = para.classList.contains("highlight")
        ? "Highlight ON"
        : "Highlight OFF";

      output.textContent = `🎨 ${status}`;
    });

    // Replace first item on double click
    list.addEventListener("dblclick", function () {
      const items = document.querySelectorAll(".item");

      if (items.length > 0) {
        const first = items[0];
        const newItem = document.createElement("li");
        newItem.textContent = "🔁 Replaced Item";
        newItem.classList.add("item");

        list.replaceChild(newItem, first);
        output.textContent = "♻️ First item replaced.";
      }
    });