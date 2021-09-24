/*
const friends = ["yash", "hemang", "rutul", "tanvir"];
console.log(friends);

friends[2] = "hitarth";
console.log(friends);
console.log(friends.length);

const fruits = ["apples", "mangoes", "bananas", "grapes", friends];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[fruits.length - 1]);

let places;
places = ["ajmer", "agra", "hawai mahal", "gondal"];
console.log(places);
places.push("Mysore", "Diu");
console.log(places);
*/

/*
let user = ["kalia", "alia", "taliya", "saliya", "waliya"];

//inserts element from the end
user.push("paliya", "maliya");
console.log(user);

//deletes element from the end
user.pop();
console.log(user);

//inserts element from the beginning
user.unshift("Galiya");
console.log(user);

//delets element from the beginning
user.shift();
console.log(user.shift());

//returns true if the element exists or else returns false
console.log(user.includes("alia"));

//returns the index of the given element
console.log(user.indexOf("saliya"));
*/

const arr = ["a", "b", "c", "d", "e", "f", "g"];
const arr2 = ["j", "k", "t", "x", "n"];
console.log(arr.slice(4));
console.log(arr.slice(1, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -4));
console.log(arr.slice());

// console.log(arr.splice(4));
console.log(arr.splice(0, 1));
console.log(arr);

console.log(arr.reverse());
console.log(arr);

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(arr.join("-"));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (let [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(
  `--------------------------------------------------------------------------------------------------------`
);
movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);

//Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});
