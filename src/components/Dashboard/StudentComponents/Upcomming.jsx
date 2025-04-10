import React from 'react'

const Upcomming = () => {

    const enrolledCourses = ['React Fundamentals', 'Tailwind CSS Mastery', 'Node.js Basics'];
  return (
    <div className=''>
    
              <div className="text-2xl font-bold text-white"> Welcome back!</div>
          <div className=" mx-auto p-3 md:p-5 flex justify-between items-center gap-2 w-full flex-col md:flex-row ">

              {/* Enrolled Courses ====================================*/}
              <div className="bg-[#1a044d]  shadow rounded-xl p-6 w-full md:w-[47%] h-[150px] ">
                  <h3 className="text-lg font-semibold text-white mb-2">📚 Enrolled Courses</h3>
                  <ul className="list-disc list-inside text-gray-500 space-y-1">
                      {enrolledCourses.map((course, i) => (
                          <li key={i}>{course}</li>
                      ))}
                  </ul>
              </div>

              {/* Progress Section =======================================*/}


              {/* Upcoming Class =======================================*/}
              <div className="bg-[#1a044d] shadow rounded-xl p-6 w-full md:w-[47%]  h-[150px]">
                  <h3 className="text-lg font-semibold text-white mb-1">🕒 Upcoming Class</h3>
                  <p className="text-gray-600">React Hooks Deep Dive - <strong>Friday, 10:00 AM</strong></p>
              </div>
          </div>
    </div>
  )
}

export default Upcomming