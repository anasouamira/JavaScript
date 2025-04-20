function showInnerOuter() {
  let box = document.getElementById("box");

  let info = `
    innerHTML: ${box.innerHTML} <br>
    innerText: ${box.innerText} <br>
    outerHTML: ${box.outerHTML} <br>
    outerText: ${box.outerText} 
  `;

  document.getElementById("output").innerHTML = info;
}