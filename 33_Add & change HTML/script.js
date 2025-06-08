// Change existing HTML content
    function changeHTML() {
      const title = document.getElementById("mainTitle");
      const content = document.getElementById("content");

      // Change with innerHTML (can include tags)
      title.innerHTML = "🌟 <i>New Title with Italics</i>";

      // Replace content inside div
      content.innerHTML = "<p><b>Content has been changed!</b></p>";
    }

    // Add new HTML elements
    function addNewHTML() {
      const content = document.getElementById("content");

      // Create new paragraph
      const newPara = document.createElement("p");
      newPara.textContent = "➕ This paragraph was added using JavaScript!";

      // Append to the content div
      content.appendChild(newPara);
    }