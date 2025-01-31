import { useState } from "react";

// This function is used to manage user authentication
const useAuth = () => {
  // This state is used to store the user data
  const [user, setUser] = useState(() => {
    // This line checks if there is a user data stored in the local storage and returns it, otherwise it returns null
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  // This function is used to log in a user and store their data in the local storage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // This function is used to log out a user and remove their data from the local storage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, logout };
};

export default useAuth;

//
