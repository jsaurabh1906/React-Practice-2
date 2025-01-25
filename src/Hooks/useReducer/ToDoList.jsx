import React, { useReducer, useState } from "react";
import {
  topDivStyles,
  inputStyles,
  dangerButton,
  buttonStyles1,
} from "../../tailwindStyles";
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payLoad];
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};
const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  return (
    <div className="">
      <h2>ToDoList</h2>
      <div className={topDivStyles}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a Todo"
          className={inputStyles}
        />
        <button
          className={buttonStyles1}
          onClick={() => dispatch({ type: "ADD_TODO", payLoad: input })}
        >
          Add
        </button>
        <ol>
          {state.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className={dangerButton}
                onClick={() => dispatch({ type: "REMOVE_TODO", index })}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
