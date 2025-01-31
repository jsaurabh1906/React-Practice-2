// Arithmetic Operators
// +, -, *, /, %, **

console.log(10 + 5); // Addition: 15
console.log(10 - 5); // Subtraction: 5
console.log(10 * 5); // Multiplication: 50
console.log(10 / 2); // Division: 5
console.log(10 % 3); // Modulus: 1
console.log(2 ** 3); // Exponentiation: 8

//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

console.log(5 == 5); // true //loose equality
console.log(5 == "5"); // true //loose equality
console.log(5 === 5); // true //strict equality
console.log(5 === "5"); // false //strict equality
console.log(5 != 5); // false //loose inequality
console.log(5 != "5"); // false //loose inequality

console.log(5 > 10); //false //greater than
console.log(5 < 10); //true //less than
console.log(5 >= 10); //false //greater than or equal to
console.log(5 <= 10); //true //less than or equal to

//Logical Operators
// &&, ||, !

console.log(true && true); // true logical AND
console.log(true && false); // false logical AND
console.log(false || true); // true logical OR
console.log(false || false); // false logical OR
console.log(!true); // false logical NOT
console.log(!false); // true logical NOT

//
//Assignment Operators
// =, +=, -=, *=, /=, %=, **=

let a = 5;
a += 3; // a = a + 3 //
console.log(a); // 8

//ternary operator
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // You are an adult

//
//bitwise operators
// &, |, ^, ~, <<, >>
console.log(5 & 3); // 1 bitwise AND

console.log(5 | 3); // 7 bitwise OR

console.log(5 ^ 3); // 6 bitwise XOR

console.log(~5); // -6 bitwise NOT

console.log(5 << 1); // 10 bitwise left shift

console.log(5 >> 1); // 2 bitwise right shift

//Type Conversio and coercion

//explicit conversion (manual)
console.log(Number("5")); // 5 //converts string into number
console.log(String(5)); // "5" //converts number into string
console.log(Boolean(0)); // false //converts 0 into false
console.log(Boolean(1)); // true //converts 1 into true

//implicit conversion (automatic)(type coercion)
console.log("5" + 5); // "55" //concatenates string and number
console.log(5 + "5"); // "55" //concatenates string and number
console.log(5 - "5"); // 0 //subtracts string from number
console.log(5 * "5"); // 25 //multiplies string and number

console.log(true + 5); // 6 //adds boolean and number
