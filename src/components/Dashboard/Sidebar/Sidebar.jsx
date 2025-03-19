import { IoSearch } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaDollarSign, FaRegStar, FaRegUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { VscVmRunning } from "react-icons/vsc";
const Sidebar = () => {
  // let adminRole = 'admin';
  // let student = 'student';
  // let instructor = ' instructor';
  const [isOpen, setIsOpen] = useState(false);

  const role = "admin";
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl to-[#1a044d] from-[#080127] text-white p-2 pt-8 md:p-8">
      <Link
        to={"/"}
        className="font-bold text-base md:text-2xl hidden md:block block"
      >
        <span className="text-yellow-300 ">G</span>yanFlow
      </Link>
      <GiHamburgerMenu className="text-white block md:hidden" />
      <div className="relative flex items-center space-y-3 mt-10">
        <IoSearch className="absolute left-2 top-2 " />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full md:w-11/12 text-sm md:text-base pl-7 py-1 border-[1px] border-gray-500 focus:outline-none focus:ring-blue-[#1a044d] focus:ring rounded-lg"
        />
      </div>

      {/* admin role */}
      {role === "admin" && (
        <div className="space-y-5 mt-10">
          <Link
            to={"/dashboard/adminDashBoard"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <BiSolidUpArrow />
            Dashboard
          </Link>
          <Link
            to={"/dashboard/addCourse"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <IoIosAddCircle />
            Add Course
          </Link>
          <Link
            to={"/dashboard/courses"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <VscVmRunning />
            All Courses
          </Link>
          <Link
            to={"/dashboard/features"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <FaRegStar />
            Features
          </Link>

          <Link
            to={"#"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <FaUsers />
            Users Managment
          </Link>
          <Link
            to={"#"}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
          >
            <FaDollarSign />
            Pricing
          </Link>

          <div className="w-full mt-4  border-gray-600 border-t-[1px]">
            <Link
              to={"/"}
              className="cursor-pointer block w-full text-base md:text-xl font-bold md:mt-8 hover:bg-[#ffffff44] px-4 py-2"
            >
              Home
            </Link>
          </div>
        </div>
      )}
      {/* student role */}
      {role === "student" && (
        <div className="space-y-5 mt-10">
          <Link
            to={"/dashboard/studentDashboard"}
            className="text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <BiSolidUpArrow />
            Student Dashboard
          </Link>
        </div>
      )}

      {/* Instructor role */}
      {role === "instructor" && (
        <div className="space-y-5 mt-10">
          <Link
            to={"/dashboard/instructorDasboard"}
            className="text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <BiSolidUpArrow />
            instructor Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
