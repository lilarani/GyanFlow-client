import { Outlet } from 'react-router';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar/DashboardNavbar';
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <div className="relative">
      {/* <div className="absolute w-full"></div> */}
      <div className="flex">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Sidebar></Sidebar>
          </div>

          <div className="col-span-9 overflow-y-scroll h-screen">
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
