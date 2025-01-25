import React, { useEffect, useState } from "react";

const DebounceEffect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If searchTerm is empty, reset the results and skip the API call
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const timerId = setTimeout(() => {
      setIsLoading(true); // Start loading
      setError(null); // Reset error

      fetch(`https://jsonplaceholder.typicode.com/posts?id=${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch results");
          }
          return response.json();
        })
        .then((data) => {
          setResults(data);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false); // Stop loading
        });
    }, 700); // 700ms debounce time

    // Cleanup the timer to prevent unnecessary API calls
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div>
      <h2>Debounce Effect</h2>
      <div>
        <input
          className="border-2 border-blue-400 rounded-md placeholder:text-zinc-200 p-2"
          type="text"
          placeholder="Search by ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {results.length > 0
          ? results.map((result) => (
              <div key={result.id}>
                <h3 className="text-lg font-bold">Title: {result.title}</h3>
                <p>Body: {result.body}</p>
              </div>
            ))
          : !isLoading && searchTerm && <p>No results found</p>}
      </div>
    </div>
  );
};

export default DebounceEffect;
