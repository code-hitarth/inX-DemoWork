/*
const a = [2, 3, [4, 5]];
let [i, , j] = a;
let [b, , [c, d]] = a;
console.log([b, c, d]);
*/

/*
const a = [6, 7];
let [p = 1, q = 1, r = 1, s = 1] = a;
console.log(p, q, r, s);
*/
/*
const arr = [2, 3, 4, 5];
arr.push(11, 23);
console.log(arr);
let [a, b, c, d, e, f] = arr;
console.log(a, b, c, d, e, f);
*/

/*
const restaurant = {
  resName: "City Corner",
  location: ["Ahmedabad", "Mumbai", "Indoor"],
  categories: ["Punjabi", "Chinese", "Italian"],
  starterMenu: ["Harabhara kabab", "Manchurian", "Tomato Soup"],
  mainMenu: ["Paneer Masala", "Paneer Tika", "Paneer Handi"],
  openingHours: {
    monday: {
      open: 10,
      close: 12,
    },
    tuesday: {
      open: 11,
      close: 11,
    },
    wednesday: {
      open: 9,
      close: 12,
    },
    thursday: {
      open: 10,
      close: 9,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "9.40",
  address: "Maninagar",
  mainIndex: 2,
  starterIndex: 1,
});

// restaurant.orderDelivery;

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
// console.log(secondary, main);

//Receive to return values from a function
let [mainCourse, starter] = restaurant.order(2, 1);
console.log(mainCourse, starter);

const { resName: good, openingHours: bad, categories: comedy } = restaurant;

console.log(good, bad, comedy);

//Default values
const { discount = [], starterMenu: starters = [] } = restaurant;
console.log(discount, starters);

//Mutating values
let a = 4;
b = 5;

const obj = { a: 45, b: 24, c: 41 };
({ a, b } = obj);
console.log(a, b);

const {
  monday: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

const object = {
  fname: "Hitarth",
  lname: "Kansara",
  calcAge: function (birthYear) {
    // console.log(2022 - birthYear);
    return 2022 - birthYear;
  },

  words: function (demo) {
    // console.log(`Happy ${demo}`);
    return `Happy ${demo}`;
  },
  greet: function () {
    // const self = this;
    console.log(`${this.words("Birthday")}, ${this.fname} ${this.lname} !!!
                  Now you are ${this.calcAge(1999)}
                  Wishing you joy,happiness and good health for your life,
    `);
  },
};

console.log(object.calcAge(1999));
console.log(object.words("Birthday"));
object.greet();
*/

/*
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;

for (let day of properties) {
  openStr += ` ${day}`;
}
console.log(openStr);

const objectValues = Object.values(openingHours);
console.log(objectValues);
*/

/*
const objEntries = Object.entries(openingHours);
console.log(objEntries);

for (let [key, { open, close }] of objEntries) {
  console.log(`On ${key}day, We are open at ${open} and close at ${close}`);
}
*/

// console.log(restaurant.openingHours.fri?.open); //Optional Chaining
// const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

// for (let day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`On ${day} we open at ${open}` ?? "closed");
// }

//Method
// console.log(restaurant.orders?.(0, 1) ?? "Method doesnot exist");

// const users = [{ name: "jonas", email: "jonas@123.io" }];
// console.log(users[0]?.names ?? "User array empty");

// restaurant.orderDelivery({
//   time: "9.40",
//   address: "Maninagar",
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: array,string,maps,sets but not objects
// const a = "Hitarth";
// console.log(...a);
// const b = [...a, " ", "k"];
// console.log(b);

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Guiseppe",
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...newRestaurant };
// console.log(restaurantCopy);
// restaurantCopy.resName = "Honest";
// console.log(restaurantCopy);
// console.log(newRestaurant);

/*
    const [pizza, , rizotto, ...otherFood] = [
      ...restaurant.starterMenu,
      ...restaurant.mainMenu,
    ];
    console.log(pizza, rizotto, otherFood);

    const { thursday, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/

/*
restaurant.numGuests = 20;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
console.log(restaurant);

const guest2 = restaurant.numGuests || 50;
console.log(guest2);

console.log(restaurant.order && restaurant.order("Margarita", "Dosa"));

restaurant.numGuests = null;
const guestCorrect = restaurant.numGuests ?? 30;
console.log(guestCorrect);
*/

/*
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let items of menu.entries()) {
  console.log(items);
}
console.log([...menu.entries()]);

for (let [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
*/

//Object Literal
// console.log(restaurant.openingHours);

const weekdays = ["mon", "tues", "wednes", "thurs", "fri", "satur", "sun"];
const openingHours = {
  [weekdays[0]]: {
    open: 10,
    close: 12,
  },
  [weekdays[1]]: {
    open: 11,
    close: 11,
  },
  [weekdays[2]]: {
    open: 9,
    close: 12,
  },
  [weekdays[3]]: {
    open: 10,
    close: 9,
  },
};

const restaurant = {
  resName: "City Corner",
  location: ["Ahmedabad", "Mumbai", "Indoor"],
  categories: ["Punjabi", "Chinese", "Italian"],
  starterMenu: ["Harabhara kabab", "Manchurian", "Tomato Soup"],
  mainMenu: ["Paneer Masala", "Paneer Tika", "Paneer Handi"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//Mapping

const rest = new Map();
rest.set("name", "Classico Italiano");
console.log(rest.set(1, "Firanze,Italy"));
rest.set("categories"[("Italiano", "Pizzeria", "Vegetarian", "Organic")]);
rest.set("open", 11);
rest.set("close", 23);

console.log(rest.get("open"));

const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));
console.log(arr);
