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
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
const DashboardNavbar = ({ navTitle }) => {
  const [openFlagModal, setOpenFlagModal] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(flags[0]);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openSiderbar, setOpenSidebar] = useState(false);
  const { user } = useSelector(state => state.authUser);
  console.log(user);

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

  //
  const handleSidebar = () => {
    setOpenSidebar(!openSiderbar);
  };

  return (
    <div className=" w-full h-20 p-4  items-center bg-gradient-to-bl to-[#080127] from-[#1a044d] text-white flex justify-between">
      <div className="text-white block lg:hidden text-2xl w-fit">
        <GiHamburgerMenu />
        <RxCross1 className="text-white" />
      </div>
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
            src={user?.photoURL}
            alt="user Images"
            className="w-12 h-12 rounded-full"
          />
          {openUserModal && (
            <div className="absolute z-50 top-18 bg-gradient-to-bl to-[#0b0221] from-[#080127] text-white w-60 h-56  right-4  p-6">
              <div className="flex gap-2 items-center border-b-[1px] border-gray-700 p-2">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User image"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white">{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>

              <div className="text-white space-y-5 mt-4">
                <Link
                  to={'/profile'}
                  className="text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <FaRegUser />
                  View Profile
                </Link>
                <Link
                  to={'#'}
                  className="text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <IoMdNotificationsOutline className="" />
                  Notification
                </Link>
                <Link
                  to={'#'}
                  className="text-base font-bold flex gap-2 items-center cursor-pointer"
                >
                  <TbHelpSquare />
                  Help Center
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
