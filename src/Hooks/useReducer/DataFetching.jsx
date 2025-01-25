import axios from "axios";
import React, { useEffect, useReducer } from "react";

const tableStyles =
  "min-w-full table-auto border-collapse border border-gray-300";
const thStyles = "border border-gray-300 px-4 py-2 text-center font-bold";
const tdStyles = "border border-gray-300 px-4 py-2";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw state;
  }
};
const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
        payload: error.response?.data?.message || error.message,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Data Fetching</h2>
      <p>Using useReducer to manage state instead of useState</p>
      <div className="p-6 border-2 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Users Data</h1>
        {state.loading && <p className="text-center">Loading...</p>}
        {state.error && (
          <p className="text-center text-red-500">Error: {state.error}</p>
        )}
        {state.data && (
          <div className="overflow-x-auto">
            <table className={tableStyles}>
              <thead>
                <tr className="bg-gray-200">
                  <th className={thStyles}>ID</th>
                  <th className={thStyles}>Name</th>
                  <th className={thStyles}>Username</th>
                  <th className={thStyles}>Email</th>
                  <th className={thStyles}>Address</th>
                </tr>
              </thead>
              <tbody>
                {state.data.slice(0, 7).map((user) => (
                  <tr key={user.id} className="even:bg-gray-100">
                    <td className={tdStyles}>{user.id}</td>
                    <td className={tdStyles}>{user.name}</td>
                    <td className={tdStyles}>{user.username}</td>
                    <td className={tdStyles}>{user.email}</td>
                    <td className={tdStyles}>
                      {user.address.street} {user.address.suite}{" "}
                      {user.address.city} {user.address.zipcode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default DataFetching;
