import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext";

// Define a functional component called UserProfile
const UserProfile = () => {
  // Use the useContext hook to access the AuthContext
  const { user, login, logout } = useContext(AuthContext);

  // Return a div containing a heading and a button
  return (
    <div>
      <h2>Auth User Profile</h2>
      <div className="border-2  p-4 rounded-lg">
        {/* If a user is logged in, display a welcome message */}
        {user ? <h3>Welcome! {user.name}</h3> : <h3>Please Login</h3>}
        {/* If no user is logged in, display a login button */}
        {!user && <button onClick={() => login("Saurabh")}>Login</button>}
        {/* If a user is logged in, display a logout button */}
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default UserProfile;
