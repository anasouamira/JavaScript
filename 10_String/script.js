function showStringFunctions() {
    let str = document.getElementById("userString").value;

    let output = `
Original string: "${str}" <br>
Length: ${str.length} <br>
First character: ${str[0] || "N/A"} <br>
To Uppercase: ${str.toUpperCase()} <br>
To Lowercase: ${str.toLowerCase()} <br>
Includes 'Ou': ${str.includes('Ou')} <br>
Index of 'o': ${str.indexOf('o')} <br>
Slice (1, 4): ${str.slice(1, 4)} <br>
Replace 'i' with 'x': ${str.replace('i', 'x')} <br>
Trimmed: "${str.trim()}" <br>
Split by space: ${JSON.stringify(str.split(" "))} <br>
Substring (1, 4): ${str.substring(1, 4)} <br>
Substr (1, 4): ${str.substr(1, 4)} <br>
Search for 'Anas': ${str.search('Anas')} <br>
`;

    document.getElementById("stringResult").innerHTML = output;
}