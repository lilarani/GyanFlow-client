import Button from '@/components/customs/Button';
import { useGetFeaturesCourseDetailsQuery } from '@/redux/ApiCalling/apiClice';
import { useParams } from 'react-router';

const FeaturesCourseDetails = () => {
  const { id } = useParams();
  const { data } = useGetFeaturesCourseDetailsQuery(id);

  console.log(data);
  return (
    <div className="w-10/12 mx-auto my-shadow my-16 p-8 gap-8 grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <img src={data?.data?.thumbnail} alt="" />
      </div>
      <div className="">
        <div className="justify-between flex">
          <h2 className="text-lg md:text-2xl font-bold">
            <span className="font-semibold">{data?.data?.title}</span>
          </h2>
          <button className="text-xs font-bold px-6 py-1 rounded-full bg-blue-200 my-shadow">
            <span className="font-semibold">{data?.data?.status}</span>
          </button>
        </div>
        <div className="flex justify-between border-b border-blue-200 pt-3">
          <h2 className="text-base font-bold">
            Batch: <span className="font-semibold">{data?.data?.batch}</span>
          </h2>
          <p className="text-base font-bold ">
            Duration :{' '}
            <span className="font-semibold">
              {' '}
              {data?.data?.totalDuration} Months
            </span>
          </p>
        </div>

        <p className="text-lg font-bold">
          Price: <span className="font-semibold">${data?.data?.price}</span>
        </p>

        <p className="text-base font-bold ">
          Description :{' '}
          <span className="font-normal ">{data?.data?.description}</span>
        </p>

        <Button text={'Enroll Now'}></Button>
      </div>
    </div>
  );
};

export default FeaturesCourseDetails;
