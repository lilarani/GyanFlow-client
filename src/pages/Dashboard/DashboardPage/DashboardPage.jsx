import { Outlet } from 'react-router';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar';
import './Dashboard.css';

const DashboardPage = () => {
  return (
    <div className="relative">
      <div className="flex border-2">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-3">
            <Sidebar></Sidebar>
          </div>

          <div className="col-span-9 overflow-y-scroll h-screen element">
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
