import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Order Summary Page</h2>
      <p>Your Order is Confirmed</p>{" "}
      <button onClick={() => navigate(-1)}>⬅️Go back</button>
    </div>
  );
};

export default OrderSummary;
