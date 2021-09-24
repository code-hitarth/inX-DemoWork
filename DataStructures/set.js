// const arr = new Set(["pizza", "pasta", "pani puri", "pasta"]);
// console.log(arr);

// const str = new Set("HITARTH");
// console.log(str);

// const s = new Set(["akash", "yash", "Hemang", "Rutul", "yash"]);
// console.log(s.has("akash"));
// console.log(s.add("tanvir", "roman"));
// console.log(s.delete(""));
// console.log(s.size);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set("AAABFJNCJKNKFEFCKALSKKCFAS").size);

// const obj = new Set([
//   {
//     name: "abc",
//     age: 45,
//   },
//   {
//     name: "abc",
//     age: 45,
//   },
//   {
//     name: "abc",
//     age: 455,
//   },
// ]);
// console.log(obj);

// const arr = new Set([1, 2, 3, 4, 5, 4, 3, 7, 4, 3]);
// console.log(arr);

const questions = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again!"],
]);

// console.log(questions);
console.log([...questions]);

// for (let [key, value] of questions) {
//   console.log(key, value);
//   if (typeof key === "number") console.log(`Answer of ${key} is ${value}`);
// }
