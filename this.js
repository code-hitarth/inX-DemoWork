// console.log(this);
let birthyear;
/*
//Normal Function
function calcAge() {
  console.log(2021 - birthyear);
  console.log(this);
}

calcAge();
*/

/*
birthyear = 1997;
const age = function (birthyear) {
  //   console.log(this);
  console.log(2025 - birthyear);
};
age(birthyear);
*/

/*
const arrowAge = (birthyear) => {
  console.log(2021 - birthyear);
  //   console.log(this);
};


arrowAge(1957);
*/

/*
const myself = {
  birthyear: 1989,
  calcAge: function () {
    console.log(2025 - this.birthyear);
    console.log(this);
  },
};
// this.calcAge;
myself.calcAge();

let sam = {
  birthyear: 1975,
};

sam.calcAge = myself.calcAge;
console.log(sam);

let a = myself.calcAge;
console.log(a);
a();
*/

/*
const john = {
  fname: "john",
  name: "Hitarth",
  last: "Kansara",
  birthyear: 1897,

  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.birthyear);

    const self = this;

    const millenial = function () {
      console.log(`${self.name} is millenial`);
    };

    millenial();

    const fullName =  () => {
        console.log(this);
        console.log(`${this.name} + " " + ${this.last}`);
      },
    },
    
    
    
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.fname}`);
    },
};
john.calcAge();
john.greet();
// john.fullName();

*/
