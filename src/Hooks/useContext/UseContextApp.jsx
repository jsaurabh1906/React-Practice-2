import React from "react";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import UserProfile from "./consumerComponents/UserProfile";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider";
import ThemedComponent from "./consumerComponents/ThemedComponent";
import LanguageProvider from "./contexts/LanguageContext/LanguageProvider";
import LanguageGreetings from "./consumerComponents/LanguageGreetings";

const UseContextApp = () => {
  return (
    <>
      {/* Ex:1 Auth Context  */}
      <AuthProvider>
        <UserProfile />
      </AuthProvider>
      {/* Ex:2 Theme Context  */}
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      {/* Ex:3 Language Context  */}
      <LanguageProvider>
        <LanguageGreetings />
      </LanguageProvider>
    </>
  );
};

export default UseContextApp;

//Context: The Context API in React is a powerful feature that allows you to manage state and
//pass data throughout your component tree without having to pass props manually at every level.
//This can simplify the management of global state and provide a cleaner way to share data between components.

//useContext: The useContext hook is a way to access the value of a context in a functional component.
//It takes a context object (usually created using the createContext function) as an argument and returns the current context value.
