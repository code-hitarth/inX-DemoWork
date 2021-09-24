// https://www.thatjsdude.com/interview/js2.html
// https://www.toptal.com/javascript/interview-questions


// ===================> 1.
// What is a potential pitfall with using 
// typeof bar === "object" to determine if bar is an object?

typeof bar === "object";
/* 
If bar is an object, this will return 'true', but it's not
checking type, it is comparing two Strings like
"object" === "object"
as typeof bar returns "object"
*/

// ===================> 2. 
typeof null === "object";
/*
this will return 'true' as null is itself an Object,
but will not compare type. It will compare two strings "object"
*/

// ===================> 3.
/* What is the type of the value returned by 'typeof'
Ex: typeof 3
 */
typeof 3;
// It will be 'String', as it returns "number", 
// which is string.


// ===================> 4.
true == 1;
// Will return true, as 1 will be converted to 'true'
// == does type conversion before comparison

true === 1;
/* This will return false, as === doesn't do 
type conversion so 'boolean' is not 'number'
 */

// Same for 
false == 0; // true
false === 0; // false


// ===================> 5.
/* What will be the output, why?
*/ 
typeof function(){} === "object"

/* Output will be 'false'
Function has a type 'object', but typeof will return
"function"
"function" is not equal to "object"
*/


// ===================> 6.
[] == false; // true
[] === false; // false
/* As in ==, [] is empty and will be converted to boolean false
but === will not do type conversion
*/


// ===================> 7.
var a = 10;
if([]) {
    a = 100;
}
console.log(a);

/*
This will log 100
as [] is truthy expression, and will be evaluated to true
and will satisfy the if block and will update 'a' value.
*/



// ===================> 8.
var a = 10;
function temp(a) {
    console.log(1,a);
    a = 100;
    console.log(2,a);
}
console.log(3,a);
temp(20);
console.log(4,a);

/*
Output
3 10
1 20
2 100
4 10

As 'a' in the function will be treated as a local variable.
Function argument variable is treated as a local variable.
*/


// ===================> 9.
var a = 10;
function temp() {
	console.log(1,a);
    var a;
    a = 20;
    console.log(2,a);
}
console.log(3,a);
temp();
console.log(4,a);

/*
3 10
1 undefined   // Hoisting
2 20
4 10

Bcz of hoisting 'a' will be undefined at log 1; 
*/



// ===================> 10.

foo();
var foo;
function foo() {
	console.log(1);
}
foo = function(){
	console.log(2);
};
function foo(){
	console.log(3);
}

/*
It will log '3' as last declaration will replace all previous hoisted
declarations.
*/



===================> 11.
for(var i = 0; i < 5; i++) {
	setTimeout(() => {console.log(i);}, i * 1000);
}

/*
output:
5
5
5
5
5

How to change it to:
0 
1 
2 
3 
4 
5

change 'var' to 'let'
or
use closure on 'setTimeout' function as below.
*/

for (var i = 0; i < 5; i++) {
	(function() {
  	return () => { 
    	setTimeout(console.log(i), i * 1000 )
    };
  })()();
}




===================> 12.
(function(){
    console.log(1);
    setTimeout(() => {console.log(2)}, 1000);
    setTimeout(() => {console.log(3)}, 0);
    console.log(4);
})();

/*
1
4
3
2

setTimeout will switch function execution into background thread,
so both setTimeout statement will wait for the whole function to terminate.
So it will log 1 , 4 first.
now background thread will give execute according to waiting time.
so 3, and 2.
*/



===================> 13.
var person = {
	name: "Mike",
    display: function() {
  	    console.log(`Name is: ${this.name}`);
    }
};
var p2 = {
	name: "Bruce"
};
// How to print 'Bruce' using display function?

/*
Using Call, Bind, and Apply.
*/
person.display.call(p2);  // Name is: Bruce



===================> 14.

var num = 10;
name = "Bruce Wayne";
obj1 = {
    value: "First value"
};
obj2 = {
    value: "Second value"
};
obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Batman";
    obj1 = obj2;
    obj2.value = "Third value";
}
 
change(num, name, obj1, obj2);
 
console.log(1,num);
console.log(2,name);
console.log(3,obj1.value);
console.log(4,obj2.value);
console.log(5,obj3.value);
// 1, 10
// 2, Bruce Wayne
// 3, First value
// 4, Third value
// 5, Third value


/*
Primitive data types are passed by value, so 'num', 'name' will be evaluated to value
and then will be passed to function.

Non-Primitive data types like Array, Object (obj1, obj2) will be passed by reference, so memory reference
will be copied to function argument.
So changes to the local object of function will change the real copy as well.
*/



===================> 15.
var emp = {
	x: "Nick"
};
var emp2 = Object.create(emp);
delete emp2.x
console.log(emp2.x);

/*
This will log 'Nick', as emp2 has no property defined for 'x' so will not delete 
anything.
So in log, emp2 will display 'x' from it's __proto__ which is emp.

if we delete emp.x ==> then log will be 'undefined'.
*/




===================> 16.
// Write Map, Reduce, and Filter example.
/*
Map: You want to translate/map all elements in an array to another set of values.
    returns an array of same length
Filter: You want to remove unwanted elements based on a condition.
    returns an array of different length
Reduce: You want to find a cumulative or concatenated value based on elements across the array.
    returns just a single primitive value.
*/

var arr = [1,2,3,4,5,6];

var mapped = arr.map((item, index) => {
	return item * 10;
});
console.log(mapped); // [10, 20, 30, 40, 50, 60]


var filtered = arr.filter((item, index) => {
	return item % 2 == 0;
});
console.log(filtered); // [2, 4, 6]


var reduced = arr.reduce((sum, item, index) => {
	return sum += item;
}, 0);
console.log(reduced); // 21



===================> 17.
// Write a function 'mul' to get this output.
console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48



//Answer
function mul(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
}



===================> 18.
const x = [1,2,3];
x[-1] = -1;

console.log(x[x.indexOf(1000)]);



const arr = [1,2,15,30,5,45,7,68];
console.log(arr.sort());


let x = [1,2,3] + [4,5,6];
console.log(x);