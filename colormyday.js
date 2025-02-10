switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      document.body.style.backgroundColor = "orange";
      break;
    case 1:
      day = "Monday";
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
      break;
    case 2:
       day = "Tuesday";
       document.body.style.backgroundColor = "rgb(230, 32, 32)";
      break;
    case 3:
      day = "Wednesday";
      document.body.style.backgroundColor = "rgb(76, 187, 23)";
      break;
    case 4:
      day = "Thursday";
      document.body.style.backgroundColor = "rgb(255, 195, 0)";
      break;
    case 5:
      day = "Friday";
      document.body.style.backgroundColor = "rgb(255, 202, 225)";
      break;
    case 6:
      day = "Saturday";
      document.body.style.backgroundColor = "rgb(210, 130, 255)";
  }

  document.querySelector("h1").innerHTML = `Today is ${day}`;

