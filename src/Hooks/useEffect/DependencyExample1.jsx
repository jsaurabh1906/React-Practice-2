import React from "react";

const DependencyExample1 = () => {
  //  const [users, setUsers] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [userId, setUserId] = React.useState(1);

  //   React.useEffect(() => {
  //     console.log("useEffect called - DependencyExample1");
  //     fetch(`https://jsonplaceholder.typicode.com/users`)
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  React.useEffect(() => {
    console.log("useEffect called - DependencyExample1");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>DependencyExample1</h2>
      {/* {users && users.map((user) => <p key={user.id}>{user.name}</p>)} */}
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border-2 border-blue-400 rounded-md"
      />
      {user && <p>{user.name}</p>}
    </div>
  );
};

export default DependencyExample1;
