let ChangeText;

document.getElementById("button").onclick = function()  {

    ChangeText = document.getElementById("text").value;
    document.getElementById("h1").textContent = ChangeText;
}