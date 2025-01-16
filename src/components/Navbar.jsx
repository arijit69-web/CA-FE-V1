import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { AuthContext } from "../context/AuthProvider";
import './Banner.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavItems = [
    { path: "/", title: "Home" },
    { path: "/jobs", title: "Jobs" },
    { path: "/about", title: "About" },
    { path: "/careers", title: "Careers" }
  ];

  const authNavItems = [
    { path: "/login", title: "Login" },
    { path: "/signup", title: "Sign Up" }
  ];

  return (
    <header className="max-w-screen mx-auto xl:px-24 px-4 fixed top-0 left-0 right-0 bg-slate-950 z-50">
      <nav className="flex items-center py-1.5 navbar">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a className="flex items-center gap-2 text-2xl text-black" href="/">
            <img src="./CA.png" alt="logo" height={12} width={140} />
            <span className="powered-by">by- Coding Arrow</span>
          </a>
        </div>

        {/* Main Navigation - Center */}
        <ul className="hidden md:flex items-center gap-10 mx-auto ml-48 md:ml-32">
          {mainNavItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          {/* AI Resume */}

        </ul>

        {/* Auth Navigation - Right */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="flex relative justify-center right-20 items-center ml-60">
            <NavLink
              to="/resume"
              className="flex items-center gap-2 text-white px-3 py-2 border-2 border-emerald-700 rounded-xl hover:bg-emerald-600 hover:text-white transition duration-200"
            >
              AI Resume
              <BsStars />

            </NavLink>
          </li>
          {authNavItems.map(({ path, title }) => (
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

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={handleMenuToggler} className="p-2">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-white" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-white/75" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul className="space-y-2">
          {mainNavItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white">
              <NavLink
                onClick={handleMenuToggler}
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          {/* AI Resume for Mobile */}
          <li>
            <NavLink
              to="/resume"
              onClick={handleMenuToggler}
              className="flex items-center gap-2 text-white   "
            >

              AI Resume
            </NavLink>
          </li>

          {authNavItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white">
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
