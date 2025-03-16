import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router';
import { useEffect } from 'react';
import './Navbar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase.config';
import { toast } from 'react-toastify';

import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  let navigate = useNavigate();
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

  let signOutUser = () => {
    signOut(auth).then(async () => {
      const response = await axios.get(
        'http://localhost:4000/gyanflow/user/logout',
        { withCredentials: true }
      );
      navigate('/login');
      toast('logout user');
    });
  };

  // dropdown handler function
  let handleDropdown = () => {
    setDropdown(!dropdown);
  };

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
          <Link className="text-md flex flex-row gap-2 items-center font-bold py-4 px-8 hover:bg-[#ffffff44]">
            <CiSearch /> Search
          </Link>
          {!user ? (
            <div className="flex flex-row">
              {' '}
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
                  <Link
                    to={'/register/Student'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Student Sign-up
                  </Link>
                  <Link
                    to={'/register/Teacher'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Teacher Sign-up
                  </Link>
                  <Link
                    to={'/register/Employer'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Employer Sign-up
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <img
                onClick={handleDropdown}
                src={user?.photoURL}
                alt="user Image"
                className="w-12 h-12 rounded-full relative"
              />
              {dropdown && (
                <div className="bg-black w-80 h-80 absolute top-20 right-12 p-6 ">
                  <h2 className="text-xl font-bold ">{user?.displayName}</h2>
                  <p className="text-lg font-semibold border-gray-500 border-b-[1px] py-2">
                    {user?.email}
                  </p>
                  <div className="w-full flex flex-col gap-4 mt-12">
                    <Link
                      to={'/dashboard'}
                      className="text-md w-full text-center cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44] bg-blue-500 "
                    >
                      Dashboard
                    </Link>
                    {/* logout btn */}
                    <button
                      onClick={signOutUser}
                      className="text-md w-full border-blue-500 text-blue-500 border-[1px] cursor-pointer font-bold py-1 px-4 hover:bg-blue-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}

      <div
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
          <div>
            {user ? (
              <div className="flex flex-col gap-3 w-full">
                <Link
                  to={'/dashboard'}
                  className="text-md w-full text-center cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44] bg-blue-500 "
                >
                  Dashboard
                </Link>
                <button className="w-full border-blue-500 text-blue-500 border-[1px] cursor-pointer font-bold py-1 px-4 hover:bg-blue-500">
                  Log-out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to={'/register/Student'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Student Sign-up
                </Link>
                <Link
                  to={'/register/Teacher'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Teacher Sign-up
                </Link>
                <Link
                  to={'/register/Employer'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Employer Sign-up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
