import {
  useGetUsersQuery,
  useGetInstructorsQuery,
  useCourseForInstructorQuery,
} from '@/redux/ApiCalling/apiClice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const InstructorDashboard = () => {
  const { user, loader } = useSelector(state => state.authUser);
  let [id, setId] = useState(null);
  let { data } = useCourseForInstructorQuery(id);

  useEffect(() => {
    setId(user?._id);
  }, [user]);

  return (
    <div className="bg-black h-full">
      <p className="text-xl sticky top-0 z-20 bg-black text-center font-bold text-blue-200 py-4">
        Invited Courses Lists
      </p>

      <div className="flex flex-col  gap-16 p-6">
        {data?.map(course => (
          <div
            key={course._id}
            className="border my-shadow sticky md:relative top-3 flex flex-col "
          >
            <div className="md:flex bg-[#050520e9] flex-row gap-4">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full flex-1 h-[200px]  object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between text-blue-200 ">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <Link
                    className="px-4 text-blue-200 py-2 rounded-full border-r border-l"
                    to={`action/${course._id}`}
                  >
                    See Deatils
                  </Link>
                </div>

                <p className=" text-xs mt-1">{course.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold ">
                    ৳{course.price}
                  </span>
                  <span>Total Duration: {course.totalDuration} month</span>
                  <span>Batch: {course.batch}</span>
                  <span className="text-xs px-2 py-1 bg-green-600 rounded-full">
                    {course.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorDashboard;
