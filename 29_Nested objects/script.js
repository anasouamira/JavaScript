// Main object with nested objects
    const person = {
      name: "John",
      age: 28,
      address: {
        street: "123 Main St",
        city: "Los Angeles",
        country: {
          name: "USA",
          code: "US"
        }
      }
    };

    function showPersonInfo() {
      const result = `
        👤 Name: ${person.name}<br>
        🏙️ City: ${person.address.city}<br>
        🌍 Country: ${person.address.country.name} (${person.address.country.code})
      `;

      document.getElementById("output").innerHTML = result;
    }