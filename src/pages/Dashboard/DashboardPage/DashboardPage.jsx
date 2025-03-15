import { Outlet } from 'react-router';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <DashboardNavbar></DashboardNavbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardPage;
