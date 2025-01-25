import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const dummyUser = {
  name: "Saurabh Jaiswal",
  email: "saurabh@gmail.com",
  token: "token1234",
};
const AuthButtons = () => {
  const { authState, dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { user: dummyUser, token: dummyUser.token },
    });
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  console.log(authState);
  return (
    <div>
      {authState.isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButtons;
