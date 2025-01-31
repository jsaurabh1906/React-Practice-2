import React, { useState } from "react";
import useFetch from "../implementation/useFetch";
import { buttonStyles1, topDivStyles } from "../../../../tailwindStyles";

const PaginatedPosts = () => {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  console.log(data);
  return (
    <div className={topDivStyles}>
      <h2>📰 Paginated Posts</h2>

      {/* Loader */}
      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {/* Error Handling */}
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {/* Display Posts */}
      <div className="space-y-4 max-w-screen-md">
        {data &&
          data.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-md shadow-md bg-white"
            >
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className={`${buttonStyles1} ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-600"
          }`}
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        <button
          className={buttonStyles1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedPosts;
