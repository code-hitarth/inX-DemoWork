/*
function juiceProcessor(apple, orange) {
  const juice = console.log(
    `Juice made with ${apple} apples and ${orange} oranges.`
  );
  //   console.log(juice);
  return juice;
}

juiceProcessor(5, 6);
juiceProcessor(2, 9);

*/
/*
const greet = function greet() {
  let wel = console.log(`Welcome to JavaScript World`);
  return wel;
};

greet();
*/

// program to print the text
/*
function greet(name) {
  console.log("Hello " + name + "  :)");
}

greet("Hitarth");

//:)  Arrow Functions  :)

const calcAge = (birthyear) => 2026 - birthyear;
const age = calcAge(1999);
console.log(age);
*/

/*
const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2021 - birthyear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1947, "Hitarth"));
console.log(yearsUntilRetirement(1989, "Yeash"));
*/

/*
function cutFruits(fruit) {
  return fruit * 4;
}

function juiceProcessor(apple, orange) {
  let applePieces = cutFruits(apple);
  let orangePieces = cutFruits(orange);

  const juice = console.log(
    `Juice made with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`
  );
  return juice;
}

juiceProcessor(5, 6);
juiceProcessor(2, 9);

*/
const calcAvg = (a, b, c) => (a + b + c) / 3;

//Test case 1

/*
console.log(
  "********TestCase1*********"
);
let scoreD = calcAvg(44, 23, 71);
let scoreK = calcAvg(65, 54, 49);

const chickenDinner = (avgD, avgK) => {
  if (avgD >= 2 * avgK) {
    console.log("Dolphins win the trophy");
    console.log(`${avgD} vs ${avgK}`);
  } else if (avgK >= 2 * avgD) {
    console.log("Koalas win the trophy");
    console.log(`${avgD} vs ${avgK}`);
  } else {
    console.log("No one win the trophy");
    console.log(`${avgD} vs ${avgK}`);
  }
};
chickenDinner(scoreD, scoreK);

//Test case 2
console.log(
  "********TestCase2*********"
);
scoreD = calcAvg(85, 54, 41);
scoreK = calcAvg(23, 34, 27);
chickenDinner(scoreD, scoreK);
*/

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("34L");
createBooking("34L", 2, 456);
createBooking("34L", 4);
createBooking("34L", 7);
*/

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 247145214512,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 247145214512) {
    console.log("checked in");
  } else {
    console.log("Wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
  console.log(person.passport);
};

newPassport(jonas);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//Higher-order function
const transformer = function (str, fun) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string : ${fun(str)}`);

  console.log(`Transformed by: ${fun.name}`);
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

//Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Mona");
greeterHey("Vishwa");

greet("Happy Birthday")("Pappa");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Hitarth");

//CALL METHOD------------------

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// lufthansa.book(239,"Jonas Schmedtmann");
// lufthansa.book(635,"Jonas Smith")
// console.log(lufthansa);

book.call(eurowings, 256, "Jonas");
console.log(eurowings);

book.call(lufthansa, 278, "Sachin");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 458, "Max");
console.log(swiss);

//APPLY METHOD----------
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//BIND METHOD----------
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");

//PARTIAL APPLICATIONS
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

//CALL METHOD --------------------------
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King

//APPLY METHOD----------------------------
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King

//BIND METHOD-----------------------------
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

//IIFE
(function () {
  console.log("this will never run again");
})();

(() => "This will never run again")();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

// console.dir(booker);

let f;
let g = function () {
  let b = 26;
  f = function () {
    console.log(b * 2);
  };
};

let h = function () {
  let c = 100;
  f = function () {
    console.log(c * 2);
  };
};

g();
f();

h();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding  all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 5);
