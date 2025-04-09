import { useGetFeaturesCourseDetailsQuery } from '@/redux/ApiCalling/apiClice';
import { useParams } from 'react-router';

const FeaturesCourseDetails = () => {
  const { id } = useParams();
  const { data } = useGetFeaturesCourseDetailsQuery(id);
  console.log(data);
  return (
    <div className="w-10/12 mx-auto p-8 gap-8 grid grid-cols-1 md:grid-cols-2">
      <div className="my-shadow">
        <img src={data?.data?.thumbnail} alt="" />
      </div>
      <div>
        <h2 className="text-lg font-bold">
          Title: <span className="font-semibold">{data?.data?.title}</span>
        </h2>
        <h2 className="text-lg font-bold">
          Price: <span className="font-semibold">{data?.data?.price}</span>
        </h2>
      </div>
    </div>
  );
};

export default FeaturesCourseDetails;
