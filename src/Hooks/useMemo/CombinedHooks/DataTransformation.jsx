import React, { useContext, useMemo } from "react";
import UserContext from "./UserContext";
import { inputStyles, topDivStyles } from "../../../tailwindStyles";

const DataTransformation = () => {
  const { state, dispatch } = useContext(UserContext);
  const { users, searchQuery } = state;

  // Filter and transform users
  const filteredUsers = useMemo(() => {
    console.log("Filtering and transforming user data...");
    return users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((user) => ({
        id: user.id,
        fullName: `${user.name} (${user.username})`,
        email: user.email,
        address: `${user.address.city}, ${user.address.street}`,
      }));
  }, [users, searchQuery]);

  return (
    <div>
      <h2>Data Transformation and Filter</h2>
      <div className={topDivStyles}>
        {state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <input
              className={inputStyles}
              type="text"
              placeholder="Search by name or email..."
              value={state.searchQuery}
              onChange={(e) =>
                dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })
              }
            />
            <ul>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <li key={user.id}>
                    <strong>{user.fullName}</strong> - {user.email} -{" "}
                    {user.address}
                  </li>
                ))
              ) : (
                <p>No users found for "{searchQuery}"</p>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DataTransformation;
