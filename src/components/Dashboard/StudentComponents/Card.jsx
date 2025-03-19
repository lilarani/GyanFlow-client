import React, { useEffect, useState } from 'react'
import Button from '@/components/customs/Button';

import "./card.css"
const Card = ({ course }) => {


  return (
    <div className="bg-[rgba(0,0,0,0.3)] shadow-2xs  overflow-hidden rounded-2xl p-4 w-full sm:w-[45%] flex  gap-3 relative  course_card flex-col lg:flex-row">


      
      <img
        src={course.image}
        alt={course.title}
        className="w-full lg:w-[40%] h-full object-cover rounded-lg  transition-all duration-700 "
      />
      <button className='absolute w-[150px] top-[30px] left-[-50px] bg-default  text-white capitalize  transform rotate-[-53deg] px-5 py-1'>premium</button>


{/* after hover it will show================ */}
      <div className="flex items-center  flex-col justify-center  md:justify-start md:items-start absolute top-0 bg-main w-full h-full   desc p-3 ">
        <div className='w-full flex justify-between items-center '>
          <h2 className="text-xl font-semibold mt-3">{course.title}</h2>
          <p className="text-green-600 font-bold mt-2">{course.price}</p>
        </div>
        <p>{course?.description}</p>
        <Button text="Enroll Now" url={`/course/${course.name}`} />
      </div>
      {/* ================ */}
      <div className='w-full lg:w-[47%]'>
        <h2 className="text-xl font-semibold mt-3">{course.title}</h2>
        <p className="text-green-600 font-bold mt-2">{course.price}</p>
        <Button text="Enroll Now" url={`/course/${course.name}`} />
      </div>
    </div>
  )
}

export default Card
