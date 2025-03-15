import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../components/Sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <DashboardNavbar></DashboardNavbar>
      </div>
    </div>
  );
};

export default DashboardPage;
