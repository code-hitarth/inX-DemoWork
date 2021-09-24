// var a = 'hello';
// function greet()
// {
//     var a ='good';
//     console.log(a);
// }
// greet();
// console.log(a);

// let a = 'monkey';
// function welcome()
// {
//     let a = 'elephant';
//     console.log(a);
// }
// welcome();
// console.log(a);

// const a = 'sparrow';

/*
function birds()
{
    const b = 24;
    console.log(b);
    if(cond){
        let a = 10;

        let c = 40;
    }
    
}
birds();
console.log(b);

// if(a=='sparrow')
// {
//     console.log(a);
// }*/

/*
let xa = "John Doe";
x = Boolean(25);
console.log(x);

{
  let x = 23;
  console.log(x);
}
*/

// let x = Number(String(5 + 6));
// console.log(x);

// let carname = 55;
// carname = 45;
// console.log(carname);

// carName = "Audi";
// var carName = "Mercedez";
// console.log(carName);

// const a = 89;
// console.log(a);

// const b = ["singh", "saab", "the", "great"];
// b[0] = "chana";
// b.push("again");
// console.log(b);

// const b = {
//   name: "ape",
//   age: 45,
//   dob: 28,
// };
// b.status = "dead";
// console.log(b);

//Const and Let are block scope

//Var is a function scope

//Redeclaring of only var  variable is allowed

// const s = "44";
// var z = "44";

// if (z === s) {
//   console.log("yay");
// } else {
//   console.log("nay");
// }

//conditional operators
// var age = 45;
// let sc = age > 60 ? "senior citizen" : "not a senior citizen";
// console.log(sc);

// //Multiple conditional operators
// var marks = 95;
// let score =
//   marks > 90
//     ? "Satisfactory"
//     : marks < 90 || marks > 50
//     ? "can do better"
//     : marks < 50 || marks > 20
//     ? "Unsatisfactory"
//     : "Fail";
// console.log(score);

/*
var a = true,
  b = false;
console.log(a && a);
console.log(a && b);
console.log(a || a);
console.log(a || b);

console.log(!a);
console.log(!b);
*/

let physics = 99;
let chemistry = 90;
let maths = 95;
let total = physics + chemistry + maths;
let average = total / 3;

if (average >= 90) {
  console.log("Grade A");
} else if (average >= 70 || average <= 90) {
  console.log("Grade B");
} else if (average >= 50 || average <= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

/*
function isEligible() {
  let age = 5;
  let actualAge = 18;
  let difference = actualAge - age;
  if (age >= actualAge) {
    console.log("your age is " + age + "and you are eligible for voting");
  } else {
    console.log(
      "your age is " +
        age +
        "but too low for voting you  have to wait for " +
        difference +
        "years"
    );
  }
}
isEligible();
*/

/*
function Scope() {
  let greet = "hello";
  let age = 18;
  console.log(age);
  function vote() {
    var age = 15;
    var vote = "true";
    console.log(vote);
    console.log(age);

    function hari() {
      console.log(age);
      console.log(vote);
      console.log(greet);
    }
    hari();
  }

  vote();
}
Scope();

*/
