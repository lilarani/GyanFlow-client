import Statistics from '@/components/Dashboard/AdminComponents/Statistics/Statistics';
import StatisticsTable from '@/components/Dashboard/AdminComponents/StatisticsTable/StatisticsTable';

const AdminDash = () => {
  return (
    <div className="bg-[#070f25]">
      {/* statistics */}
      <div className="py-20">
        <Statistics></Statistics>
      </div>
      <div className="pt-20 ">
        <StatisticsTable></StatisticsTable>
      </div>
    </div>
  );
};

export default AdminDash;
