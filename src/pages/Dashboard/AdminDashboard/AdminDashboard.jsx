<<<<<<< HEAD:src/pages/Dashboard/AdminDashboard/AdminDashboard.jsx
import AdminCards from '@/components/Dashboard/AdminComponents/Admincards/AdminCards';
import Statistics from '@/components/Dashboard/AdminComponents/Statistics/Statistics';
import StatisticsTable from '@/components/Dashboard/AdminComponents/StatisticsTable/StatisticsTable';
=======
import Admin4Cards from "@/components/Dashboard/AdminComponents/Admin4cards/Admin4Cards";
import Statistics from "@/components/Dashboard/AdminComponents/Statistics/Statistics";
import StatisticsTable from "@/components/Dashboard/AdminComponents/StatisticsTable/StatisticsTable";
import Courses from "@/pages/Dashboard/AdminDashboard/Courses/Courses";
>>>>>>> fb8fd609446d23230c2b036fa32b5e73ef9a6abc:src/layouts/DashboardLayout/AdminDashboard/AdminDash/AdminDash.jsx

const AdminDashboard = () => {
  return (
    <div className="bg-[#070f25]">
      <AdminCards></AdminCards>
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

export default AdminDashboard;
