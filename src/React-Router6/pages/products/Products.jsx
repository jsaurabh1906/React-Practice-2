import React from "react";
import { Link, Outlet } from "react-router-dom";
import { inputStyles } from "../../../tailwindStyles";

const Products = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center
       mb-4"
      >
        <label>Search Products</label>
        <input className={inputStyles} type="search" placeholder="search..." />
      </div>
      <nav className="flex justify-center gap-4 m-4 underline">
        {/* relative link */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;

//note: Outlet Component is used to render the child routes of the parent route.

//note: Relative Links will navigate to the child route of the parent route.
{
  /* <Link to="featured">Featured</Link> 
  this will navigate to localhost:5173/products/featured */
}

//note: Absolute Links will navigate to the child route of the root route.
{
  /* <Link to="/featured">Featured</Link> 
  this will navigate to localhost:5173/featured 
  //////////////////////////
  to avoid above scenario we have to write complete path if absolute links used
  <Link to="/products/featured">Featured</Link>
  */
}
