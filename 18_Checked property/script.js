// Function for Example 1: Checkbox
    function checkCheckbox() {
      const checkbox = document.getElementById('myCheckbox');
      const result = document.getElementById('checkboxResult');

      if (checkbox.checked) {
        result.textContent = "✅ Checkbox is checked.";
      } else {
        result.textContent = "❌ Checkbox is not checked.";
      }
    }

    // Function for Example 2: Radio Buttons
    function checkRadio() {
      const red = document.getElementById('redRadio');
      const blue = document.getElementById('blueRadio');
      const result = document.getElementById('radioResult');

      if (red.checked) {
        result.textContent = "🔴 Red is selected.";
      } else if (blue.checked) {
        result.textContent = "🔵 Blue is selected.";
      } else {
        result.textContent = "⚠️ No color selected.";
      }
    }