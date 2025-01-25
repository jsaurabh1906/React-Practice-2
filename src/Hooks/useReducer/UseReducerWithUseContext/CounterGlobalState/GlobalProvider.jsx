import React, { useContext, useReducer } from "react";
import { GlobalDispatchContext, GlobalStateContext } from "./contexts";
import reducerFn from "./reducers";

const initialState = { count: 0 };
// This function is a React component that provides a global state and dispatch function to its children components
const GlobalProvider = ({ children }) => {
  // This line uses the useReducer hook to create a state and dispatch function based on a reducer function and initial state
  const [currState, dispatch] = useReducer(reducerFn, initialState);

  // This line returns a JSX element that provides the global state and dispatch function to its children components
  return (
    <GlobalStateContext.Provider value={currState}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
// This function is used to access the GlobalStateContext in a React component
const useGlobalState = () => useContext(GlobalStateContext);
// This function returns the dispatch function from the GlobalDispatchContext
const useGlobalDispatch = () => useContext(GlobalDispatchContext);

export default GlobalProvider;
export { useGlobalState, useGlobalDispatch };
