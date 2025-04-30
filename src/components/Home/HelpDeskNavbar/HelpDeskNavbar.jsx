import React from 'react';
import { Link, NavLink } from 'react-router';

const HelpDeskNavbar = () => {
  return (
    <div className="bg-gradient-to-bl to-[#0F172A] from-[#080127] sticky top-0 z-50 p-6">
      <nav className="w-10/12 mx-auto  shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to={'/helpDesk'} className="text-white font-bold text-xl">
            HelpDesk
          </Link>

          {/* Menu Items for Desktop */}
          <div className="hidden md:flex space-x-6 text-base">
            <NavLink
              to={'/'}
              className="text-white hover:text-gray-300 transition"
            >
              <span className="logoColor">Gyan</span>Flow
            </NavLink>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Example
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Example
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Example
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* Simple Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HelpDeskNavbar;
