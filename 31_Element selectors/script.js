function useSelectors() {
      // ID selector
      const title = document.getElementById("mainTitle");
      title.textContent = "Changed by ID";

      // Class selector (returns HTMLCollection)
      const paragraphs = document.getElementsByClassName("desc");
      paragraphs[0].textContent = "Class selector: 1st paragraph";
      paragraphs[1].textContent = "Class selector: 2nd paragraph";

      // Tag selector
      const allListItems = document.getElementsByTagName("li");
      allListItems[2].textContent = "Tag selector: Modified item 3";

      // querySelector (CSS style - only first match)
      const firstHighlight = document.querySelector(".highlight");
      firstHighlight.textContent = "Selected with querySelector";

      // querySelectorAll (NodeList - all matches)
      const allParagraphs = document.querySelectorAll(".desc");
      allParagraphs.forEach(p => p.style.color = "blue");

      // Output message
      document.getElementById("result").textContent = "Element selectors applied!";
    }