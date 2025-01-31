//if , if-else, if-else if-else, switch
let age = 20;

if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

let username = "xyz";

if (username) {
  console.log("username is not empty");
}

let num = 70;

if (num < 18) {
  console.log("You are a minor and not eligible to vote");
} else if (num >= 18 && num <= 60) {
  console.log("You are adult and eligible to vote");
} else {
  console.log("You are a senior citizen and eligible to vote");
}

//switch

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  default:
    console.log("Enjoy the Weekend");
}
