import { useGetStudentCourseQuery } from '@/redux/ApiCalling/apiClice';
import CourseCard from './CourseCard';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Courses = () => {
  const { user } = useSelector(state => state.authUser);

  const { data: courses } = useGetStudentCourseQuery(user?._id);

  // const courses = [
  //   {
  //     title: 'React Fundamentals',
  //     instructor: 'John Doe',
  //     progress: 80,
  //     status: 'Ongoing',
  //     type: 'conceptul',
  //   },
  //   {
  //     title: 'Tailwind CSS Mastery',
  //     instructor: 'Sarah Smith',
  //     progress: 100,
  //     status: 'Completed',
  //     type: 'default',
  //   },
  // ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {courses?.data?.map((course, index) => (
        <div className="max-w-sm bg-default shadow  rounded-xl p-5 space-y-3 border hover:shadow-lg transition">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-white">
              {course?.courseId?.title}
            </h2>
            <Link
              to={`/CourseVideo/${course?.courseId?._id}`}
              className="px-4 py-1 bg-[#0000ff9c] text-white"
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
