//Note: async and await are used to handle promises, which simplify working with asynchronous code
//Note: async and await are used to make asynchronous code look like synchronous code

//Note: async: used to declare a function as asynchronous. It returns a promise.
//Note: await: used to pause the execution of an async function until a promise is resolved or rejected.

//Info: Example 1: Basic example of async and await
// async function fetchData() {
//   console.log("Data fetched");
// }

// fetchData();

//INfo: Example 2: Using await to Wait for a Promise

function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a delayed response msg..");
    }, 4000);
  });
}

async function getMessage() {
  console.log("Fetching the message...");
  const message = await delayedMessage();
  console.log(message);
}

// getMessage();
//logger: Fetching the message...
//logger: This is a delayed response msg

// //Info: Example 3: Handling errors
async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/usersqq");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error Occurred:", error);
  }
}

// fetchUsers();

//Info: Example 4: Using async and await with multiple promises
async function fetchMultipleData() {
  const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 completed!"), 3000)
  );

  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Task 2 completed!"), 6000)
  );

  console.log("Waiting........");
  //Note: Promise.all() is used to wait for all promises to resolve or reject
  const results = await Promise.all([promise1, promise2]);
  console.log(results);
}

// fetchMultipleData();
//logger: Waiting........
//logger: [ 'Task 1 completed!', 'Task 2 completed!' ] //after 6 sec

//Info: Example 5: Chaining await calls

async function fetchUser(URL) {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}
async function main() {
  let user = await fetchUser("https://jsonplaceholder.typicode.com/users/2");
  console.log("Fetched User: ", user);
}

main();
//logger: Fetched User:  {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}

//Info: Parallel execution with Promise.all() , also using fetch api

async function parallelExecution() {
  const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
  );
  const promise2 = fetch("https://jsonplaceholder.typicode.com/users/2").then(
    (response) => response.json()
  );
  const promise3 = fetch("https://jsonplaceholder.typicode.com/users/3").then(
    (response) => response.json()
  );

  const [user1, user2, user3] = await Promise.all([
    promise1,
    promise2,
    promise3,
  ]);
  console.log("USER 1: ", user1);
  console.log("USER 2: ", user2);
  console.log("USER 3: ", user3);
}

parallelExecution();
