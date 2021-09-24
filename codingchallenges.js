//challenge 1

// const scoreD = (96 + 108 + 89) / 3;
// const scoreK = (88 + 91 + 101) / 3;

// console.log(scoreD);
// console.log(scoreK);

// if (scoreD > scoreK) {
//   console.log("Dolphins win the trophy");
// } else if (scoreD < scoreK) {
//   console.log("Koalas win the trophey");
// } else if (scoreD === scoreK) {
//   console.log("There is a tie");
// }

//part 1

/*
const scoreD = (96 + 128 + 89) / 3;
const scoreK = (96 + 128 + 89) / 3;

console.log(scoreD, scoreK);

if (scoreD > scoreK && scoreD >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreD < scoreK && scoreK >= 100) {
  console.log("Koalas win the trophey");
} else if (scoreD === scoreK && scoreD >= 100 && scoreK >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("Noone wins the trophy");
}

*/

//challenge 3

/*
const Bill = [125, 555, 44];

let a;
const b = function calcTip(Bill) {
  return Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2;
};

// let tip1 = calcTip[Bill[0]];
// let tip2 = calcTip[Bill[1]];
// let tip3 = calcTip[Bill[2]];

let Tips = [b(Bill[0]), b(Bill[1]), b(Bill[2])];
console.log(Bill, Tips);
let t = [Bill[0] + Tips[0], Bill[1] + Tips[1], Bill[2] + Tips[2]];

console.log(t);

*/

//challenge 4

/*
const test1 = {
  firstName: "Mark",
  lastName: "Miller",
  getfullName: function () {
    this.fullName = this.firstName + " " + this.lastName;
    return this.fullName;
  },
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const test2 = {
  firstName: "John",
  lastName: "Smith",
  // a: this.firstName + " " + this.lastName, //this keyword works only in functions as it has functional scope
  getfullName: function () {
    this.fullName = this.firstName + " " + this.lastName;
    return this.fullName;
  },
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(test2.a);

console.log(test1.calcBMI(), test2.calcBMI());

console.log(test1.getfullName(), test2.getfullName());

const Compare = function cmp(test1, test2) {
  console.log(test1.firstName);
  if (test1.BMI > test2.BMI) {
    console.log(
      `${test1.fullName}'s BMI ${test1.BMI} is higher than ${test2.fullName}'s BMI ${test2.BMI}!`
    );
  } else {
    console.log(
      `${test2.fullName}'s BMI ${test2.BMI} is higher than ${test1.fullName}'s BMI ${test1.BMI}!`
    );
  }
};

Compare(test1, test2);
*/

/*
if (test1.BMI > test2.BMI) {
  console.log(
    `${test1.getfullName()}'s BMI ${
      test1.BMI
    } is higher than ${test2.getfullName()}'s BMI ${test2.BMI}!`
  );
} else {
  console.log(
    `${test2.getfullName()}'s BMI ${
      test2.BMI
    } is higher than ${test1.getfullName()}'s BMI ${test1.BMI}!`
  );
}
*/

//challenge 5

/*
let Bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [],
  totals = [];

function calcTip(Bill) {
  return Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2;
}

for (let i = 0; i < Bill.length; i++) {
  tips.push(calcTip(Bill[i]));
  totals.push(Bill[i] + tips[i]);
}
console.log(tips, totals);

function calcAvg(Arr) {
  let sum = 0;
  let avg;
  for (let i = 0; i < Arr.length; i++) {
    sum += Arr[i];
    avg = sum / Arr.length;
  }
  console.log(sum, avg);
}

calcAvg(totals);
*/

//coding challenge 6

/*
let calcAmp = function (temp) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currTemp = arr[i];

    if (typeof currTemp !== "number") continue;

    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);

  return max - min;
};
let arr = [3, -2, -6, -1, "error", 9, 13, 15, 17, 14, 9, 5];
const amplitude = calcAmp(arr);
console.log(amplitude);
*/

//Now trying to find max and min of two arrays

