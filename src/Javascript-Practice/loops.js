// loops helps to iterate over arrays,objects or performing repetitive tasks.;

//for loop

//print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//iterating over an array
let fruits = ["apple", "banana", "mango", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//iterating over an array of objects
const students = [
  {
    name: "Saurabh",
    age: 21,
  },
  {
    name: "Rahul",
    age: 20,
  },
  {
    name: "Shivam",
    age: 19,
  },
  {
    name: "Rohan",
    age: 18,
  },
];

for (let id = 0; id < students.length; id++) {
  const student = students[id];
  console.log(`${students[id].name} is ${students[id].age} years old`);
}

//While loop;

//Ex1: print numbers from 1 to 10
let count = 1;
while (count <= 10) {
  console.log("Count: ", count);
  count++;
}

// Ex2: Generate random numbers until condition is met;

let randomNum;

while (randomNum !== 7) {
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log("Random Number:", randomNum);
}

//Ex3: Iterate over a string

let str = "Hello World";

let i = 0;

while (i < str.length) {
  console.log(str[i]);
  i++;
}

//do while loop
//Ex1: Print a message at least once
let message = "Congratulations!";
let execute = false;
do {
  console.log("Printing once: ", message);
} while (execute);

//Ex2:  Print numbers in reverse order

let num = 5;
do {
  console.log("Number: ", num);
  num--;
} while (num > 0);

//for-of loop
//1.Iterate over an array of numbers
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  console.log(num);
}

//2.Iterate over a string
const message1 = "HELLO";
for (const char of message1) {
  console.log(char);
}

//3. Iterate over a Set
//set doesn't take duplicate values even if we try to add it multiple times
const set = new Set([1, 2, 2, 3, 4, 5, 5, 6, 7]);
for (const num of set) {
  console.log("From set: ", num);
}

//4. Iterate over a Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log(map); //Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'New York' }

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// name: John
// age: 30
// city: New York

//5. Iterate over array of objects;

let employees = [
  {
    name: "Rohan",
    salary: 20000,
  },
  {
    name: "Rahul",
    salary: 30000,
  },
  {
    name: "Shivam",
    salary: 40000,
  },
  {
    name: "Saurabh",
    salary: 50000,
  },
];

for (const emp of employees) {
  console.log(`${emp.name} earns ${emp.salary}`);
}
// Rohan earns 20000
// Rahul earns 30000
// Shivam earns 40000
// Saurabh earns 50000

//for-in loop
const sir = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in sir) {
  console.log(`${key}: ${sir[key]}`);
}
// name: John
// age: 30
// city: New York

//iterate over array;

for (const index in fruits) {
  console.log(fruits[index]);
}
// apple;
// banana;
// mango;
// orange;
// grapes;

//access nested objects;
const student = {
  name: "Saurabh",
  marks: { math: 90, science: 85, english: 88 },
};
for (const subject in student.marks) {
  console.log(`${subject}: ${student.marks[subject]}`);
}
// math: 90
// science: 85
// english: 88

//break and continue statements

//break statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking the loop at 5");
    break;
  }
  console.log(i);
}
//1
//2
//3
//4
//Breaking the loop at 5

//continue statement
for (let i = 1; i <= 7; i++) {
  if (i === 5) {
    console.log("Skipping the number 5");
    continue;
  }
  console.log(i);
}

// 1
// 2
// 3
// 4
// Skipping the number 5
// 6
// 7
