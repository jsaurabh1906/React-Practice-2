import React, { useReducer } from "react";
import {
  buttonStyles1,
  dangerButton,
  topDivStyles,
} from "../../tailwindStyles";

const initialState = [];

const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, cartItemId: Date.now() }];
    case "REMOVE":
      return state.filter((item) => item.cartItemId !== action.cartItemId);
    default:
      return state;
  }
};

const items = [
  { id: 1, name: "shirt", price: 100 },
  { id: 2, name: "pant", price: 200 },
  { id: 3, name: "shoes", price: 300 },
  { id: 4, name: "belt", price: 50 },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const total = state.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className={topDivStyles}>
        <p>Cart Total: {total}</p>
        <hr />
        <div className="flex justify-between ">
          {" "}
          <div className="border-r-4">
            {" "}
            <h3>Products</h3>
            {items.map((item) => (
              <div
                className="flex justify-between items-center gap-2"
                key={item.id}
              >
                <p>
                  {item.name} - {item.price}
                </p>
                <button
                  className={buttonStyles1}
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  Add
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3>Items Added</h3>
            <ol>
              {state.map((item) => (
                <li
                  className="flex justify-between items-center gap-2 pl-2"
                  key={item.cartItemId}
                >
                  {item.name} - {item.price}
                  <button
                    className={dangerButton}
                    onClick={() =>
                      dispatch({ type: "REMOVE", cartItemId: item.cartItemId })
                    }
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
