//objects
const person = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

// console.log(person.address); //{ street: '50 main st', city: 'Boston', state: 'MA' }
// console.log(person.address.street); //50 main st
//=======================================================//

//object Destructuring
const { name, age } = person;
// console.log(name); //John
// console.log(age); //30

//===================================================================
//Object methods

//1. Object.keys()
// returns an array of a given object's keys.
// It takes an object as an argument and returns an array of its keys.
const person1 = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
// console.log(Object.keys(person1)); //['name', 'age', 'hobbies', 'address']

//2. Object.values()
// console.log(Object.values(person1)); //['John', 30, [ 'music', 'movies', 'sports' ], { street: '50 main st', city: 'Boston', state: 'MA' }]

//3. Object.entries()
// returns an array of a given object's key-value pairs.
const user2 = { name: "alice", age: 25, city: "New York" };
// console.log(Object.entries(user2)); // [ [ 'name', 'alice' ], [ 'age', 25 ], [ 'city', 'New York' ] ]

//4. Object.assign()
//it copies all enumerable own properties from one or more source objects to a target object.
//  It returns the target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

//5. Object.freeze()
//used to freeze an object, making it immutable.

let obj1 = {
  firsName: "John",
  lastName: "Doe",
};
Object.freeze(obj1);
// obj1.firsName = "Jane"; // throws error :TypeError: Cannot assign to read only property 'firsName' of object
console.log(obj1.firsName); //John
