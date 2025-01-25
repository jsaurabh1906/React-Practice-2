import React from "react";

//This function creates a form with inputs for first name, last name, age, and email. It also displays the user's name and age.
const UseStateWithObjects = () => {
  //This line creates a state variable called 'person' and sets it to an object with properties for firstName, lastName, age, and email.
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  return (
    <div>
      <h2>UseStateWithObjects</h2>
      <form>
        <input
          type="text"
          value={person.firstName}
          //wrong way of updating state
          //onChange={(e) => setPerson({ firstName: e.target.value })}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          type="text"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <input
          type="number"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
        <input
          type="email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />

        <h3>
          Your Name is {person.firstName} {person.lastName}
        </h3>
        <h4>You are {person.age} years old.</h4>
        <h5>{JSON.stringify(person)}</h5>
      </form>
    </div>
  );
};

export default UseStateWithObjects;

//Always use the spread operator when updating state variables that are objects.
//This ensures that the previous state is not lost and that the new state
//is correctly merged with the previous state.

//Because Objects are reference types,if you don't use the spread operator,
//you will be updating the state with a reference to the same object,
//which will cause the loss of the previous state.

//Example: setPerson({ ...person, firstName: e.target.value })
