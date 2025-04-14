import usaFlagImg from '../../../assets/images/dashboardNavImg/usa.png';
import ukFlagImg from '../../../assets/images/dashboardNavImg/uk.png';
import chinaFlagImg from '../../../assets/images/dashboardNavImg/china.png';
import turkeyFlagImg from '../../../assets/images/dashboardNavImg/turkey.png';
import bdFlagImg from '../../../assets/images/dashboardNavImg/bangladesh.png';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TbHelpSquare } from 'react-icons/tb';
import { RxCross1 } from 'react-icons/rx';

const flags = [
  { img: usaFlagImg, name: 'English(US)', code: 'en-Us' },
  { img: ukFlagImg, name: 'English', code: 'eng' },
  { img: bdFlagImg, name: 'বাংলা', code: 'ban' },
  { img: chinaFlagImg, name: '中國', code: 'zh' },
  { img: turkeyFlagImg, name: 'Türkice', code: 'tr' },
];

import { MdOutlineNotificationsNone } from 'react-icons/md';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../Sidebar/Sidebar';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase.config';
import { toast } from 'react-toastify';
import { setUser } from '@/redux/authSlice';

const DashboardNavbar = ({ navTitle }) => {
  const [openFlagModal, setOpenFlagModal] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(flags[0]);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openSiderbar, setOpenSidebar] = useState(false);
  const { user, loader } = useSelector(state => state.authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle flag modal function
  const handleModal = () => {
    setOpenFlagModal(!openFlagModal);
  };

  // flag changes function
  const handleFlagChanges = flag => {
    setSelectedFlag(flag);
    setOpenFlagModal(false);
  };

  // user modal
  const handleUserModal = () => {
    setOpenUserModal(!openUserModal);
  };

  // handel sidebar
  const handleSidebar = () => {
    setOpenSidebar(!openSiderbar);
  };

  // log-out funtion
  let signOutUser = () => {
    signOut(auth).then(async () => {
      dispatch(setUser(null));
      navigate('/login');
      toast('logout user');
    });
  };

  return (
    <div className=" w-full h-20 p-4  items-center bg-gradient-to-bl to-[#080127] from-[#0F172A] text-white flex justify-between relative">
      <div
        onClick={handleSidebar}
        className="text-white block lg:hidden text-2xl w-fit"
      >
        {openSiderbar ? (
          <RxCross1 className="text-white" />
        ) : (
          <GiHamburgerMenu />
        )}
      </div>
      {openSiderbar && (
        <div className="absolute top-20 z-50">
          <Sidebar></Sidebar>
        </div>
      )}
      <h2 className="text-base md:text-xl font-semibold">{navTitle}</h2>
      <div className="flex gap-8 items-center">
        {/* modal */}

        <div className="relative ">
          <img
            onClick={handleModal}
            src={selectedFlag.img}
            alt="USA Flag"
            className=" md:w-7"
          />
          {openFlagModal && (
            <div className="bg-gradient-to-bl z-50 to-[#0b0221] from-[#080127] text-white w-60 h-56 absolute top-12 right-1 space-y-6 p-6">
              {/* usa flag */}
              {flags.map((flag, index) => (
                <div
                  key={index}
                  onClick={() => handleFlagChanges(flag)}
                  className="flex justify-between cursor-pointer text-white"
                >
                  <div className="flex gap-2">
                    <img src={flag.img} alt={flag.name} />
                    <h2>{flag.name}</h2>
                  </div>
                  <p>{flag.code}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <MdOutlineNotificationsNone className="text-2xl cursor-pointer" />
        <div className="relative">
          <img
            onClick={handleUserModal}
            src={user?.picture}
            alt="user Images"
            className="w-12 h-12 rounded-full"
          />
          {openUserModal && (
            <div className="absolute z-50 top-18 bg-white/10 backdrop-blur-2xl shadow-xl p-8 border border-white/20 text-white min-w-sm md:min-w-md right-4 ">
              <div className="flex gap-2 items-center border-b-[1px] border-gray-700 p-2">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.picture}
                  alt="User image"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white">{user?.name}</p>
                  <p>{user?.email}</p>
                </div>
              </div>

              <div className="text-white space-y-5 mt-4">
                <Link
                  to={'/profile'}
                  className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <FaRegUser />
                  View Profile
                </Link>
                <Link
                  to={'#'}
                  className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <IoMdNotificationsOutline className="" />
                  Notification
                </Link>
                <Link
                  to={'#'}
                  className="text-sm md:text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <TbHelpSquare />
                  Help Center
                </Link>

                <button
                  onClick={signOutUser}
                  className="text-sm md:text-base  border-blue-300 text-blue-300 border-[1px] cursor-pointer font-bold py-1 px-4 hover:bg-[#ffffff44] hover:text-white hover:border-none"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
