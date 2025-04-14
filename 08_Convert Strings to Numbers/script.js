
function convertStringToNumber() {
        let input = document.getElementById("stringInput").value;

        let number = Number(input);
        let parsedInt = parseInt(input);
        let parsedFloat = parseFloat(input);
        let unaryPlus = +input;

        let result = `
        Number(): ${number} <br>
        parseInt(): ${parsedInt} <br>
        parseFloat(): ${parsedFloat} <br>
        Unary +: ${unaryPlus}`;

        document.getElementById("numberResult").innerHTML = result;
        }

function convertNumberToString() {
        let input = Number(document.getElementById("numberInput").value);

        let toString = input.toString();
        let binary = input.toString(2);
        let hex = input.toString(16);
        let octal = input.toString(8);

        let result = `
        toString(): "${toString}" <br>
        Binary: ${binary} <br>
        Hexadecimal: ${hex} <br>
        Octal: ${octal}
    `;

        document.getElementById("stringResult").innerHTML = result;
        }
