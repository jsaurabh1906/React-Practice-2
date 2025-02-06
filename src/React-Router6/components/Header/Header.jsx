import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../pages/auth/auth";

const activeClasses = "text-white border-b font-bold";

const normalClasses =
  "text-indigo-50 border-indigo-100 hover:bg-indigo-200 lg:hover:bg-transparent lg:border-0 hover:text-indigo-200 lg:p-0 transiton duration-300";
const Header = () => {
  const auth = useAuth();
  return (
    <header className="bg-indigo-500 text-white p-4 shadow-lg">
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
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                Contact
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/unsplash"
                className={({ isActive }) =>
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                Unsplash
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `  ${isActive ? activeClasses : normalClasses} `
                }
              >
                Profile
              </NavLink>
            </li>
            {!auth.user && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `  ${isActive ? activeClasses : normalClasses} `
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
