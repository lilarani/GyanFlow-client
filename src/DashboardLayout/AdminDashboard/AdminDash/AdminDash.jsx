import StatisticsTable from '@/components/Dashboard/StatisticsTable/StatisticsTable';
import Statistics from './../../../components/Dashboard/AdminComponents/Statistics/Statistics';

const AdminDash = () => {
  return (
    <div>
      {/* statistics */}
      <Statistics></Statistics>
      <StatisticsTable />
    </div>
  );
};

export default AdminDash;
