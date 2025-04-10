import React from 'react'





const ConceptualClasses = () => {


    const courses = [
        {
            title: 'React Fundamentals',
            instructor: 'John Doe',
            progress: 80,
            status: 'Ongoing',
        },
       
    ];
  return (
      <div className='w-[80%] mx-auto '> 

        {courses?.map((item)=>{
            const { title, instructor, progress, status } = item
            const progressColor = progress >= 80 ? 'bg-yellow-500' : 'bg-yellow-500';
            const statusColor =
                status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
            return(
                <div className="bg-default shadow  rounded-xl p-5 space-y-3 border hover:shadow-lg transition">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold text-white">{title}</h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${statusColor}`}>
                            {status}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600">👨‍🏫 {instructor}</p>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`${progressColor} h-2 rounded-full`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            )
        })}
      
      </div>
  )
}

export default ConceptualClasses