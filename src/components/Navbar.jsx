/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import { AuthContext } from "../context/AuthProvider";
import './Banner.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // menu toggle btn
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/jobs",
      title: "Jobs"
    },
    {
      path: "/about",
      title: "About"
    }

  ];
  return (
    <header className="max-w-screen  mx-auto xl:px-24 px-4 fixed top-0 left-0 right-0 bg-black z-50 ">
      <nav className="flex justify-between  items-center py-1.5 navbar">
        <a className="flex  items-center gap-2  text-2xl text-black" href="/">
          <img src="./logo2.png" alt="logo" height={10} width={120} />
          &nbsp;  <span className="powered-by">by- Coding Arrow</span>
        </a>

        {/* nav items */}
        <ul className="hidden md:flex  gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>

        </div>



        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <>
                <FaXmark className="w-5 h-5 text-white" />
              </>
            ) : (
              <>
                <FaBarsStaggered className="w-5 h-5 text-white/75" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu items */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"
          }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                onClick={handleMenuToggler}
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}


        </ul>
      </div>
    </header>
  );
};

export default Navbar;
