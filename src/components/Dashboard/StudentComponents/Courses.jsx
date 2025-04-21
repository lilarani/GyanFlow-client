import { useGetStudentCourseQuery } from '@/redux/ApiCalling/apiClice';
import CourseCard from './CourseCard';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Courses = () => {
  const { user } = useSelector(state => state.authUser);

  const { data: courses } = useGetStudentCourseQuery(user?._id);
  console.log({ courses }, 'neela rani');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {courses?.data?.map((course, index) => (
        <div className=" bg-default shadow  rounded-xl p-5 space-y-3 border hover:shadow-lg transition">
          <div key={course?.courseId?._id} className="flex justify-between">
            <img
              src={course?.courseId?.thumbnail}
              alt=""
              className="h-52 w-full"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              {course?.courseId?.title}
            </h2>
            <Link
              to={`/CourseVideo/${course?.courseId?._id}`}
              className="px-4 py-2 border-[1px] border-blue-800 rounded-xl text-white"
            >
              Ongoing
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
