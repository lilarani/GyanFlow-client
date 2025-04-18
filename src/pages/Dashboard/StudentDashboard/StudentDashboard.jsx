import ConceptualClasses from '@/components/Dashboard/StudentComponents/ConceptualClasses';
import Courses from '@/components/Dashboard/StudentComponents/Courses';
import RewardCard from '@/components/Dashboard/StudentComponents/RewardCard';
import Strak from '@/components/Dashboard/StudentComponents/Streak';
import Upcomming from '@/components/Dashboard/StudentComponents/Upcomming';

import { useState } from 'react';

const StudentDashboard = () => {
  const [toggleCourse, setToggleCourse] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-[100%] mx-auto  p-7 h-full">
        {/* <Upcomming/> */}

        <div className="w-[90%]  mx-auto flex items-center  justify-center  md:gap-2  capitalize flex-col md:flex-row  py-5 ">
          <button
            onClick={() => setToggleCourse(false)}
            className={`border  px-7 py-2 ${
              !toggleCourse ? 'bg-yellow-700' : ' bg-default'
            }  text-white rounded border-amber-500 md:my-3`}
          >
            {' '}
            Courses
          </button>
          <button
            onClick={() => setToggleCourse(true)}
            className={`${
              toggleCourse ? 'bg-yellow-700' : ' bg-default'
            } border  px-7 py-2  text-white rounded border-yellow-500 my-3`}
          >
            Conteptual videos
          </button>
        </div>
        {toggleCourse ? <ConceptualClasses /> : <Courses />}
      </div>
    </div>
  );
};

export default StudentDashboard;
