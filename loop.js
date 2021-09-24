let js = [
  12,
  45,
  "javascript",
  "Boolean",
  "keywords",
  true,
  ["kites", "Kaabil", "War"],
  {
    java: "script",
    php: "Script",
  },
];

/*
let test = [];
for (let i = 0; i < js.length; i++) {
  console.log(js[i]);
  test.push(typeof js[i]);
}
console.log("\n");
console.log(test);
*/

/*
let years = [1992, 1966, 2011, 2009, 1980];
let age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2021 - years[i]);
}

console.log(`
                        Wowwwwww You Did It!!
                        
`);
console.log(age);
*/

/*
console.log("only strings");
for (let i = 0; i < js.length; i++) {
  if (typeof js[i] !== "string") continue;

  console.log(js[i], typeof js[i]);
}

console.log("break with number");
for (let i = 0; i < js.length; i++) {
  if (typeof js[i] == "number") break;

  console.log(js[i], typeof js[i]);
}
*/

/*
for (let i = js.length; i >= 0; i--) {
  console.log(js[i]);
}
*/

/*
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`***********Starting Exercise ${exercise}**********`);
  for (let reps = 1; reps < 4; reps++) {
    console.log(`======Starting reps ${reps}=======`);
  }
}
*/

let a = Math.trunc(Math.random() * 6) + 1;

// console.log(a);

// console.log(Math.random() * 6 + 1);

while (a !== 6) {
  console.log(`you rolled a ${a}`);
  a = Math.trunc(Math.random() * 6) + 1;
  if (a === 6) {
    console.log(`YAY YOU GOT BONUS
    `);
  }
}
