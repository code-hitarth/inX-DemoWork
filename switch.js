// const day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("Plan code structure");
//     console.log("Goto coding");
//     break;

//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;

//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;

//   case "Friday":
//     console.log("Record videos");
//     break;

//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;

//   default:
//     console.log("Not a valid day");
//     break;
// }

/*
var d = new Date();
var weekday = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var day = weekday[d.getDay()];

if (day == "Monday") {
  console.log("Plan code structure");
  console.log("Goto coding");
} else if (day == "Tuesday") {
  console.log("Prepare theory videos");
} else if (day == "Wednesday" || day == "Thursday") {
  console.log("Record videos");
} else if (day == "Friday") {
  console.log("Record videos");
} else if (day == "Saturday" || day == "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

*/

marks = 90;
switch (true) {
  case marks >= 90:
    console.log("A Grade");
    break;

  case marks >= 70 && marks < 90:
    console.log("B Grade");
    break;

  case marks >= 50 && marks < 70:
    console.log("C Grade");
    break;

  case marks >= 20 && marks < 50:
    console.log("D Grade");
    break;

  default:
    console.log("You have not succedded in the exam");
    break;
}
