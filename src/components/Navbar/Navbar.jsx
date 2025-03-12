import React, { useState } from 'react';

import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  // add this inside css file
  // .navbar{
  //   padding: 20px 40px 20px 40px;
  // }
  // .menu{
  //   border: none;
  //   margin - right: 30px;
  //   cursor: pointer;

  // }

  return (
    <div className="navbar  bg-[#0b1221]  backdrop-opacity-30  z-50 sticky top-0 left-0   ">
      <div className="text-[#7a879b]  flex justify-between items-center gap-10 relative  ">
        <Link
          to="/"
          className="first-letter:text-blue-500 text-3xl cursor-pointer "
        >
          GeaynFlow
        </Link>
        <div
          className={`bg-[#0b1221] absolute h-screen md:h-max md:right-[50px] top-[50px] md:top-0 w-screen md:w-max right-0  transform  ${
            open ? 'translate-x-[120%]' : 'translate-x-[10%]'
          }  md:translate-x-[0%]  transition-all duration-700 `}
        >
          <div className="flex justify-center flex-col md:flex-row items-center gap-4 ">
            <Link
              to="/about"
              className="border  rounded bg-default"
              style={{
                padding: '5px 10px',
              }}
            >
              About{' '}
            </Link>
            <Link
              to="/contact"
              className="border  rounded bg-default"
              style={{
                padding: '5px 10px',
              }}
            >
              Contact{' '}
            </Link>
            <button
              className="border  rounded bg-default"
              onClick={toggleModal}
              style={{
                padding: '5px 10px',
                borderRadius: '30px',
              }}
            >
              CARD{' '}
            </button>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden transition-all duration-700 text-[#7a879b] border menu  rounded text-2xl "
        >
          {open ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-x"></i>
          )}
        </button>
      </div>
      {/* modal */}
      {modal && (
        <div className="fixed left-0 top-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.1)]   flex justify-center items-center ">
          <div className="bg-default w-[95%] md:w-1/2 h-1/2 rounded  bg-[#0b1120] shadow">
            <button
              onClick={toggleModal}
              className=" text-red-500  cursor-pointer "
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <h1>card===========</h1>
          </div>
        </div>
      )}
      {/* modal end here */}
    </div>
  );
};
