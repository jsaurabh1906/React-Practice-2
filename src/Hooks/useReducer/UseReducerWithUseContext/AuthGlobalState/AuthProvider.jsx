import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import { authInitialState, authReducerFn } from "./AuthReducer";

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducerFn, authInitialState);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
