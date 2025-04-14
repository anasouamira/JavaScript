function showStringFunctions() {
    let str = document.getElementById("userString").value;

    let output = `
Original string: "${str}" <br>
Length: ${str.length} <br>
First character: ${str[0] || "N/A"} <br>
To Uppercase: ${str.toUpperCase()} <br>
To Lowercase: ${str.toLowerCase()} <br>
Includes 'lo': ${str.includes('lo')} <br>
Index of 'o': ${str.indexOf('o')} <br>
Slice (1, 4): ${str.slice(1, 4)} <br>
Replace 'l' with 'x': ${str.replace('l', 'x')} <br>
Trimmed: "${str.trim()}" <br>
Split by space: ${JSON.stringify(str.split(" "))} <br>
`;

    document.getElementById("stringResult").innerHTML = output;
}