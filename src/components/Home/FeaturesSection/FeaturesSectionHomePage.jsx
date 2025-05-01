import { useGetFeaturesCourseQuery } from '@/redux/ApiCalling/apiClice';
import { CardForCourse } from '@/shared/CustomButtons/CardForCourse';

export default function FeaturesSectionHomePage() {
  const { data, isLoading, error } = useGetFeaturesCourseQuery();
  // console.log(data);

  return (
    <div className="w-10/12 mx-auto my-28">
      <div>
        <div className="flex justify-center items-center text-center my-10">
          <div className="md:w-2/3">
            <h2 className="font-bold  my-4 text-xl lg:text-5xl">
              Featured Courses
            </h2>
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
          <CardForCourse course={course}></CardForCourse>
        ))}
      </div>
    </div>
  );
}
