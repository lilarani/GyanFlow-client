import React from 'react';
import { FaBookOpen, FaVideo, FaFire, FaTrophy, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Courses from '@/components/Dashboard/StudentComponents/Courses';
import { useState } from 'react';
import { useGetCourseQuery, useGetStudentCourseQuery } from '@/redux/ApiCalling/apiClice';
import { useSelector } from 'react-redux';

const ConceptualClasses = () => {
  const { user } = useSelector(state => state.authUser);

  const { data: courses } = useGetStudentCourseQuery(user?._id);
  console.log("studens course ", courses)
  return (
    <div className="w-[80%]mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-[90%] mx-auto mt-16 animate-fadeIn delay-200">
        <div className="bg-[#2d2d44] p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaBookOpen className="text-3xl text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Courses Enrolled</h2>
          </div>
          <p className="text-5xl font-black text-indigo-300">{courses?.data?.length}</p>
          <p className="text-sm text-gray-400 mt-1">Completed + Ongoing</p>
        </div>

        <div className="bg-[#2d2d44] p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaVideo className="text-3xl text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Conceptual Classes</h2>
          </div>
          <p className="text-5xl font-black text-indigo-300">0</p>
          <p className="text-sm text-gray-400 mt-1">Video Modules Watched</p>
        </div>

        <div className="bg-[#2d2d44] p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaFire className="text-3xl text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Learning Streak</h2>
          </div>
          <p className="text-5xl font-black text-indigo-300">0 <span className='text-xs'>Days</span></p>
          <p className="text-sm text-gray-400 mt-1">Keep It Going!</p>
        </div>

        <div className="bg-[#2d2d44] p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaTrophy className="text-3xl text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Achievements</h2>
          </div>
          <p className="text-5xl font-black text-indigo-300">0</p>
          <p className="text-sm text-gray-400 mt-1">Badges Earned</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-full md:w-[90%] mx-auto mt-16 grid md:grid-cols-2 gap-10 animate-fadeIn delay-400">
        <div className="bg-[#25253d] rounded-xl p-6 flex items-start gap-4 shadow-md">
          <FaCalendarAlt className="text-4xl text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white">Next Class Schedule</h3>
            <p className="text-gray-300 mt-1">Wednesday, May 4 - 10:00 AM</p>
          </div>
        </div>

        <div className="bg-[#25253d] rounded-xl p-6 flex items-start gap-4 shadow-md">
          <FaClock className="text-4xl text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white">Total Study This Week</h3>
            <p className="text-gray-300 mt-1">12 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptualClasses;
