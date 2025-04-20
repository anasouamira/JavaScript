    // Source objects
    let user = { name: "Ayesha" };
    let extraInfo = { age: 22, city: "Karachi" };

    // Merge extraInfo into user
    Object.assign(user, extraInfo);

    // Display result
    document.getElementById("output").innerHTML =
      "Name: " + user.name + "<br>" +
      "Age: " + user.age + "<br>" +
      "City: " + user.city;