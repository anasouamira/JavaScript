// Define a number that represents the day
    let day = 3;

    // Variable to store the name of the day
    let dayName = "";

    // Use switch to determine the day
    switch (day) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 7:
        dayName = "Sunday";
        break;
      default:
        dayName = "Invalid day";
    }

    // Display the result
    document.getElementById("dayOutput").innerHTML = "Day " + day + " is: " + dayName;

    // Also log to console
    console.log("Day number:", day);
    console.log("Day name:", dayName);