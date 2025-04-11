import React from 'react'

const Progress = () => {
    const progressData = [
        {
            title: 'Assignment Finished',
            percentage: 75,
            color: 'bg-[gray]',
        },
        {
            title: 'Quiz Average',
            percentage: 82,
            color: 'bg-yellow-500',
        },
        {
            title: 'On-Time Finished',
            percentage: 90,
            color: 'bg-gray-400',
        },
    ];

  return (
      <div className="w-full  md:w-[48%] bg-default    shadow-lg rounded-2xl  p-6 space-y-6">
          <h2 className="text-2xl font-bold text-white"> Overall Progress</h2>
          {progressData.map((item, index) => (
              <div key={index}>
                  <div className="flex  justify-between mb-1">
                      <span className="text-sm font-medium text-white">{item.title}</span>
                      <span className="text-sm font-medium text-white">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                          className={`${item.color} h-3 rounded-full`}
                          style={{ width: `${item.percentage}%` }}
                      ></div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Progress