import React, { useState } from "react";
import useAuth from "../implementation/useAuth";
import {
  buttonStyles1,
  dangerButton,
  inputStyles,
  topDivStyles,
} from "../../../../tailwindStyles";

const Login = () => {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const userData = { name: username, id: Date.now() };
    login(userData);
  };

  return (
    <div className={`${topDivStyles} w-80 mx-auto`}>
      <h2> Authentication</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout} className={dangerButton}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputStyles}
          />
          <button onClick={handleLogin} className={buttonStyles1}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
