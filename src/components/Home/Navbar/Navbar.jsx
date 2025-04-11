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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  let navigate = useNavigate();
  const { user, loader } = useSelector(state => state.authUser);

  // let { data } = useGetMyUserQuery(user?.email);
  console.log(user?.data?.role);
  const role = user?.data?.role;
  // console.log(user.success , " Loader " , loader)

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

  let signOutUser = () => {
    signOut(auth).then(async () => {
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
      <nav className="flex   text-gray-200 font-bold flex-row justify-between bg-gradient-to-bl to-[#1a044d] from-[#080127] items-center md:px-[48px] lg:px-[110px] py-2">
        <div className="flex flex-row justify-between w-full xl:w-fit items-center ">
          <Link to={'/'} className="py-4 px-4 text-2xl ">
            <span className="text-yellow-300 cursor-pointer">Gyan</span>Flow
          </Link>
          <div
            className="py-4 w-fit h-fit xl:hidden cursor-pointer px-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </div>
          <ul className="xl:flex flex-row hidden gap-2">
            <li>
              <NavLink
                className="py-3 px-6 rounded hover:bg-[#ffffff44]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="py-3 px-6 rounded hover:bg-[#ffffff44]"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="py-3 px-6 rounded hover:bg-[#ffffff44]"
                to="/support"
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                className="py-3 px-6 rounded hover:bg-[#ffffff44]"
                to="/career"
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Before Sign-in/Sign-up */}

        <div className="xl:flex flex-row hidden gap-4">
          <Link className="text-md flex flex-row gap-2 items-center font-bold py-3 px-6 hover:bg-[#ffffff44] ">
            <CiSearch /> Search
            {user?.user?.name}
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
                    to={'/register/student'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Student Sign-up
                  </Link>
                  <Link
                    to={'/register/teacher'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Teacher Sign-up
                  </Link>
                  <Link
                    to={'/register/instructor'}
                    className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                  >
                    Instructor Sign-up
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <p>{user.success}</p>
              <img
                onClick={handleDropdown}
                src={user?.data?.picture}
                alt="user Image"
                className="w-12 h-12 rounded-full relative"
              />
              {dropdown && (
                <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127] w-80 h-80 absolute top-20 right-12 p-6 ">
                  {/* <image className="text-xl font-bold ">{user?.user?.picture}</h2> */}
                  <img
                    className="h-15 border-6 p-1 w-15 rounded-full"
                    src={`${user?.data?.picture}`}
                    alt=""
                  />
                  <p className="text-lg font-semibold border-gray-500 border-b-[1px] py-2">
                    {user?.data?.email}
                  </p>
                  <div className="w-full flex flex-col gap-4 mt-8">
                    <Link
                      to={`/dashboard/${role}Dashboard`}
                      className="text-md w-full text-center cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff56] bg-[#ffffff44] transition duration-300 ease-in"
                    >
                      Dashboard
                    </Link>
                    {/* logout btn */}
                    <button
                      onClick={signOutUser}
                      className="text-md w-full border-[#ffffff8a] text-[#ffffffba] border-[1px] cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44] hover:text-white transition duration-300 ease-in"
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
          <li className="py-4 w-full">
            <NavLink
              to="/career"
              className="block w-full"
              onClick={() => setIsOpen(false)}
            >
              Career
            </NavLink>
          </li>
          <div>
            {user ? (
              <div className="flex flex-col gap-3 w-full">
                <Link
                  to={`/dashboard/${role}Dashboard`}
                  className="text-md w-full text-center cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44] bg-[#ffffff44] "
                >
                  Dashboard
                </Link>
                <button
                  onClick={signOutUser}
                  className="w-full border-[#ffffff44] text-[#ffffffd0] border-[1px] cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44]"
                >
                  Log-out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <Link
                  to={'/register/student'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Student Sign-up
                </Link>
                <Link
                  to={'/register/teacher'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Teacher Sign-up
                </Link>
                <Link
                  to={'/register/instructor'}
                  className="text-md font-bold py-4 px-8 hover:bg-[#ffffff44]"
                >
                  Instructor Sign-up
                </Link>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
