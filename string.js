// // var a = "welcome to javascript world";
// // console.log(a.toUpperCase());

// var b = "Welcome Hitarth"; //string
// var c = new String("WELCOME HITARTH").toLowerCase(); //object
// // var d = kwhd(typeof console.log(c.toLowerCase())); //undefined
// var e = new String("Welcome Hitarth");
// console.log(b);
// console.log(c);
// // console.log(d);

// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof e);

// if (b == e) {
//   console.log("SAME");
// } else {
//   console.log("Different");
// }

/*
var a = new Number(5);
console.log(a);
console.log(typeof a);

// var b = null;
// console.log(typeof b);

var c = null;

console.log(typeof c);
*/

/*
const markHeight = 1.85;
const markWeight = 95;
const johnHeight = 1.75;
const johnWeight = 85;

var mHeight = markHeight ** 2;
var jHeight = johnHeight ** 2;

const markBMI = markWeight / mHeight;
const johnBMI = johnWeight / jHeight;

console.log(markBMI);
console.log(johnBMI);

var a = true;
var b = false;

if (markBMI > johnBMI) console.log(`markBMI is higher than johnBMI`);
else console.log(`johnBMI is higher than markBMI`);
*/
/*
const a = ["angular", "nodejs"];
console.log(typeof a);
*/
/*
const fName = "Hitarth";
const lName = "Kansara";
const yob = 1999;
const year = 2021;
console.log(`Welcome ${fName} ${lName}  to the InheritX Solutions 
    You are just ${year - yob} years
`);

console.log(`
                                Helooo Jarvis 
                                Give me weather updates  Give me a  cup of Coffee
                                Call Siri
`);

console.log(
  ` Javascript is often abbreviated as JS, JS is a programming language that confirms to the ECMAScript specification`
);
*/

/*
const str = "Welco\fme to th\ne ja\rva\tsc\v\v\vrip\bt \\ world  ";
console.log(str);
console.log(str.length);

const s = "ngjhjsjajkgjndsjfnjbnj0";
s.length;
console.log(s);

const arr = [3, 4, 2, 543224];
console.log(arr.length);

const num = "boolean";
console.log(num.length);

const ca = console.log("inheritX");

//slice method

const sd = "welcome to inheritX";
const dds = sd.slice(7 + 2, 12);
console.log(sd);
console.log(dds);

console.log(dds);

const sdd = sd.slice(-7, -1);
console.log(sdd);

//substring method

const greet = "Good Morning";
const fd = greet.substring(1, 3 - 1);
console.log(fd);
console.log(greet);

//substr method

const state = "Gujarat Rajasthan Maharashtra";
const substate = state.substr(-11, 7);
console.log(state);
console.log(substate);

//replace method

const le = `Please visit us at Microsoft`;
const ke = le.replace("Microsoft", "Google");
console.log(le);
console.log(ke);

const sta = "Please visit us at Microsoft and Microsoft and InheritX";
const tsa = sta.replace(/Microsoft/g, "Google");
console.log(tsa);

//upper case and lower case methods

const abc = "Welcome Namaste Salam Walakum Ghadi Khamma";
console.log(abc.toLowerCase());
console.log(abc.toUpperCase());

//concat method

const games = "cricket football baseball basketball";
const food = "dabeli pizza sandwich vadapav";
const place = "ghadpur daman sidisaiyad";
console.log(games.concat(" ", food, " ", place));

//trim method

const test = "           MS Dhoni is the captain of Indian Team";
const t = test.trim();
console.log(t);

//string Padding method

const age = "54";
console.log(age.padEnd(4, 0));
console.log(age.padStart(4, 9));

//charCodeAt method
const h = "Hello World";
console.log(h[0]);
console.log(h.charCodeAt(0));

//converting string to array using split
const gh = "Happy Janmashtami";
const gd = gh.split(" ");
console.log(gd);

//indexOf()
let stae = " TamilNadu Goa Chennai Goa";
console.log(stae.indexOf("Goa"));

//lastIndexOf()
let gas = "Oxygen Nitrogen Ozone Ammoia   Ozone Hydrogen";
console.log(gas.length);
console.log(gas.lastIndexOf("Ozone"));
//Note : indexOf and lastIndexOf return -1 if the text is not found

//search method
let city = "ahmedabad Surat rajkot Gandhinagar";
console.log(city.search("Surat"));

//match method
let ga = "The quick brown fox jumps over the lazy dog";
console.log(ga.match(/O/gi));

//search method
const ht = "Welcome to Goa";
console.log(ht.includes("come"));

//startsWith method
const lang = "Hindi Gujarati English";
console.log(lang.startsWith("G", 6));
console.log(lang.endsWith("h"));

const gts = "Welcome to Javascript World";
console.log(gts.valueOf());

const tra = "Java JavaScript  ";
console.log(tra.repeat(3));
*/

