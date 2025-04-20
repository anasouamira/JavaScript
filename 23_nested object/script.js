    // Main object with a nested object inside
    let person = {
      name: "Ali",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Lahore",
        country: "Pakistan"
      }
    };

    // Accessing nested object values
    let city = person.address.city;
    let country = person.address.country;

    // Displaying values
    document.getElementById("output").innerHTML =
      "Name: " + person.name + "<br>" +
      "City: " + city + "<br>" +
      "Country: " + country;