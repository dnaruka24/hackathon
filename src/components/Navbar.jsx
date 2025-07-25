// Navbar.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Recipes", to: "/recipes" },
    { name: "Favorites", to: "/favorites" },
    { name: "Login", to: "/login" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <img
          src={Logo}
          alt="Ranveer Brar Logo"
          className="h-10 w-auto md:h-12 hover:scale-115 transition-transform duration-300"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative text-white inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500
     ${
       isActive
         ? "after:w-full after:bg-red-500 font-semibold"
         : "after:w-0 after:bg-red-400 hover:after:w-full"
     }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base text-gray-100 hover:text-red-400 transition ${
                  isActive ? "font-semibold text-red-300" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
