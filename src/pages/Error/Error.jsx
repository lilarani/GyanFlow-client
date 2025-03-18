import React from 'react'
import errorRain from '../../../public/rainErrorPage.json';
import Four04 from '../../../public/404.json';
import error from '../../../public/errorPage.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function Error() {
  return (
    <div>
<div className='h-screen  bg-black   text-white'>
    <Lottie className=' fixed w-full mx-auto' animationData={errorRain} loop={true}/>
     <div className='h-full flex flex-col items-center justify-center '>
     <div className=''>
        <div className='h-full'>
          <div className='z-20  flex justify-center'><Lottie className='h-32 w-32' animationData={error} loop></Lottie></div>
          <div className='flex justify-center'><Lottie className='h-44 w-44' animationData={Four04} loop></Lottie></div>
          <div className='flex justify-center font-semibold text-center text-4xl'>Sorry, Could Not Find this  Page</div>

          <div  className='flex justify-center font-semibold my-4  text-2xl'><Link to='login' className='border bg-blue-600   hover:bg-blue-300 px-2 py-1 border-blue-700' ><div className='flex hover:text-red-400 items-center justify-center w-full gap-3 text-center'><FaCircleArrowLeft  className='text-red-200'/> <button  >Go Back To Home Page</button></div></Link></div>

        </div>
      </div>
     </div>
   
    </div>


        
    </div>
  )
}
