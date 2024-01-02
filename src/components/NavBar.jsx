import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="mx-auto my-4 fixed w-full top-0 left-0 right-0">
      <nav className="border-gray-200 px-2 mb-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to={"/"} className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap">
              Blog App
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="relative mr-3 md:mr-0 hidden md:block">
              <div className="flex items-center gap-5 justify-center">
                <Link
                  to={"/signup"}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded"
                >
                  Log In
                </Link>
              </div>
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex justify-between items-center w-full md:w-auto md:order-1`}
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/favorites"}
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  onClick={toggleMenu}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to={"/create"}
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  onClick={toggleMenu}
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
