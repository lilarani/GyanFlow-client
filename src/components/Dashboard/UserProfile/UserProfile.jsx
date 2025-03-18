import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import { FiEdit } from 'react-icons/fi';

const UserProfile = () => {
  const { user } = useSelector(state => state.authUser);
  console.log(user);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const title = (
    <p>
      <span className="text-yellow-300">G</span>yanFlow
    </p>
  );

  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127]">
      <div className="conteiner mx-auto ">
        <DashboardNavbar navTitle={title}></DashboardNavbar>
        <div className=" min-h-screen flex flex-col md:flex-row conteiner mx-auto ">
          {/* Sidebar */}
          <div className="w-80 bg-gradient-to-bl to-[#110234] from-[#070127] shadow-lg p-8 hidden md:block mt-4 text-white">
            <img
              src={user?.photoURL}
              alt="user image"
              className="w-32 h-32 rounded-full"
            />
            <ul className="mt-6 space-y-4 text-white">
              <li className=" font-semibold cursor-pointer">Class Offering</li>
              <li className=" font-semibold  cursor-pointer">My Courses</li>
              <li className=" font-semibold  cursor-pointer">Career</li>
              <li className=" font-semibold  cursor-pointer">Biography</li>
            </ul>
          </div>

          {/* Profile Section */}
          <div className="flex-1 p-5">
            <div className="bg-gradient-to-bl to-[#110234] from-[#070127] shadow-md rounded-lg p-6 text-white">
              <div className="flex items-center justify-between border-dashed border-b-[1px] border-gray-500 p-3">
                <h2 className="text-xl font-semibold">My Profile</h2>
                <FiEdit className="text-4xl" />
              </div>

              {/* user info */}
              <div>
                <h2></h2>
              </div>

              {/* Password Change Section */}
              {/* <div className="mt-6 border-t pt-4">
                <h3 className="font-semibold text-lg">Change Password</h3>
                <div className="mt-3">
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Enter new password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                  Set Password
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
