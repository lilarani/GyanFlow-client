import React from 'react';
import { useSelector } from 'react-redux';
import { useGetStudentCourseQuery } from '@/redux/ApiCalling/apiClice';
import { Link } from 'react-router';

const Courses = () => {
  const { user } = useSelector(state => state.authUser);
  const { data: courses } = useGetStudentCourseQuery(user?._id);
  console.log(courses)
  return (
    <div className="w-[90%] mx-auto mt-10">
      <h1 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn">
        🚀 Your Premium Learning Courses
      </h1>

      <div className="space-y-10 animate-fadeInUp">
        {courses?.data?.map((course, index) => (
          <div
            key={course?.courseId?._id}
            className="bg-[#1e1e30] my-shadow border border-gray-700 hover:border-blue-500 transition rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Thumbnail */}
            <div className="w-full md:w-1/2">
              <img
                src={course?.courseId?.thumbnail}
                alt={course?.courseId?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="w-full md:w-1/2 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {course?.courseId?.title}
                </h2>

                <p className="mt-3 text-gray-300 text-base">
                  {course?.courseId?.description?.slice(0, 200) || 'No description available...'}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                <div className="text-sm text-indigo-300">
                  Total Videos: {course?.courseId?.totalVideos || 'N/A'}
                </div>

                <Link
                  to={`/CourseVideo/${course?.courseId?._id}`}
                  className=" rounded-full my-shadow hover:text-black border text-white font-medium px-6 py-2 hover:bg-blue-200 transition w-fit"
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
