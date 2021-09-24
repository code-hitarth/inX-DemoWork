// const array1 = ["a", "b", "c"];

// for (const element of array1) {
//   console.log(element);
// }

// const iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value);
// }

// const iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

// const iterable = "food";

// for (const value of iterable) {
//   console.log(value);
// }

(function () {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);
