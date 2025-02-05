import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">MyWebsite</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700 border-b" : "text-gray-100"
                  }  border-gray-100 hover:bg-blue-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700 border-b" : "text-gray-100"
                  }  border-gray-100 hover:bg-blue-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700 border-b" : "text-gray-100"
                  }  border-gray-100 hover:bg-blue-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/unsplash"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700 border-b" : "text-gray-100"
                  }  border-gray-100 hover:bg-blue-200 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Unsplash
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
