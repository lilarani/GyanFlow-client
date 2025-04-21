import { TbCoinTaka } from 'react-icons/tb';
import CustomButtons from '../../../shared/CustomButtons/CustomButtons';
import { SiGoogleclassroom } from 'react-icons/si';
import { useGetFeaturesCourseQuery } from '@/redux/ApiCalling/apiClice';
import { Link } from 'react-router';

export default function FeaturesSectionHomePage() {
  const { data, isLoading, error } = useGetFeaturesCourseQuery();
  // console.log(data);

  return (
    <div className="w-10/12 mx-auto my-28">
      <div>
        <div className="flex justify-center items-center text-center my-10">
          <div className="md:w-2/3">
            <h2 className="font-bold  my-4 text-5xl">Featured Courses</h2>
            <p className="my-4 text-base">
              Explore professional courses crafted to enhance your expertise.
              Achieve your career goals with comprehensive, industry-relevant
              learning.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map(course => (
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
        ))}
      </div>
    </div>
  );
}
