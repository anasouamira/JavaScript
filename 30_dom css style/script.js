let heading = document.getElementById("heading");

    // Change styles directly using .style
    function changeStyle() {
      heading.style.color = "white";
      heading.style.backgroundColor = "purple";
      heading.style.fontSize = "30px";
      heading.style.padding = "10px";
      heading.style.borderRadius = "10px";
    }

    // Add a class
    function addClass() {
      heading.classList.add("highlight");
    }

    // Remove a class
    function removeClass() {
      heading.classList.remove("highlight");
    }

    // Toggle class on/off
    function toggleClass() {
      heading.classList.toggle("highlight");
    }

    // Toggle an extra class (e.g., shadow effect)
    function toggleShadow() {
      heading.classList.toggle("shadow");
    }