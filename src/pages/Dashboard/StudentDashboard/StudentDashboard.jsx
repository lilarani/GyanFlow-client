import ConceptualClasses from '@/components/Dashboard/StudentComponents/ConceptualClasses';
import Courses from '@/components/Dashboard/StudentComponents/Courses';
import { useState } from 'react';
import { FaBookOpen, FaVideo, FaFire, FaTrophy, FaCalendarAlt, FaClock } from 'react-icons/fa';

const StudentDashboard = () => {
  const [toggleCourse, setToggleCourse] = useState(true);

  return (
    <div className="bg-gradient-to-b from-[#1e1e2f] via-[#292947] to-[#1f1f2e] min-h-screen text-white font-inter">
      <div className="w-full mx-auto px-6 py-10">
        {/* Toggle Buttons */}
        <div className="w-full md:w-[80%] mx-auto flex items-center justify-center gap-6 flex-col md:flex-row py-8 animate-fadeIn">
          <button
            onClick={() => setToggleCourse(false)}
            className={`transition-all duration-300 ease-in-out px-10 py-3 text-white rounded-full font-semibold shadow-xl border border-purple-500 flex items-center gap-3 tracking-wide text-lg
              ${!toggleCourse ? 'bg-gradient-to-r from-purple-500 to-indigo-600 scale-105' : 'bg-transparent hover:bg-purple-700/20'}`}
          >
            <FaBookOpen className="text-xl" /> My Class
          </button>

          <button
            onClick={() => setToggleCourse(true)}
            className={`transition-all duration-300 ease-in-out px-10 py-3 text-white rounded-full font-semibold shadow-xl border border-purple-500 flex items-center gap-3 tracking-wide text-lg
              ${toggleCourse ? 'bg-gradient-to-r from-purple-500 to-indigo-600 scale-105' : 'bg-transparent hover:bg-purple-700/20'}`}
          >
            <FaVideo className="text-xl" /> Learning Snapshot
          </button>
        </div>

        {/* Section Content */}
        <div className="mt-12 animate-slideInUp">
          {toggleCourse ? <ConceptualClasses /> : <Courses />}
        </div>

        {/* Dashboard Highlights */}

      </div>
    </div>
  );
};

export default StudentDashboard;