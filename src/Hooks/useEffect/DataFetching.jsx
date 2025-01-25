import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        // console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <>Loading....</>;
  if (error) return <>Error: {error}</>;
  return (
    <div>
      <h2>DataFetching</h2>
      <div>
        {data?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default DataFetching;
