import React, { useReducer } from "react";
import {
  topDivStyles,
  buttonStyles1,
  buttonStyles2,
} from "../../tailwindStyles";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT_Counter1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT_Counter1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT_Counter2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DECREMENT_Counter2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const TwoCounters = () => {
  const [count, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      <h2>Two Counters</h2>
      <p>
        Two Counters with different State and action types where state and
        action are objects
      </p>
      <div className={topDivStyles}>
        <p className="text-indigo-500">First Counter: {count.firstCounter}</p>
        <p className="text-orange-700">Second Counter: {count.secondCounter}</p>
        <button
          className={buttonStyles1}
          onClick={() => dispatch({ type: "INCREMENT_Counter1", value: 1 })}
        >
          Inc Counter1
        </button>
        <button
          className={buttonStyles1}
          onClick={() => dispatch({ type: "DECREMENT_Counter1", value: 1 })}
        >
          Dec Counter1
        </button>
        <button
          className={buttonStyles1}
          onClick={() => dispatch({ type: "INCREMENT_Counter1", value: 5 })}
        >
          Inc Counter1 by 5
        </button>
        <button
          className={buttonStyles1}
          onClick={() => dispatch({ type: "DECREMENT_Counter1", value: 5 })}
        >
          Dec Counter1 by 5
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset Both</button>{" "}
        <div>
          {" "}
          <button
            className={buttonStyles2}
            onClick={() => dispatch({ type: "INCREMENT_Counter2", value: 1 })}
          >
            Inc Counter2
          </button>
          <button
            className={buttonStyles2}
            onClick={() => dispatch({ type: "DECREMENT_Counter2", value: 1 })}
          >
            Dec Counter2
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoCounters;
