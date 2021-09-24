/*const test = {
  firstName: "Hitarth",
  lastName: "Kasnara",
  birthYear: 1999,
  city: "Ahmedabad",
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driving license.`;
  },
};
*/

//using dot notation
/*
let t = test.firstName;
console.log(t);
*/

//using bracket notation

/*
let g = test["lastName"];
console.log(g);

let nameKey = "Name";
console.log(test["first" + nameKey] + " " + test["last" + nameKey]);
*/

/*
console.log(`Choose any of the following: 
              firstName,lastName,age,city
`);
let choose = prompt("Choose any of the following :firstName,lastName,age,city");
// let choice = test.firstName || test.lastName || test.city || test.age;
choice = console.log(test[choose]);
*/

// switch (choice) {
//   case "firstName":
//     console.log(test.firstName);
//     break;
//   case "lastName":
//     console.log(test.lastName);
//     break;
//   case "age":
//     console.log(test.age);
//     break;
//   case "city":
//     console.log(test.city);
//     break;

//   default:
//     console.log("Choose any one option");
//     break;
// }

// let test = {
//   name: "Jonas",
//   friends: ["Michael", "Jay", "Sam"],
// };

// console.log(
//   `${test.name} has ${test.friends.length} friends , and his best friend is called ${test.friends[0]}`
// );

// console.log(test.getSummary());

/*
let obj1 = {
  name: "Hitarth",
  birthYear: 1947,
  calcAge: 2021 - this.birthYear,
  residnece: "Mumbai",
  getage: function () {
    // this.age = this.calcAge;
    return 2021 - this.birthYear;
  },
};

console.log(obj1.calcAge);
console.log(obj1.getage());
*/

// four variables are created and assigned in a single go,
// separated by commas

/*
var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "Dot syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string";

console.log(myObj);

function user(uname, uage, uemail, upwd, ufpwd) {
  this.uname = uname;
  this.uage = uage;
  this.uemail = uemail;
  this.upwd = upwd;
  this.ufpwd = ufpwd;
}

let user1 = new user("Shyam", 52, "abc@gmail.com", 1234, true);
let user2 = new user("Tushar", 32, "abcd@gmail.com", 12345, false);
let user3 = new user("Taimur", 25, "abca@gmail.com", 12346, true);
let user4 = new user("Yatim", 22, "abcb@gmail.com", 12341, false);

console.log(user1, user2, user3, user4);

const Food = {
  type: "Oily",
  display: function () {
    console.log(this.type);
  },
};

let Dabeli = Object.create(Food);
Dabeli.display();
*/

/*
let obj = {
  name: "Ryan Reynolds",
  movie: "DeapPool",
  name: "HEllo WORld",
};

obj.name = "tom holland";
obj.name = 78;

obj["name"] = "RDJ";

console.log(obj);
*/

/*
function show() {
  console.log(this.name);
}

let name = "Vadapav";
const a = {
  name: "sandwich",
  display: show,
};

const b = {
  name: "pizza",
  display: show,
};

show();
a.display();
b.display();
*/
// function bike() {
//   var name = "Ninja";
//   this.maker = "Kawasaki";
//   console.log(this.name + " " + maker); // undefined Bajaj
// }

// var name = "Pulsar";
// var maker = "Bajaj";

// obj = new bike();
// console.log(obj.maker);

/*
var names = "Ninja";
let bike = () => {
  // this.names = "Hitarth";
  console.log(this.names);
};

var obj1 = { names: "Pulsar", bike: bike };
var obj2 = { names: "Gixxer", bike: bike };

bike(); // "Ninja"
// let ab = new bike();
// ab.names;
obj1.bike(); // "Pulsar"
obj2.bike(); // "Gixxer"
*/

/*
let obj = {
  name: "Deadpool",
  names: "MoneyHeist",
  gt: function () {
    console.log(this.names);
  },
};
obj.so = obj.name;
obj.gt();
console.log(obj.so);

function abc() {
  obj.gt();
  console.log(obj);
}
abc();

console.log(obj.names.toUpperCase());
*/

const test = {
  firstName: "Hitarth",
  lastName: "Kasnara",
  birthYear: 1999,
  city: "Ahmedabad",
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

let tes;
for (let i in test) {
  console.log(`${i}: ${test[i]}`);
}
