// Simple Counter Example with simple state and actions
import React, { useReducer } from "react";
//step2
const initialState = 0;

//step3
const reducerFn = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const SimpleCounter = () => {
  //step1: useReducer(reducerFn, initialState)
  //step4
  const [count, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      <h2>Counter with Simple State and Action</h2>
      <div className="border-2  p-4 rounded-lg">
        <p>Count : {count} </p>
        <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatch("RESET")}>Reset</button>
      </div>
    </div>
  );
};

export default SimpleCounter;

//useReducer Hook is a hook that allows you to manage state in a more complex way than useState
//useReducer is useful when you have a state that is updated based on a series of actions
//

//step1: useReducer(reducerFn, initialState)
// useReducer takes two arguments - reducerFn and initialState

//step2: initialize initialState

//step3: define reducerFn
// reducerFn takes two arguments - state and action
// reducerFn returns the new state based on the action
// reducerFn is a pure function and should not have any side effects

//step4: const [currentState, dispatch] = useReducer(reducerFn, initialState)
//useReducer hooks returns an array with two elements - currentState and dispatch
//currentState is the current state of the reducer
//dispatch is a function that takes an action and dispatches it to the reducer
