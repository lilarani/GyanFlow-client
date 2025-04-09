import { IoSearch } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaDollarSign, FaRegStar, FaRegUser, FaUsers } from "react-icons/fa";

import { IoIosAddCircle } from "react-icons/io";
import { VscVmRunning } from "react-icons/vsc";
import { useGetMyUserQuery } from "@/redux/ApiCalling/apiClice";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
const Sidebar = () => {
  let { user, loader } = useSelector((state) => state.authUser);
  let [role, setRole] = useState({});
  // console.log(user);
  // let adminRole = 'admin';
  // let student = 'student';
  // let instructor = ' instructor';
  // const [isOpen, setIsOpen] = useState(false);

  // let { data } = useGetMyUserQuery(user?.email);
  // console.log(data?.user.role);
  useEffect(() => {
    setRole(user?.data?.role);
  }, [user, loader]);
  // const role = user?.user?.role;
  // console.log(user)

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl to-[#1a044d] from-[#080127] text-white p-2 pt-8 md:p-8">
      <Link
        to={"/"}
        className="font-bold text-base md:text-2xl  md:block block"
      >
        <span className="text-yellow-300 ">G</span>yanFlow
      </Link>

      <div className="relative flex items-center space-y-3 mt-10">
        <IoSearch className="absolute left-2 top-2 " />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full md:w-11/12 text-sm md:text-base pl-7 py-1 border-[1px] border-gray-500 focus:outline-none focus:ring-blue-[#1a044d] focus:ring rounded-lg"
        />
      </div>

      {/* admin role */}
      {role === "admin" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/adminDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              Dashboard
            </NavLink>
            <NavLink
              to={"/dashboard/addCourse"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <IoIosAddCircle />
              Add Course
            </NavLink>
            <NavLink
              to={"/dashboard/courses"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <VscVmRunning />
              All Courses
            </NavLink>

            <NavLink
              to={"/dashboard/userManagement"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <FaUsers />
              Users Managment
            </NavLink>

            <div className="w-full mt-4  border-gray-600 border-t-[1px]">
              <NavLink
                to={"/"}
                className="cursor-pointer block w-full text-sm md:text-base font-bold md:mt-8 hover:bg-[#ffffff44] px-4 py-2"
              >
                Home
              </NavLink>
            </div>
          </div>
        ))}
      {/* student role */}
      {role === "student" &&
        (loader ? (
          "Loding"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/studentDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              Student Dashboard
            </NavLink>
            <NavLink
              to={"/dashboard/courseAnnoucement"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              Course Annoucement
            </NavLink>
          </div>
        ))}

      {/* Instructor role */}
      {role === "instructor" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/instructorDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              instructor Dashboard
            </NavLink>
          </div>
        ))}
      {role === "teacher" &&
        (loader ? (
          "Loading"
        ) : (
          <div className="space-y-5 mt-10">
            <NavLink
              to={"/dashboard/teacherDashboard"}
              className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer hover:bg-[#ffffff44] md:px-4 py-2"
            >
              <BiSolidUpArrow />
              Teacher Dashboard
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
