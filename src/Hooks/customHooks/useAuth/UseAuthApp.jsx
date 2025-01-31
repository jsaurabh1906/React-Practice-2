import React from "react";
import Login from "./usage/Login";

const UseAuthApp = () => {
  return (
    <div className="space-y-4">
      <h2>useAuth Hook</h2>
      {/*Ex1: Simple Login/Logout */}
      <Login />
    </div>
  );
};

export default UseAuthApp;
