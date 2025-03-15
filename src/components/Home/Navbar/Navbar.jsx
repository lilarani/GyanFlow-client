import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router';
import { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen && !event.target.closest('.sidebar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  let { user } = useSelector(state => state.authUser);
  console.log(user);

  return (
    <div className="sticky top-0 left-0 w-full h-max z-50">
      <nav className="flex  text-gray-200 font-bold flex-row justify-between bg-gradient-to-bl to-[#1a044d] from-[#080127] items-center ">
        <div className="flex flex-row justify-between w-full xl:w-fit items-center ">
          <Link className="py-4 px-8 text-2xl">
            <span className="text-yellow-300">Gyan</span>Flow
          </Link>
          <div
            className="py-4 w-fit h-fit xl:hidden cursor-pointer px-8 hover:bg-[#ffffff44]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </div>
          <ul className="xl:flex flex-row hidden">
            <li>
              <NavLink className="py-4 px-8 hover:bg-[#ffffff44]" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="py-4 px-8 hover:bg-[#ffffff44]" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="py-4 px-8 hover:bg-[#ffffff44]" to="/support">
                Support
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Before Sign-in/Sign-up */}

        <div className="xl:flex flex-row hidden">
          <button className="text-md flex flex-row gap-2 items-center font-bold py-4 px-8 hover:bg-[#ffffff44]">
            <CiSearch /> Search
          </button>
          <Link
            to={'/login'}
            className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
          >
            Sign-in
          </Link>
          <div className="w-fit box-model cursor-pointer h-fit">
            <p className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]">
              Register
            </p>
            <div className="hidden z-50 my-container bg-[#040150]">
              <button className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]">
                Student Sign-up
              </button>
              <button className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]">
                Teacher Sign-up
              </button>
              <button className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]">
                Employer Sign-up
              </button>
              {/* Dashboard link */}
              <Link
                to={'/dashboard'}
                className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44] text-center"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}

      <div
        //         className={`fixed top-0 right-0 h-full w-64 bg-[#2f2753] z-50 shadow-lg transform ${

        className={`fixed z-50 top-0 right-0 h-full w-64 bg-[#2f2753] shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out xl:hidden`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-start text-start px-6 text-white">
          <li className="py-4 w-full">
            <NavLink
              to="/"
              className="block w-full"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="py-4 w-full">
            <NavLink
              to="/about"
              className="block w-full"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="py-4 w-full">
            <NavLink
              to="/support"
              className="block w-full"
              onClick={() => setIsOpen(false)}
            >
              Support
            </NavLink>
          </li>
          <button className="text-md font-bold py-4 hover:bg-[#ffffff44]">
            Student Sign-up
          </button>
          <button className="text-md font-bold py-4 hover:bg-[#ffffff44]">
            Teacher Sign-up
          </button>
          <button className="text-md font-bold py-4 hover:bg-[#ffffff44]">
            Employer Sign-up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
