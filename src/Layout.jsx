import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

// This function returns a layout component that includes a header, an outlet, and a footer
const Layout = () => {
  // Return a fragment that includes the header, outlet, and footer components
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

//Note: Outlet is a component from react-router-dom that renders the child route component.
//Note:  It is used to display the content of the current route.
