import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { counter: state.counter + action.value };
    case "DECREMENT_COUNTER":
      return { counter: state.counter - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const MultipleUseReducers = () => {
  const [count, dispatch] = useReducer(reducerFn, initialState);
  const [count2, dispatch2] = useReducer(reducerFn, initialState);
  return (
    <div>
      <div>
        <h2>Two Counters</h2>
        <p>
          Two Counters with Multiple useReducers with diff state variables and
          same state transition(& reducerFn)
        </p>
        <div className="border-2  p-4 rounded-lg">
          <p>Counter1 : {count.counter} </p>
          <button
            onClick={() => dispatch({ type: "INCREMENT_COUNTER", value: 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT_COUNTER", value: 1 })}
          >
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <hr />
          <p>Counter2 : {count2.counter} </p>
          <button
            onClick={() => dispatch2({ type: "INCREMENT_COUNTER", value: 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => dispatch2({ type: "DECREMENT_COUNTER", value: 1 })}
          >
            Decrement
          </button>
          <button onClick={() => dispatch2({ type: "RESET" })}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MultipleUseReducers;
