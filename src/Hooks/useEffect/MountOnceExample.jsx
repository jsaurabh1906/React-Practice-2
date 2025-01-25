import React from "react";

const MountOnceExample = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    console.log("Fetching data - useEffect Called");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2>Mount Once Example</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>{" "}
    </div>
  );
};

export default MountOnceExample;
