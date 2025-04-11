import Courses from '@/components/Dashboard/StudentComponents/Courses';
import Progress from '@/components/Dashboard/StudentComponents/Progress';
import RewardCard from '@/components/Dashboard/StudentComponents/RewardCard';
import Strak from '@/components/Dashboard/StudentComponents/Streak';
import Upcomming from '@/components/Dashboard/StudentComponents/Upcomming';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
const ActionalDashboard = () => {



    return (
        <div className=' p-5 bg-default py-10 ' >
            <Upcomming />
            <Courses />
            <div className='w-full flex justify-between  my-4   items-center  flex-wrap    '>
                <Progress />
                <RewardCard />
            </div>

            <Strak />


        </div>
    )
}

export default ActionalDashboard