function navigateDOM() {
      const target = document.getElementById("target");

      // Parent node
      const parent = target.parentNode;
      parent.style.border = "2px dashed gray";

      // First and last children of <ul>
      const first = parent.firstElementChild;
      const last = parent.lastElementChild;
      first.classList.add("highlight");
      last.classList.add("highlight");

      // Next and previous siblings
      const next = target.nextElementSibling;
      const prev = target.previousElementSibling;

      if (next) next.textContent += " ← (Next)";
      if (prev) prev.textContent += " ← (Previous)";

      // Output
      document.getElementById("result").textContent =
        "✅ DOM navigation applied! Check highlights and labels.";
    }