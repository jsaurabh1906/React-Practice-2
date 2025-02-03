//NOTE: Promises are the eventual completion (or failure) of an asynchronous operation and its resulting value.
//NOTE: Promises are used to handle asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
//NOTE: The Promise object has three states: pending, fulfilled, and rejected.

//INFO:Basic example of Promise
let promise = new Promise((resolve, reject) => {
  // console.log("Promise is created");
});
// console.log(promise);
//logger:Promise {<pending>}
//logger:[[Prototype]]:Promise
//logger:[[PromiseState]]:"pending"
//logger:[[PromiseResult]]:undefined

//INFO:Basic example of Promise with resolve and reject;

let promise1 = new Promise((resolve, reject) => {
  // console.log("Resolved Promise");
  resolve("Success: Promise resolved");
});
// console.log(promise1);
//logger:Promise {<fulfilled>: 'Success: Promise resolved'}
//logger:[[Prototype]]: Promise
//logger:[[PromiseState]]: "fulfilled"
//logger:[[PromiseResult]]: "Success: Promise resolved"

// let promise2 = new Promise((resolve, reject) => {
//   console.log("Rejected Promise");
//   reject("Error: Promise rejected");
// });
// console.log(promise2);
//logger:Promise {<rejected>: 'Error: Promise rejected'}
//logger:[[Prototype]]: Promise
//logger:[[PromiseState]]: "rejected"
//logger:[[PromiseResult]]: "Error: Promise rejected"

//INFO:Basic example of Promise with resolve and reject and then /catch

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise");
//     // resolve("Success");
//     reject("Error Occured");
//   });
// };

// let promise3 = getPromise();
// promise3
//   .then((result) => {
//     console.log("Promise resolved: ", result); //logger:Promise resolved:  Success
//   })
//   .catch((err) => {
//     console.log("Promise rejected: ", err); //logger:Promise rejected:  Error Occured
//   });

//INFO: Promise with then catch finally

// const promise4 = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Promise Resolved!");
//   } else {
//     reject("Promise Rejected!");
//   }
// });

// promise4
//   .then((result) => {
//     console.log(result); // If resolved, this runs //logger:Promise Resolved!
//   })
//   .catch((err) => {
//     console.log(err); // If rejected, this runs //logger:Promise Rejected!
//   })
//   .finally(() => {
//     console.log("Promise is completed"); // This runs regardless of promise status //logger:Promise is completed
//   });

//Info: using finally

// new Promise((resolve) => {
//   setTimeout(() => resolve("Task completed!"), 1000);
// })
//   .then((result) => console.log(result)) //logger:Task completed!
//   .finally(() => console.log("Cleaning up resources.")); //logger:Cleaning up resources.

//INfo: Promise chaining

/*
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data fetched from API ${dataId}: ${dataId}`);
      resolve("success");
    }, 3000);
  });
}

console.log("fetching data 1....");
getData(1)
  .then((res) => {
    console.log("fetching data 2....");
    return getData(2);
  })
  .then((res) => {
    console.log("fetching data 3....");
    return getData(3);
  })
  .then((res) => {
    console.log("fetching data 4....");
    return getData(4);
  });
*/

//INFO: Promise Chaining - another example

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 1000);
// })
//   .then((result) => result * 2) //returned 10*2 = 20
//   .then((result) => result * 3) // returned 20*3 = 60
//   .then((result) => result * 4) // returned 60*4 = 240
//   .then((result) => console.log(result)); //logger:240

//INFO: Promise.all()
//Note: Promise.all() takes an array of promises and
//Note:  resolves when all of them are fulfilled or rejects if at least one fails.

//Info: Promise.all() with successful promises
const promise11 = Promise.resolve("Task 11 completed!");
const promise12 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 12 completed!"), 5000)
);
const promise13 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 13 completed!"), 2000)
);

Promise.all([promise11, promise12, promise13]).then(
  (results) => console.log(results) //after 5sec //logger: ["Task 11 completed!", "Task 12 completed!", "Task 13 completed!"]
);

//Info: Promise.all() if one of the promises is rejected
//Note: If any of the promises is rejected,
//Note: Promise.all() will reject immediately with the reason of the first promise that was rejected.

const promise14 = Promise.resolve("Task 14 completed!");
const promise15 = Promise.reject("Task 15 failed!");
const promise16 = Promise.resolve("Task 16 completed!");

Promise.all([promise14, promise15, promise16])
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); //logger:Task 15 failed!

//INfo: Promise.allSettled()
//Note: Unlike Promise.all(), Promise.allSettled() will wait for all promises to complete,
//Note:  regardless of whether they are fulfilled or rejected.

Promise.allSettled([promise14, promise15, promise16]).then((results) =>
  console.log(results)
);
//logger: [
//logger:   {status: 'fulfilled', value: 'Task 14 completed!'}
//logger:   {status: 'rejected', reason: 'Task 15 failed!'}
//logger:   {status: 'fulfilled', value: 'Task 16 completed!'}
//logger: ]

//INFO: Promise.race()
//Note: Promise.race() takes an array of promises
//Note: Whichever Promise resolves or rejects first, Promise.race() returns that result.
let promise17 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 17 completed!"), 2000)
);

let promise18 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 18 completed!"), 5000)
);

Promise.race([promise17, promise18]).then((result) => console.log(result)); //logger:Task 17 completed!

////////////////////////////////////////////////
let promise19 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 19 completed!"), 2000)
);

let promise20 = new Promise((_, reject) =>
  setTimeout(() => reject("Task 20 Failed"), 500)
);

Promise.race([promise19, promise20])
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); //logger:Task 20 Failed

//Info: Promise.any()
//Note: Promise.any() takes an array of promises and
//Note: returns the first promise that fulfills.
//Note: If all promises are rejected, Promise.any() will reject with an AggregateError.

const promise21 = Promise.reject("Task 21 failed!");
const promise22 = Promise.reject("Task 22 failed!");
const promise23 = Promise.resolve("Task 23 completed!");

Promise.any([promise21, promise22, promise23]).then(
  (result) => console.log(result) //logger:Task 23 completed!
);

//Info: Promise.any() with all promises rejected
Promise.any([promise21, promise22])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //logger:AggregateError: All promises were rejected
