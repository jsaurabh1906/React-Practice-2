//primitive data types
//string, number, boolean, null, undefined, symbol, bigint

let str = "Hello"; // String
console.log(typeof str); // string

let num = 42; // Number
console.log(typeof num); // number

let isTrue = true; // Boolean
console.log(typeof isTrue); // boolean

let empty = null; // Null
console.log(typeof empty); //object

let user; // Undefined
console.log(typeof user); // undefined

let sym = Symbol("id"); // Symbol
console.log(typeof sym); //symbol

let bigNum = 123456789012345678901234567890n; // BigInt
console.log(typeof bigNum); //bigint

//Non-primitive data types
//object, array, function

//object
let person = { name: "Saurabh", age: 30 };
console.log(typeof person); // object

//array
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); // object

//function
function greet() {}
console.log(typeof greet); // function
