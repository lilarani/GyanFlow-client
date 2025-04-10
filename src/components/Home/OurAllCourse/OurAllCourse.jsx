import { useGetCourseQuery } from '@/redux/ApiCalling/apiClice';
import Card from '@/components/Dashboard/StudentComponents/card';
import Button from '@/components/customs/Button';
import { Link } from 'react-router';

const OurAllCourse = () => {
  const { data, isLoading, isError } = useGetCourseQuery();
  const coursesData = data?.data || [];
  return (
    <div className="w-10/12 mx-auto my-28">
      <div className="flex justify-center items-center text-center my-10">
        <div className="md:w-2/3">
          <h2 className="font-bold  my-4 text-4xl">Our Courses</h2>
          <p>
            Explore our wide range of courses designed to boost your skills and
            career. From web development to digital marketing, we have something
            for everyone.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>

      <div className="my-14 text-3xl">
        <Button text={'All Courses'} url={'/AllCourses'}></Button>
      </div>
    </div>
  );
};

export default OurAllCourse;
