/*
var age = 51;
var ages = true;
console.log(ages);
if (age > 50) {
  console.log("bade log");
} else {
  console.log("chota don");
}

*/

function calcAge(birthyear) {
  let age = 2021 - birthyear;

  function printAge() {
    let op = `${firstName}, you are ${age}, and born in ${birthyear}`;
    console.log(op);

    if (birthyear >= 1981 && birthyear <= 1996) {
      console.log(`${firstName}, you are millenial`);
    }
  }
  printAge();

  return age;
}
const firstName = "Hitarth";
console.log(calcAge(1989));
