import usaFlagImg from '../../../assets/images/dashboardNavImg/usa.png';
import ukFlagImg from '../../../assets/images/dashboardNavImg/uk.png';
import chinaFlagImg from '../../../assets/images/dashboardNavImg/china.png';
import turkeyFlagImg from '../../../assets/images/dashboardNavImg/turkey.png';
import bdFlagImg from '../../../assets/images/dashboardNavImg/bangladesh.png';

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
const DashboardNavbar = () => {
  const [openFlagModal, setOpenFlagModal] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(flags[0]);
  const [openUserModal, setOpenUserModal] = useState(false);

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

  return (
    <div className=" w-full h-24 p-4  items-center bg-gradient-to-bl to-[#080127] from-[#1a044d] text-white flex justify-between">
      <h2 className="text-xl font-semibold">Analytics</h2>
      <div className="flex gap-8 items-center">
        {/* modal */}
        <div className="relative ">
          <img
            onClick={handleModal}
            src={selectedFlag.img}
            alt="USA Flag"
            className=""
          />
          {openFlagModal && (
            <div className="bg-gradient-to-bl to-[#0b0221] from-[#080127] text-white w-60 h-56 absolute top-12 right-1 space-y-6 p-6">
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

        <MdOutlineNotificationsNone className="text-xl cursor-pointer" />
        <div className="relative">
          <img
            onClick={handleUserModal}
            src={'user Images'}
            alt="user Images"
            className="w-12 h-12 rounded-full"
          />
          {openUserModal && (
            <div className="absolute top-18 bg-gradient-to-bl to-[#0b0221] from-[#080127] text-white w-60 h-56  right-4 space-y-6 p-6">
              <div className="text-white">
                <p className="text-white">
                  <FaRegUser />
                  View Profile
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
