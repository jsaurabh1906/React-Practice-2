// var - function Scoped, Re-declaration & Re-assignment
var name = "John";
console.log(name); // John
name = "Jane"; // re-declaration allowed
console.log(name); // Jane

{
  name: "Saurabh";
  console.log(name); // Saurabh in browser and // Jane in node
}

// let - Block Scoped, No Re-declaration
let age = 30;
console.log(age); // 30

age = 31; // re-assignment allowed
console.log(age); // 31

{
  let age = 32;
  console.log(age); // 32
}

console.log(age); // 31
// let age = 33; // SyntaxError: Identifier 'age' has already been declared

//const - Block Scoped, No Re-declaration & Re-assignment
const gender = "male";
console.log(gender); // male

// gender = "female"; // TypeError: Assignment to constant variable.

{
  const gender = "female";
  console.log(gender); // female
}

console.log(gender); // male
