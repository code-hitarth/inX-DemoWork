/*const sweetArray = [2, 3, 4, 5, 35];
let makeSweeter = (a)=> a*2;
let b = sweetArray.map(makeSweeter);
console.log(sweetArray);
console.log(b);

const nam = "Sammy";
const map = Array.prototype.map;
const newName = map.call(nam,(eachLetter)=>`${eachLetter}`)
console.log(newName);

*/

/*
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
];


const userLikes = myUsers.map(function(items)
{
    const container = {};
    container[items.name] = items.likes;
    console.log(container[items.name]);
    container.age = items.name.length*10;
    return container;
})

console.log(userLikes);


*/

// const numArray = [6, 7, 15, 22, 45];
// const numMulti = numArray.map(function(num,indx)
// {
//     return num*indx;
// });
// console.log(numMulti);

// let cities = [
//   { name: "Los Angeles", population: 3792621 },
//   { name: "New York", population: 8175133 },
//   { name: "Chicago", population: 2695598 },
//   { name: "Houston", population: 2099451 },
//   { name: "Philadelphia", population: 1526006 },
// ];
// let bigCities = cities
//   .filter((e) => e.population > 3000000)
//   .sort((c1, c2) => c1.population - c2.population)
//   .map((city) => (city.name+":"+city.population));

// console.log(bigCities);

// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// let num_p = numbers.filter((e)=>e>0);
// console.log(num_p);

// let freelancers = [
//   { name: "Harry", skill: "JavaScript" },
//   { name: "Mark", skill: "Python" },
//   { name: "David", skill: "JavaScript" },
// ];


// console.log(freelancers.filter((e)=> e.skill==="JavaScript"));  

// let n = [11, 98, 31, 23, 944];
// console.log(n.filter((e)=> e%2==0));

// var students = [
//     {
//       name: 'Mylene',
//       email: 'Nicholas.Mills@gmail.com',
//       image: 'http://placeimg.com/640/480/sports',
//       birthday: '2021-08-16T03:32:02.007Z',
//       age: 56
//     },
//     {
//       name: 'Abdullah',
//       email: 'Issac25@yahoo.com',
//       image: 'http://placeimg.com/640/480/business',
//       birthday: '2020-12-12T07:27:42.246Z',
//       age: 27
//     },
//     {
//       name: 'Ashleigh',
//       email: 'Berenice.Torp10@gmail.com',
//       image: 'http://placeimg.com/640/480/abstract',
//       birthday: '2021-07-11T16:35:03.977Z',
//       age: 50
//     },
//     {
//       name: 'Anthony',
//       email: 'Merlin3@yahoo.com',
//       image: 'http://placeimg.com/640/480/nature',
//       birthday: '2020-12-22T08:20:12.151Z',
//       age: 29
//     },
//     {
//       name: 'Darryl',
//       email: 'Osbaldo.Willms10@gmail.com',
//       image: 'http://placeimg.com/640/480/business',
//       birthday: '2020-12-16T16:53:50.344Z',
//       age: 46
//     },
//     {
//       name: 'Johnathan',
//       email: 'Audra49@yahoo.com',
//       image: 'http://placeimg.com/640/480/cats',
//       birthday: '2020-09-26T16:46:16.838Z',
//       age: 26
//     },
//     {
//       name: 'Eino',
//       email: 'Mary81@gmail.com',
//       image: 'http://placeimg.com/640/480/animals',
//       birthday: '2021-05-14T08:54:20.864Z',
//       age: 42
//     },
//     {
//       name: 'Raquel',
//       email: 'Jasen_Murazik@gmail.com',
//       image: 'http://placeimg.com/640/480/transport',
//       birthday: '2021-04-25T08:12:57.748Z',
//       age: 40
//     },
//     {
//       name: 'Ethelyn',
//       email: 'Amelia_Upton62@gmail.com',
//       image: 'http://placeimg.com/640/480/abstract',
//       birthday: '2021-01-24T04:05:04.791Z',
//       age: 41
//     },
//     {
//       name: 'Emmett',
//       email: 'Margarita73@hotmail.com',
//       image: 'http://placeimg.com/640/480/animals',
//       birthday: '2021-01-19T08:00:16.655Z',
//       age: 41
//     },
//     {
//       name: 'Jamir',
//       email: 'Kendra22@gmail.com',
//       image: 'http://placeimg.com/640/480/business',
//       birthday: '2020-12-25T16:08:36.887Z',
//       age: 45
//     }
//   ]

// let first = students.filter((s)=> s.age == 29)
// // first.toString();
// console.log(first);

