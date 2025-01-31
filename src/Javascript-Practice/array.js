console.log("Array");

let age = 30;
age = 25;
// console.log(age);

//Array Destructuring
let ages = [30, 25, 22, 35, 40];
let [a, b, c, d, e] = ages; //destructuring
// console.log(a, b, c, d, e); //30 25 22 35 40

//Spread operator
//spread operator is used to spread the elements of an array
let newAges = [45, 50, ...ages]; //spread operator
// console.log(newAges); //[45, 50, 30, 25, 22, 35, 40]

//rest operator
//rest operator is used to collect the remaining elements of an array
const names = ["John", "Jane", "Mary", "Bob"];
const [first, second, ...rest] = names; //rest operator
// console.log(first, second, rest); //John Jane [ 'Mary', 'Bob' ]

//rest operator with function

//rest operator ...args
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
// console.log(sum(1, 2, 3, 4, 5)); //15

//spread operator with function
function sum2(a, b, c) {
  return a + b + c;
}
// console.log(sum2(...[1, 2, 3])); //6

//Array methods

//1.map()Creates a new array by applying a function to each element of the original array.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((num) => num * 2);
// console.log(newNumbers); //[2, 4, 6, 8, 10]

//2.filter()Creates a new array with elements that satisfy a given condition.

const numbers2 = [1, 2, 3, 4, 5];
const filteredNums = numbers2.filter((num) => num > 2);
// console.log(filteredNums); //[3, 4, 5]

const personAges = [30, 25, 22, 35, 40, 12, 10, 8, 55];
const adults = personAges.filter((age) => age >= 18);
// console.log(adults); //[30, 25, 35, 40, 55]

//3.reduce() Reduces an array to a single value by applying a function to each element.

const numbers3 = [1, 2, 3, 4, 5];
const sum3 = numbers3.reduce((a, b) => a + b, 0);
// console.log(sum3); //15

const prices = [10, 20, 30, 40, 50];
const total = prices.reduce((a, b) => a + b, 0);
// console.log(total); //150

//4.find() Returns the first element that satisfies a condition.
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];
const user1 = users.find((u) => u.id === 2);
// console.log(user1); //{ id: 2, name: 'Jane', age: 25 }

//5.some()Checks if at least one element satisfies a condition. Returns true or false.
const numbers4 = [1, 2, 3, 4, 5];
const hasEven = numbers4.some((num) => num % 2 === 0);
// console.log(hasEven); //true

//6.every() checks if all elements satisfy a condition. Returns true or false.
const numbers5 = [1, 2, 3, 4, 5];
const allEven = numbers5.every((num) => num % 2 === 0);
// console.log(allEven); //false
const lessThanTen = numbers5.every((num) => num < 10);
// console.log(lessThanTen); //true

//7.forEach() Executes a function for each element in the array.

//8.sort() Sorts the elements of an array in place and returns the sorted array.
const empNames = ["John", "Jane", "Mary", "Bob"];
empNames.sort(); //ascending order
// console.log(empNames); // [ 'Bob', 'Jane', 'John', 'Mary' ]

const numbersToSort = [5, 3, 1, 4, 2];
// numbersToSort.sort((a, b) => a - b); //ascending order
// console.log(numbersToSort); //[1, 2, 3, 4, 5]

numbersToSort.sort((a, b) => b - a); //descending order
// console.log(numbersToSort); //[5, 4, 3, 2, 1]

//9.reverse() Reverses the order of the elements in an array.
const arr = [1, 2, 3, 4, 5];
arr.reverse();
// console.log(arr); //[5, 4, 3, 2, 1]

//10.splice()
// Adds or removes elements from an array.
const arr2 = [1, 2, 3, 4, 5];
// const spliced = arr2.splice(2, 3); //start from 2nd index and del 3 elements
// console.log(spliced); //[3,4,5]

const spliced2 = arr2.splice(2, 0, 6, 7, 8); //start from 2nd index and add 6,7,8
// console.log(spliced2); //[] no elements removed
// console.log(arr2); //[1, 2, 6, 7, 8, 3, 4, 5]

//11.slice()
// Returns a shallow copy of a portion of an array
// into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array.
// The original array will not be modified.

const array = [1, 2, 3, 4, 5];
const sliced = array.slice(1, 3);
// console.log(sliced);

/////////////////////////////////////////////////////////////////
//12.concat()
const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const arr13 = arr11.concat(arr12);
// console.log(arr13); //[1, 2, 3, 4, 5, 6]

//13.includes()
const arr14 = [1, 2, 3, 4, 5];
const includesThree = arr14.includes(3);
// console.log(includesThree); //true

//14.indexOf()
const users11 = ["John", "Jane", "Mary", "Bob"];
const index = users11.indexOf("Mary");
// console.log(index); //2

//15.lastIndexOf()
// Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const arr15 = [1, 2, 3, 4, 5, 3];
const lastIndexOfThree = arr15.lastIndexOf(3);
// console.log(lastIndexOfThree); //5

//16.flat()
const arr16 = [1, [2, [3, [4, [5]]]]];
const flattenedInfinity = arr16.flat(Infinity);
// console.log(flattened); //[1, 2, 3, 4, 5]
const flattened = arr16.flat();
// console.log(flattened); ////[ 1, 2, [ 3, [ 4, [Array] ] ] ]

//17.flatMap()
const arr17 = [1, 2, 3, 4];
const flatMapped = arr17.flatMap((x) => x * 2);
// console.log(flatMapped); //[ 2, 4, 6, 8 ]

// const mapped = arr17.flatMap((x) => [x, x * 2]);
// console.log(mapped); //[ 1, 2, 2, 4, 3, 6, 4, 8 ]
