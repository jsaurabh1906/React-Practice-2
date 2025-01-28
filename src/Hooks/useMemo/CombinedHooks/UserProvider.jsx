import React, { useEffect, useReducer } from "react";
import UserContext from "./UserContext";
import userReducerFn, { userInitialState } from "./userReducer";

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducerFn, userInitialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_USERS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
      });
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
