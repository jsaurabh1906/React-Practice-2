import React from "react";
import AuthButtons from "./AuthButtons";
import UserInfo from "./UserInfo";

const Dashboard = () => {
  return (
    <>
      <h2>Global Auth</h2>
      <p>
        Global state management for authentication using useReducer and
        useContext
      </p>
      <div className="border-2  p-4 rounded-lg">
        <AuthButtons />
        <UserInfo />
      </div>
    </>
  );
};

export default Dashboard;
