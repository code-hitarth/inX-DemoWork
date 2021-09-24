const a = [7, 5, 9];
const b = [1, 2, a[0], a[1], a[2]];
console.log(b);

const c = [4, 8, ...a];
console.log(...c);
console.log(c);

const v = [2, 3, ...[5, 6]];
let [h, g, ...z] = [2, 3, 4, 5, 6, 7];
console.log(h, g, z);
