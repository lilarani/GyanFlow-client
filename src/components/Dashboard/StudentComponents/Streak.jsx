import React from 'react'

const Strak = () => {
    const streakDay = Array.from({ length: 60 }, (_, i) => (i + 1))

  return (
      <div className="max-w-4xl mx-auto p-6 border bg-[rgba(0,0,0,0.1)] border-[rgba(255,255,255,0.1)] my-10 rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-3 text-white">🔥 Daily Streak Tracker

             <div className='flex justify-center items-center gap-2 '>
                  <span className='text-white flex items-center justify-center font-semibold rounded shadow w-7 h-7   bg-gradient-to-t from-transparent to-main'></span>
                  <span className='text-white flex items-center justify-center font-semibold rounded shadow w-7 h-7 bg-amber-500'></span>
             </div>
          </h2>

          <div className="grid grid-cols-7 md:grid-cols-12 gap-3  p-4 rounded-2xl">
              {streakDay.map((day) => (
                  <div
                      key={day}
                      className={`w-7 h-7 ${day % 2 === 0 & day % 5 === 0 ? "bg-amber-500" :"bg-gradient-to-t from-transparent to-main"} text-white flex items-center text-[10px] justify-center font-semibold rounded shadow`}
                  >
                      {day}
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Strak