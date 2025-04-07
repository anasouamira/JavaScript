function convertTextToNumber() {
    // Get the input text
    let inputText = document.getElementById("inputText").value;
  
    // Convert using parseInt
    let parseIntResult = parseInt(inputText);
    document.getElementById("parseIntResult").textContent = parseIntResult;
  
    // Convert using parseFloat
    let parseFloatResult = parseFloat(inputText);
    document.getElementById("parseFloatResult").textContent = parseFloatResult;
  
    // Convert using Unary Plus
    let unaryPlusResult = +inputText;
    document.getElementById("unaryPlusResult").textContent = unaryPlusResult;
  
    // Convert using Number()
    let numberResult = Number(inputText);
    document.getElementById("numberResult").textContent = numberResult;
  }
  