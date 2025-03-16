import { IoSearch } from 'react-icons/io5';
import { BiSolidUpArrow } from 'react-icons/bi';
import { FaDollarSign, FaRegStar, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router';

const Sidebar = () => {
  // let adminRole = 'admin';
  // let student = 'student';
  // let instructor = ' instructor';

  const role = 'admin';
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl  to-[#1a044d] from-[#080127] text-white p-2 pt-8 md:p-8">
      <h2 className="font-bold text-base md:text-2xl ">
        <span className="text-yellow-300">G</span>yanFlow
      </h2>
      <div className="relative flex items-center space-y-3 mt-10">
        <IoSearch className="absolute left-2 top-2 " />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full md:w-60 text-sm md:text-base pl-7 py-1 border-[1px] border-gray-500 focus:outline-none focus:ring-blue-[#1a044d] focus:ring rounded-lg"
        />
      </div>

      {/* admin role */}
      {role === 'admin' && (
        <div className="space-y-5 mt-10">
          <Link
            to={'#'}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <BiSolidUpArrow />
            Dashboard
          </Link>
          <Link
            to={'#'}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <FaRegStar />
            Features
          </Link>
          <Link
            to={'#'}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <FaRegUser />
            Users
          </Link>
          <Link
            to={'#'}
            className="text-sm md:text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <FaDollarSign />
            Pricing
          </Link>
        </div>
      )}
      {/* student role */}
      {role === 'student' && (
        <div className="space-y-5 mt-10">
          <Link
            to={'#'}
            className="text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <BiSolidUpArrow />
            Student Dashboard
          </Link>
        </div>
      )}
      {/* user role */}
      {role === 'user' && (
        <div className="space-y-5 mt-10">
          <Link
            to={'#'}
            className="text-lg font-bold flex gap-2 items-center cursor-pointer"
          >
            <BiSolidUpArrow />
            User Dashboard
          </Link>
        </div>
      )}
      {/* Instructor role */}
      {role === 'instructor' && (
        <div className="space-y-5 mt-10">
          <Link
            to={'#'}
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
