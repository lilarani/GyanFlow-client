import React, { useState } from 'react'
import QuizList from './QuizList'
import QuizCreatorForm from './QuizCreatorForm'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Quiz = ({ toggleQuizModule, quizInfo }) => {

    const [toggle , setToggle] = useState(false)
    const { user, loader } = useSelector(state => state.authUser);
    const instructorId = user?.data?._id ;
    const info={
        instructorId,
        quizInfo,
         setToggle,toggle
    }

    const handleToogle= ()=>{
        setToggle(!toggle);
    }

  return (
    <div className='fixed left-0 top-0 w-full h-screen overflow-y-scroll bg-[rgba(0,0,0,0.5)] flex justify-center items-center '>
          <div className='bg-main opacity-90 shadow  text-white w-[97%] md:w-[70%] h-screen overflow-y-auto p-2 md:p-5 rounded relative   '>
             <div className='w-full flex justify-end items-center'>
                  <button className=' border rounded  px-3  bg-main text-white capitalize cursor-pointer hover:bg-transparent   transition-all duration-700' onClick={handleToogle}>{!toggle ?"Add quiz":"view quiz for this module"}</button> 
                  <button className='bg-[crimson] hover:bg-red-400 transition-all duration-700 text-white   border w-8 h-8 rounded-full  ml-3' onClick={toggleQuizModule}>x</button> 
                </div>      
             {!toggle? <QuizList info={info} />:
              <QuizCreatorForm 
              toggleQuizModule={toggleQuizModule }
              info={info}
              />  }  

        </div>
    </div>
  )
}

export default Quiz