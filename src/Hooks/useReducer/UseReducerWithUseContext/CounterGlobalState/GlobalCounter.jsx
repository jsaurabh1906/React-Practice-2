import React, { useContext } from "react";
import { GlobalDispatchContext, GlobalStateContext } from "./contexts";
import { useGlobalDispatch, useGlobalState } from "./GlobalProvider";

const GlobalCounter = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  //   const state = useGlobalState();
  //   const dispatch = useGlobalDispatch();
  //   console.log(state);
  return (
    <div>
      <h2>Global Counter</h2>
      <p>
        Global State Management:Using useReducer with useContext allows you to
        manage global state in a React app without external libraries like
        Redux.
      </p>
      <div className="border-2  p-4 rounded-lg">
        <p>count : {state.count} </p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default GlobalCounter;
