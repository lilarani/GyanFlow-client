import { useGetCourseQuery } from '@/redux/ApiCalling/apiClice';

const Payment = () => {
  const { data, isLoading, isError } = useGetCourseQuery();
  console.log(data);
  return <div></div>;
};

export default Payment;
