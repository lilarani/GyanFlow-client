import 'chart.js/auto';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import {
  useCourseForInstructorQuery,
  useGetAllEnrolledCourseQuery,
  useGetCourseQuery,
  useGetStudentCourseQuery,
} from '@/redux/ApiCalling/apiClice';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const InstructorDashboardProgress = () => {
  const { data } = useGetAllEnrolledCourseQuery();
  const { data: allCourse } = useGetCourseQuery();
  const { data: ourAllCourse } = useGetCourseQuery();
  const { user } = useSelector(state => state.authUser);
  const instructorId = user?._id; // or user.id depending on your schema

  let { data: invitedCourse } = useCourseForInstructorQuery(instructorId);
  console.log(invitedCourse);

  return (
    <div className="bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E]  text-white py-12 min-h-screen ">
      <h2 className="text-xl font-semibold text-center text-gray-500">
        {' '}
        Welcome to your Dashboard!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mx-auto w-10/12">
        {/* Total Courses */}
        <div className="bg-black/30 backdrop-blur-2xl p-4 rounded-xl shadow-md border border-gray-700 w-full h-40 flex justify-center items-center flex-col  font-bold">
          <h2 className="text-gray-300 text-lg">Total Courses</h2>
          <p className="text-3xl font-semibold text-gray-400 ">
            {allCourse?.data.length}
          </p>
        </div>

        {/* Total Students Enrolled */}
        <div className="bg-black/30 p-4 rounded-xl shadow-md border border-gray-700 w-full h-40 flex justify-center items-center flex-col  font-bold">
          <h2 className="text-gray-300 text-lg">Total Students Enrolled</h2>
          <p className="text-3xl font-semibold text-gray-400">
            {data?.data.length}
          </p>
        </div>

        {/* Total Invited Courses */}
        <div className="bg-black/30 backdrop-blur-2xl p-4 rounded-xl shadow-md border border-gray-700 w-full h-40 flex justify-center items-center flex-col  font-bold">
          <h2 className="text-gray-300 text-lg">Total Invited Courses</h2>
          <p className="text-3xl font-semibold text-gray-400 ">
            {invitedCourse.length}
          </p>
        </div>
      </div>

      {/* progress chart */}
      <div className="my-16 h-[400px] bg-[#0b1739]  rounded-lg shadow-lg w-10/12 mx-auto p-4">
        <Doughnut
          data={{
            labels: ourAllCourse?.data?.map(data => data?.title),
            datasets: [
              {
                label: 'Students',
                data: ourAllCourse?.data?.map(
                  data => data?.enrolledStudents?.length || 0
                ),

                backgroundColor: [
                  'rgba(54, 162, 235, 0.8)', // Blue
                  'rgba(255, 99, 132, 0.8)', // Red
                  'rgba(255, 159, 64, 0.8)', // Orange
                  'rgba(75, 192, 192, 0.8)', // Teal
                  'rgba(153, 102, 255, 0.8)', // Purple
                  'rgba(255, 159, 223, 0.8)', // Pink
                  'rgba(255, 99, 71, 0.8)', // Tomato Red
                ],
                borderRadius: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: 'white', // Change this to the color you want
                },
              },
              title: {
                display: true,
                color: 'white',
                text: 'Courses',
                font: { size: 18 },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default InstructorDashboardProgress;
