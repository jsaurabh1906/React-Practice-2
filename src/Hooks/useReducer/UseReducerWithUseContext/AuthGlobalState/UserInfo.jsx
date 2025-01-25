import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const UserInfo = () => {
  const { authState } = useContext(AuthContext);
  console.info("UserInfo- authState:", authState);

  if (!authState.isAuthenticated) {
    return <p>Please login to see your info</p>;
  }
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <p className="text-xl font-bold">User Info</p>
      <p>
        <strong>Name:</strong> {authState.user.name}
      </p>
      <p>
        <strong>Email:</strong> {authState.user.email}
      </p>
    </div>
  );
};

export default UserInfo;
