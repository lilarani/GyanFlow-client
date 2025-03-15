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
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import lineData from './data/lineData.json';
import doughnutData from './data/doughnutData.json';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [
          2000, 4000, 1000, 9000, 10000, 3000, 1600, 8900, 3300, 4000, 12000,
          4300, 6700,
        ],
        backgroundColor: [
          'rgba(43,63,229, 0.8)',
          'rgba(250,192,19, 0.8)',
          'rgba(253,135,135, 0.8)',
        ],
        borderRadius: 2,
      },
    ],
  };

  const options = {
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
        text: 'Profit by Month',
        font: { size: 18 },
      },
    },
  };
  return (
    <div className="wfull lg:w-10/12 mx-auto bg-[#070f25] p-2">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
        <div className="w-full md:w-[500px] h-[400px] bg-[#0b1739] p-2 rounded-lg shadow-lg">
          <Doughnut
            data={{
              labels: doughnutData.map(data => data.courseName),
              datasets: [
                {
                  label: 'Courses',
                  data: doughnutData.map(data => data.enrolledStudents),
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
        <div className="mt-10 w-full lg:w-[500px] h-[300px] bg-[#0b1739] p-5 rounded-lg shadow-lg">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full h-[500px] bg-[#0b1739] rounded-lg shadow-lg">
          <Line
            data={{
              labels: lineData.map(data => data.label),
              datasets: [
                {
                  label: 'Revenue',
                  data: lineData.map(data => data.revenue),
                  backgroundColor: '#4CAF50',
                  borderColor: '#388E3C',
                },
                {
                  label: 'Cost',
                  data: lineData.map(data => data.cost),
                  backgroundColor: '#FF9800',
                  borderColor: '#F57C00',
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
                  text: 'Revenue & Cost By Month',
                  font: { size: 18 },
                  color: 'white',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