/*
let calcAmp = function (temp1, temp2) {
  let test = temp1.concat(temp2);

  let max = test[0];
  let min = test[0];

  for (let i = 0; i < test.length; i++) {
    const currTemp = test[i];

    if (typeof currTemp !== "number") continue;

    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);

  return max - min;
};

let arr = [3, -2, -6, -1, "error", 9, 13, 15, 17, 14, 9, 5],
  brr = [1, 5, 4, -4, 8, "howdy", 45, -4];
const amplitude = calcAmp(arr, brr);
console.log(amplitude);
*/

//Coding Challenge 7
/*
let temp = [17, 21, 23];
temp = [12, 5, -5, 0, 4];

let printForecast = function () {
  let str = "";
  for (let i = 0; i < temp.length; i++) {
    str = str + `...${temp[i]} C in ${[i + 1]} days`;
    // console.log(`${temp[i]}C  in ${i} days...`);
  }
  console.log(str);
};

printForecast();
*/

// Coding  Challenge Football

/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

*/

//1.
/*
let a = 1;
for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i++} : ${player}`);
}*/

//2.
/*
let average = 0;
let odd = Object.values(game.odds);
for (let i of odd) {
  average += i;
}
console.log(average);
average /= odd.length;
console.log(average);
*/
//3.
/*
console.log(`============= 3rd ===============`);
for (let [team, i] of Object.entries(game.odds)) {
  // console.log(team, i);
  const teamStr = team === "x" ? "draw" : `victory  ${game[team]}`;
  console.log(`Odd of  ${teamStr} : ${i}`);
}
*/

/*
// const players1,players2,gk,fieldPlayers,allPlayers,players1Final,team1,draw,team2;

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

//7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

*/

// Coding Challenge

/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
console.log(gameEvents.delete(64));
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened,on average,every ${time / gameEvents.size} minutes`
);

//4.
for (let [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`${half}Half  ${min} : ${event}`);
}

*/
//Coding challenge (HemangBhai)
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

/*
const sum = function (number) {
  let i,
    value = [],
    total = 0;

  //Inserting multiples of 3 and 5 in an array
  for (i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      value.push(i);
    }
  }

  //Adding array items
  console.log(value);
  for (let j = 0; j < value.length; j++) {
    total += value[j];
  }
  console.log(`The sum is :${total}`);
};

sum(1000);
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach((dog, i) => {
    let type = dog >= 3 ? "adult" : "is still a puppy";
    console.log(`Dog number ${i + 1} is an ${type}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
// const dog = {
//   testData1: [5, 2, 4, 1, 15, 8, 3],
//   testData2: [16, 6, 10, 5, 6, 1, 4],
// };

// console.log("-----------------------------------------------");
// const calcHumanAge = function (arr) {
//   const ageCalc = arr.map(function (age) {
//     const humanAge = age <= 2 ? 2 * age : 16 + age * 4;
//     return humanAge;
//   });
//   return ageCalc;
// };
// const dogAge1 = console.log(calcHumanAge(dog));
// // const dogAge2 = console.log(calcHumanAge(testData2));

// const dogsExclude = calcHumanAge(dog).filter(function (age) {
//   if (age > 18) {
//     return age;
//   }
// });

// console.log(dogsExclude);

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUSD)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositUSD);
*/

/*
const calcAverageHumanAge = (ages) => {
  const humanAges = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return humanAges;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1.
dogs.forEach((dogs) => (dogs.recFood = Math.trunc(dogs.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter((dogs) => dogs.curFood > dogs.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

//4.
const ownersEatTooLittle = dogs
  .filter((dogs) => dogs.curFood < dogs.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);

//5.
console.log(dogs.some((dogs) => dogs.curFood === dogs.recFood));

//6.
const checkEatingOkay = (dog) =>
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  );

//7.
console.log(dogs.filter(checkEatingOkay));

//8.
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going  at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going  at ${this.speed}km/h`);
};

const mercedes = new Car("Mercdes", 120);
const BMW = new Car("BMW", 95);

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
