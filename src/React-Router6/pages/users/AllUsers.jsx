import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const AllUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter");

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
      <hr />
      <div>
        <p>Below is the demo for search params query parameters</p>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {showActiveUsers ? (
          <p>Showing Active User..</p>
        ) : (
          <p>Showing All User.....</p>
        )}
      </div>
    </div>
  );
};

export default AllUsers;

//Note: searchParams: It is an object that contains the query parameters from the URL.
//Note: ex: localhost:5173/users?filter=active
//Note:  ex: localhost:5173/unsplash?search=dog&order=asc&page=2

//NOte: useSearchParams is a hook that allows you to access the query parameters from the URL.
