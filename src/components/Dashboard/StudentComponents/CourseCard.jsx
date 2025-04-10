import React from 'react';


const courses = [
    {
        title: 'React Fundamentals',
        instructor: 'John Doe',
        progress: 80,
        status: 'Ongoing',
    },
    {
        title: 'Tailwind CSS Mastery',
        instructor: 'Sarah Smith',
        progress: 100,
        status: 'Completed',
    },
];
const CourseCard = ({ title, instructor, progress, status }) => {
    const progressColor = progress >= 80 ? 'bg-gray-500' : 'bg-yellow-500';
    const statusColor =
        status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';

    return (
        <div className=" shadow  rounded-xl p-5 space-y-3 bg-[rgba(0,0,0,0.5)] opacity-85 hover:shadow-lg transition">
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
    );
};

export default CourseCard;
