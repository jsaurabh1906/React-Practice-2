console.log("Hello from callback");

//Note: Callback are functions that are passed as arguments to other functions,
//Note:and are executed after some operation has been completed.

//Note:They are essential in asynchronous programming, where operations may take time to complete,
//Note:  and the program needs to continue executing other tasks while waiting for the operation to complete.

//Info: Example 1: Basic Callback Example

function greet(name, callback) {
  console.log(`Hello ${name}!`);
  callback();
}
//Info: sayGoodbye is a callback function
function sayGoodbye() {
  console.log(`Goodbye!`);
}

greet("Saurabh", sayGoodbye);

//Info: Example 2: setTimeout Callback Example

function delayGreet(name, callback) {
  setTimeout(function () {
    console.log(`Hello ${name}!`);
    callback();
  }, 2000);
}

delayGreet("Saurabh", sayGoodbye);

//Info: Example 3: Callback in Array Methods

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  //callback
  console.log(number);
});

//Info: Example 4:Event Listener Callback Example

const button = document.querySelector("button");

button.addEventListener("click", function () {
  //callback
  console.log("Button clicked!");
});

//Info: Example 5: Callback with error handling
function fetchDataFromServer() {
  const data = { name: "Saurabh" };
  return data;
}

function fetchData(callback, errorCallback) {
  const data = fetchDataFromServer();
  if (data) {
    callback(data);
  } else {
    errorCallback("Error fetching data");
  }
}
//Note:(displayData) and (errorCallback) are callbacks with different approaches
//Note:display data is defined and then passed as argument to fetchData function
//Note:errorCallback is directly passed as argument to fetchData function

function displayData(data) {
  console.log(data);
}

fetchData(displayData, function (error) {
  console.log(error);
});

//
//Info:  Example 6: Callback hell example
//Note:Scenario: we will fetch data from 1 API and then use that data to fetch data from another API.
//Note:This can lead to deeply nested code that is difficult to read and maintain.

//Note:simply fetch 1 data example
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("Data fetched from API 1: ", dataId);
//   }, 3000);
// }

// getData(1);

//Note:Expand above example to fetch data from 2nd 3rd and 4th
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data fetched from API ${dataId}: ${dataId}`);
    if (getNextData) getNextData();
  }, 3000);
}

//Info: callback hell
getData(1, () => {
  console.log("Fetching 2.....");
  getData(2, () => {
    console.log("Fetching 3.....");
    getData(3, () => {
      console.log("Fetching 4.....");
      getData(4);
    });
  });
});

//Note:Callback Hell
//Note: A common problem with callbacks is that they can lead to "callback hell",
//Note: where multiple nested callbacks are used to handle asynchronous operations.
//Note: This can make the code difficult to read and maintain.

//Note:To avoid and solve this callback hell problem we go with promises
