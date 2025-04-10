import React from 'react';
import { Gift, Gem } from 'lucide-react'; 

const RewardCard = () => {
    return (
        <div className=" w-full md:w-[48%]   my-5 h-65 rounded-xl shadow-lg bg-gradient-to-b from-default to-transparent p-4 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="flex justify-center flex-col items-center pt-2  gap-2 ">

                <span className='text-3xl '>Reward </span> 
                <span className="text-7xl">🎁</span>
            </div>

            <div className="flex justify-between items-center mt-auto px-2 pb-4">
                <div className="bg-gradient-to-r w-[40%] from-blue-500 to-cyan-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <span className='text-3xl'> 🚀</span>
                    400
                </div>

                <div className="bg-gradient-to-r w-[40%] from-pink-500 to-yellow-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <span className='text-3xl'> 💎</span>
                    500
                </div>
            </div>
        </div>
    );
};

export default RewardCard;
