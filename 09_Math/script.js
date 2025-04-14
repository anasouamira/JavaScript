function showMathFunctions() {
        let num = Number(document.getElementById("numberInput").value);

        let result = `
    Math.round(${num}) = ${Math.round(num)} <br>
    Math.floor(${num}) = ${Math.floor(num)} <br>
    Math.ceil(${num}) = ${Math.ceil(num)} <br>
    Math.trunc(${num}) = ${Math.trunc(num)} <br>
    Math.sqrt(${num}) = ${Math.sqrt(num)} <br>
    Math.pow(${num}, 2) = ${Math.pow(num, 2)} <br>
    Math.abs(${num}) = ${Math.abs(num)} <br>
    Math.PI = ${Math.PI.toFixed(5)} <br>
  `;

        document.getElementById("output").innerHTML = result;
    }

    function generateRandom() {
        let random = Math.floor(Math.random() * 100) + 1;
        document.getElementById("randomOutput").innerHTML = `🎲 Random number: <strong>${random}</strong>`;
    }