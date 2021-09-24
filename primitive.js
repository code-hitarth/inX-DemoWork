/*
let age = 35;
let oldAge = age;
age = 20;
console.log(age, oldAge);

let me = {
  name: "Hitarth",
  age: 22,
};

let friend = me;
console.log(me, friend);

friend.age = 60;
console.log(me, friend);
*/

/*
let lastName = "Williams";
let oldLastName = "Coloneal";
lastName = "Currans";
// console.log(lastName, oldLastName);
const jessica = {
  firstName: "jessica",
  lastName: "Williams",
  age: 25,
};
let jonas = jessica;
// jessica.lastName = "Currans";
// console.log(jessica.lastName, jonas.lastName);
console.log(jessica, jonas);

let jass = Object.assign({}, jonas);
jass.lastName = "Hiddleton";
console.log(jass);

*/

/*
const obj1 = {
  a: 1,
};
const obj2 = {
  c: 3,
};

console.log("Object1", obj1);
console.log("Object2", obj2);

const obj3 = Object.assign(obj1, obj2);
console.log("Object3", obj3);
obj3.a = 5;
console.log("Object3", obj3);
obj2.c = 4;
obj1.a = 7;
console.log("Object3", obj3);
console.log("Object2", obj2);
console.log("Object1", obj1);

*/
const obj1 = {
  a: 5,
  b: 4,
  c: {
    g: 7,
    h: 6,
    i: {
      k: 10,
    },
  },
};
const obj2 = {
  c: 1,
  d: 2,
};
// console.log("object1", obj1);
// console.log("object2", obj2);

const obj3 = Object.assign({}, obj2, obj1);
console.log("Object3", obj3);
obj1.c.i.k = 20;
// obj3.a = 0;
console.log("NewObject3", obj3);
console.log("NewObject1", obj1);
console.log("NewObject2", obj2);
