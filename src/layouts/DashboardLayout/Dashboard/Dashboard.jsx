import { Outlet } from 'react-router';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="relative">
      <div className="flex ">
        <div className="lg:grid grid-cols-12 w-full">
          <div className="col-span-3 hidden lg:block">
            <Sidebar></Sidebar>
          </div>

          <div className="col-span-9 overflow-y-scroll h-screen element">
            <div className="hidden md:block">
              <DashboardNavbar navTitle={'Analytics'}></DashboardNavbar>
            </div>
            <div className="md:hidden sticky top-0 lg:relative z-50">
              <DashboardNavbar></DashboardNavbar>
            </div>

            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
