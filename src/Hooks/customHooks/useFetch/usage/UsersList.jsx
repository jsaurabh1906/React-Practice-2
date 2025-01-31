import React from "react";
import useFetch from "../implementation/useFetch";
import { topDivStyles } from "../../../../tailwindStyles";

const UsersList = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={topDivStyles}>
      <h2 className="underline underline-offset-8 ">👥User's List👥</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
