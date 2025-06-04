function showRelations() {
  let second = document.getElementById("second");

  // Get parent and sibling
  let parent = second.parentElement;
  let prevSibling = second.previousElementSibling;

  document.getElementById("output").innerHTML = `
    Parent tag: ${parent.tagName} <br>
    Previous sibling content: "${prevSibling.textContent}"
  `;
}