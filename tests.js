// /*
// const myObject = {
//   method() {
//     console.log(this);
//   },
// };
// // Method invocation
// myObject.method();
// */

// // Regular function
// /*
// let user = {
//   show() {
//     console.log(arguments);
//   },
// };
// user.show(1, 2, 3);
// */

// /*
// let user = {
//   show_ar: () => {
//     console.log(arguments);
//   },
// };
// user.show_ar(1, 2, 3);
// */

// /*
// let sayHi = (_) => console.log("HI");
// sayHi();
// */

// let a = {
//   name: "Hitarth",
//   show_User(x, x) {
//     console.log(x * x);
//   },
//   showPerson: (x, x) => {
//     console.log(x * x);
//   },
// };

// a.show_User(2, 2);
// a.showPerson(2, 2);

// let arr = [3, 2, 7, 44, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

/*
let str = "abcdefigi";
let str2 = "",
for (let i = str.length - 1; i >= 0; i--) {
  str2 += str[i];
}
console.log(str2);
*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.reduce((acc, cur) => acc + cur));

const ab = [
  { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
  { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
  { description: "Butter", quantity: 2, price: 6, total: 12 },
];

const priceSum = ab.reduce((acc, cur) => acc + cur.total, 0);
const priceSUM = ab.map((ab) => ab.price).reduce((acc, cur) => acc + cur, 0);
console.log(priceSum, priceSUM);

const characters = [
  { name: "Jean-Luc Picard", age: 59 },
  { name: "Will Riker", age: 29 },
  { name: "Deanna Troi", age: 29 },
];

console.log(
  characters
    .map((characters) => characters.age)
    .reduce((acc, cur) => acc + cur, 0)
);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const avg = arr2.reduce((acc, cur) => acc + cur / arr2.length, 0);
console.log(avg);

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
  "0",
];

const count = fruitBasket.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  console.log(acc[cur]);
  return acc;
}, []);

count;
console.log(count);*/

/*
let a = "hitarth";
for (let i in a) {
  console.log(i);
}

a.indexOf("h");

//Program to Print Current Values of Accumulator,CurrentValue and Current Index

let abc = [1, 2, 3, 4, 5, 6, 7];

const add = abc.reduce((acc, curr, i) => {
  console.log(
    `Index is == ${i}, Accumulator is == ${acc},  Current value is == ${curr}`
  );
  console.log(`Addition of accumulator and current value is : ${acc}+${curr} `);
  return acc + curr;
}, 0);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Equality
console.log(movements.includes(-400));

// Some Condition
console.log(movements.some((mov) => mov > 5000));
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//Every Condition
console.log(movements.every((mov) => mov > 0));

//Seperate Callback
console.log(movements.some((mov) => mov > 0));
console.log(movements.every((mov) => mov > 0));
console.log(movements.filter((mov) => mov > 0));

const arz = [1, [2, 3], 4, [[5, 6], 7, 8], [9, [0, 6, 3]], 41, 44];
console.log(arz.flat(2));

//Strings
const names = ["Zatch", "Aman", "Kartik", "Priya", "Tamanna", "Chutki"];
console.log(names.sort());
console.log(names);

//Numbers
const numb = [54, 32, 12, 65, 90, 23, 56];
console.log(numb.sort());

const abf = [-45, -23, -1, 0, 43, 23, 12];
console.log(abf.sort());

abf.sort((a, b) => {
  console.log(`a:${a},b:${b}`);
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(abf);

const ha = [-23, -46, -79, 54, 24, 76, 9, 32];
ha.sort((a, b) => a - b); //For ascending order
console.log(ha);
ha.sort((a, b) => b - a); //For descending order
console.log(ha);

const kj = new Array(7);
console.log(kj);

kj.fill(7);
console.log(kj);

const lk = new Array(7);
lk.fill(7, 3, 5);
console.log(lk);

console.log(Array.from({ length: 5 }, () => 7));

let z = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(z);

console.log(numb.map((e) => e > 20));
console.log(numb);

let nums = [54, 32, 12, 65, 90, 23, 56];
nums.map((e) => e * 10);
console.log(nums);
*/

// console.log(jonas, maeve, jonson);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 3000);
// }

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1978);
const maeve = new Person("Maeve", 1970);
const jonson = new Person("Jonson ", 1989);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there!! ");
  console.log(this);
};
Person.hey();

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
maeve.calcAge();
console.log(Person.prototype);

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, maeve.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("calcAge"));
console.log(jonas.firstName);

console.log(jonas.__proto__);
//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
*/
//
// const obj = {
//   method: function () {
//     l("method in obj");
//   },
// };
// const obj2 = {};
// obj2.__proto__ = obj;
// obj2.method();

/*
const l = console.log;

const obj = {
  method: function () {
    l("method in obj");
  },
  method2: function () {
    l("method2 in obj");
  },
  prop: 90,
};
const obj2 = {};
obj2.__proto__ = obj;
obj2.method();
obj2.method2();
l(obj2.prop);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  [...new Set(this)];
};
console.log(arr.unique());
*/

//////////////////////////////////////////////
//
// ES6 Classes
//class expressions
// const Person1 = class {};

// // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log("Hey there 👋");
//     console.log(this);
//   }
// }
// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// function add(a, b) {
//   return a + b;
// }
// let result = add.call(this, 30, 20);

// console.log(result);

let greeting = "Hi";

var messenger = {
  greeting: "Hello",
};

function say(name) {
  console.log(this.greeting + " " + name);
}

say.call(this, "John");
say.call(this, "Hitarth");
// say("Hitarth");
say.call(messenger, "hitarth");

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let Widget = new Box(25, 55, "Black");
console.log(widget);

const car = {
  name: "Car",
  start: function () {
    console.log("Start the " + this.name);
  },
  speedup: function () {
    console.log("Speed up the " + this.name);
  },
  stop: function () {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly: function () {
    console.log("Fly the " + this.name);
  },
};

car.start.call(aircraft);
car.speedup.call(aircraft);

const getOddNumbers = function () {
  const args = Array.prototype.slice.call(arguments);
  return args.filter((e) => e % 2);
};

console.log(getOddNumbers(1, 2, 3, 4, 57, 98, 7, 65));

const user = {
  firstName: "Hitarth",
  lastName: "Kansara",
};

function greet(greeting, message) {
  return greeting + " " + this.firstName + "!" + " " + message;
}
let result = greet.apply(user, ["Hello", "What are you doing?"]);
console.log(result);

const computer = {
  name: "MacBook Pro",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};

const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};

let r = computer.turnOn.apply(server);
console.log(r);

let per = {
  name: "Hitesh",
  getName() {
    console.log(this.name);
  },
};
setTimeout(function () {
  per.getName();
});

let f = per.getName.bind(per);
setTimeout(f, 2500);

let runner = {
  name: "leopard",
  run(speed) {
    console.log(this.name + " runs at " + speed + " km/h");
  },
};

let flyer = {
  name: " HoneyBee",
  // fly(speed) {
  //   console.log(this.name + " flies at " + speed + " km/h");
  // },
};

let run = runner.run.bind(flyer, 20);

runner.run(50);
run();
