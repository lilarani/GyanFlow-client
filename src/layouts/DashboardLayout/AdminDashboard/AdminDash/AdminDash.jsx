import Admin4Cards from "@/components/Dashboard/AdminComponents/Admin4cards/Admin4Cards";
import Statistics from "@/components/Dashboard/AdminComponents/Statistics/Statistics";
import StatisticsTable from "@/components/Dashboard/AdminComponents/StatisticsTable/StatisticsTable";
import Courses from "@/pages/Dashboard/AdminDashboard/Courses/Courses";

const AdminDash = () => {
  return (
    <div className="bg-[#070f25]">
      <Admin4Cards></Admin4Cards>
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
