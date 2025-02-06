import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonStyles1 } from "../../tailwindStyles";
const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      <h2 className="text-3xl font-bold">Welcome to MyWebsite</h2>
      <p className="text-lg text-gray-600 mt-4">
        Your go-to place for amazing content.{" "}
      </p>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold">Shop Now:</h3>
        <p>This is the example of navigating programmatically</p>
        <p>This button click will navigate to /order-summary</p>{" "}
        <button
          onClick={() => navigate("/order-summary")}
          className={buttonStyles1}
        >
          Confirm Order
        </button>
      </div>
    </section>
  );
};

export default Home;

// note:  if we use navigate("/order")  then it will navigate to /order-summary

//note: and if we use navigate("/order-summary", {replace:true}) then it will navigate to /order-summary
//note: and it will not be able to go back to home page
//note: bcoz the navigation will replace the current entry in the history stack instead of adding a new one.
