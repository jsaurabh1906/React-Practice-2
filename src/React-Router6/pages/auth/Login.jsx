import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";
import { buttonStyles1, inputStyles } from "../../../tailwindStyles";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the path from the location state, or set it to the root path ("/")
  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          Username:{" "}
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className={inputStyles}
          />
        </label>
        <button onClick={handleLogin} className={buttonStyles1}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
