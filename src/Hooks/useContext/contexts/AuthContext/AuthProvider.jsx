import React, { useState } from "react";
import AuthContext from "./AuthContext";

// This is a React component called AuthProvider that provides authentication context to its children components.
const AuthProvider = ({ children }) => {
  // This state variable holds the user object.
  const [user, setUser] = useState(null);

  // This function sets the user object to the provided username.
  const login = (userName) => {
    setUser({ name: userName });
  };

  // This function sets the user object to null, effectively logging out the user.
  const logout = () => {
    setUser(null);
  };

  // This returns a context provider that provides the user, login, and logout functions to its children components.
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