const airLine = "TAP Air Portugal";
const plane = "Air A320neo";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);
console.log(airLine.length);
console.log(airLine.indexOf("P"));
console.log(airLine.lastIndexOf("P"));
console.log(airLine.indexOf("Air"));
console.log(airLine.indexOf("air"));
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, airLine.indexOf(" ")));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  // console.log(s);
  if (s === `B` || s === `E`) {
    console.log("You have got a middle seat");
  } else {
    console.log("You are lucky");
  }
};
checkMiddleSeat("3B");
checkMiddleSeat("11B");
checkMiddleSeat("16F");
checkMiddleSeat("13D");
checkMiddleSeat("15C");
checkMiddleSeat("18E");

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const str = "JonAS";
const strLower = str.toLowerCase();
const correctStr = str[0].toUpperCase() + strLower.slice(1);
console.log(correctStr);

//Fix Capitalization in name
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.IO \n ";
const correctEmail = loginEmail.toLowerCase().trim();
if (email === correctEmail) {
  console.log(1);
  console.log(correctEmail);
}

const priceEuro = "2,859&";
const priceDollar = priceEuro.replace("&", "$").replace(",", ".");
console.log(priceDollar);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace(/door/g, "gate"));

console.log(plane.includes("n"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
  console.log(`Part of the new Airbus Family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You are not allowed to board");
  } else {
    console.log("Welcome aboard!!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and  a gun for protection");

console.log("a+very+nice+string".split("+"));
console.log("Hitarth Kansara".split(" "));

const [firstName, lastName] = "Hitarth Kansara".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// const capitalizeName = function (name) {
//   let namesUpper = [];
//   const names = name.split(" ");
//   for (let i of names) {
//     namesUpper.push(i[0].toUpperCase() + i.slice(1));
//   }
//   console.log(namesUpper.join(" "));
// };

const capitalizeName = function (name) {
  let namesUpper = [];
  const names = name.split(" ");
  for (let i of names) {
    namesUpper.push(i.replace(i[0], i[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("hitarth kansara");
capitalizeName("gabbar patel");
capitalizeName("yash patel");

const padstr = "kirtan".padStart(40, "=").padEnd(50, "*");
const padStr = "kirtanpanchal".padStart(40, "=").padEnd(60, "0");
console.log(padstr);
console.log(padStr);

const maskCredit = function (cardNum) {
  const str = cardNum + "";
  const last = str.slice(-4);

  console.log(last.padStart(str.length, "X"));
};
maskCredit(123456789);
maskCredit(`5728957292199044892789`);
maskCredit(768743989372);

const repeatF = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
repeatF(5);
repeatF(12);
repeatF(50);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const a = flights.split("+");
// console.log(a.split("_"));

for (let flight of a) {
  let b = flight.split(";");
  let [w, x, y, z] = b;
  // console.log("w", `${w}`);
  // console.log("x", `${x}`);
  // console.log("y", `${y}`);
  // console.log("z", `${z}`);

  // For W
  let c = w.split("_");
  let d = c.join(" ").trimLeft();
  // console.log(d);

  // console.log(b);

  // For x and y
  let e = x.slice(0, 3).toUpperCase();
  let f = y.slice(0, 3).toUpperCase();

  // console.log(e, f);

  // For Z
  let g = z.replaceAll(":", "h");
  // console.log(g);

  let v = `${d} from ${e} to ${f} (${g})`;
  console.log(v.padStart(50));
}
