import React from "react";

const UseStateWithArrays = () => {
  const [items, setItems] = React.useState([]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, value: Math.floor(Math.random() * 100) + 1 },
    ]);
  };
  //   const handleAddItem = () => {
  //     setItems((prevItems) => [...prevItems, "New Item"]);
  //   };

  return (
    <div>
      <h2>UseStateWithArrays</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateWithArrays;
