/*
const h = 115;

const b =
  h >= 180 ? "Tall" : h < 180 && h >= 150 ? "Medium Height" : "Short Height";
console.log(b);
*/

/*
function greet(person) {
  let name = person ? person.name : "Stranger";
  return `Howday ${name}`;
}

console.log(greet({ name: "Alice" }));
console.log(greet(null));
*/

/*
let a = 54;
const g = a % 2 == 0 ? "Even number" : "Odd number";
console.log(g);
*/

let tibil,
  tip,
  bill = 275;

/*
if (bill >= 50 && bill <= 300) {
  tip = 0.15;
  tibil = tip * bill;
} else {
  tip = 0.2;
  tibil = tip * bill;
}
let total = 0;
total += tibil;
console.log(total);
*/

tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
);
