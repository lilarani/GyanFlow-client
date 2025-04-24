import { TbCoinTaka } from 'react-icons/tb';
import { SiGoogleclassroom } from 'react-icons/si';
import { Link } from 'react-router';
import CustomButtons from './CustomButtons';

export const CardForCourse = ({course}) => {
  return (
    <div
    key={course?._id}
    className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700"
  >
    <figure>
      <img
        className="rounded-t-lg w-full h-56 object-cover"
        src={course?.thumbnail}
        alt="Virtual Classroom"
      />
    </figure>
    <div className="px-4 py-3 space-y-2 flex-grow">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-2xl">{course?.title}</h2>
      </div>
      <p className="text-gray-600 mt-2">{course?.shortDescription}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Batch {course?.batch}</p>
        </div>
        <div>
          <p className="font-semibold">39 seat left</p>
        </div>
      </div>
      <hr className=" border-t-2 border-gray-300" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <TbCoinTaka className="text-xl" />
          <p className="text-base font-semibold">{course?.price}</p>
        </div>
        <div className="flex items-center gap-1">
          <SiGoogleclassroom className="text-xl" />
          <p className="text-base font-semibold">40</p>
        </div>
      </div>
    </div>

    <Link
      to={`/featuresDetails/${course?._id}`}
      className="flex justify-center mb-4"
    >
      <CustomButtons primaryText={'See Details'}></CustomButtons>
    </Link>
  </div>
  )
}
