import { useGetCourseQuery } from '@/redux/ApiCalling/apiClice';
// import Card from '@/components/Dashboard/StudentComponents/card';
import Button from '@/components/customs/Button';
import { Link } from 'react-router';
import { Card } from '@/components/ui/card';
import { CardForCourse } from '@/shared/CustomButtons/CardForCourse';

const OurAllCourse = () => {
  const { data, isLoading, isError } = useGetCourseQuery();
  const coursesData = data?.data.slice(0, 6) || [];
  // console.log(coursesData, "my data")
  return (
    <div className="w-10/12 mx-auto my-28 ">
      <div className="flex justify-center items-center text-center my-10">
        <div className="md:w-2/3">
          <h1 className="font-bold text-5xl text-center">Our Courses</h1>
          <p className="text-center text-gray-600 my-3">
            Explore a range of fitness courses designed to energize your body
            and elevate your wellness journey.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course, index) => (
          <CardForCourse course={course}></CardForCourse>
          // <Card key={index} course={course} />
        ))}
      </div>

      <div className="my-14 w-fit mx-auto text-lg">
        <Button text={'All Courses'} url={'/AllCourses'}></Button>
      </div>
    </div>
  );
};

export default OurAllCourse;
