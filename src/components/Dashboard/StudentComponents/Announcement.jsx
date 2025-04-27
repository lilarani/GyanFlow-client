<<<<<<< HEAD
import { useGetAnnouncementQuery } from '@/redux/ApiCalling/apiClice';
import React from 'react';
=======
import { useGetAnnouncementQuery } from "@/redux/ApiCalling/apiClice";
import React from "react";
import './Announcement.css';
>>>>>>> 70bb6f4571e7ac80c53eaf52424db245391edbf4

const Announcement = () => {
  const { data, isLoading, isError } = useGetAnnouncementQuery();

  const announcementData = data?.data || [];
  console.log(announcementData);

  return (
    <div>
      {announcementData ? (
<<<<<<< HEAD
        announcementData.map(announce => {
          const date = new Date(Number(announce?.date));
          const formattedDate = date.toLocaleString(); // or toLocaleDateString()

          return (
            <div
              key={announce?.id} // add a key if you have an id
              className="px-6 md:px-10 lg:px-[115px] py-7 mx-16 mb-16 flex items-center rounded-md gap-6"
            >
              <div className="w-24 md:w-36 lg:w-56">
                <img
                  src="https://t4.ftcdn.net/jpg/04/26/04/61/360_F_426046170_Bshw7CccMbBLIFd9PCdLdKv3XRSkgFMh.jpg"
                  alt=""
                />
=======
        announcementData.map((announce) => 
          {
            const date = new Date(Number(announce?.date));
            const formattedDate = date.toLocaleString(); // or toLocaleDateString()
      
            return (
              <div
                key={announce?.id} // add a key if you have an id
                className="mx-16 mb-16 flex flex-col md:flex-row items-center gap-6 rounded-md bg-blue-950"
              >
                <div className="md:w-2/5">
                  <img
                    src={announce?.thumbnail}
                    className="h-56 w-full clip-diagonal"
                    alt=""
                  />
                </div>
                <div className="space-y-3 md:w-3/5 pr-10">
                  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">{announce?.title}</h1>
                  <p className="text-xs md:text-base lg:text-base font-bold">{announce?.description}</p>
                  <p className="text-sm text-gray-400">{formattedDate}</p>
                </div>
>>>>>>> 70bb6f4571e7ac80c53eaf52424db245391edbf4
              </div>
              <div className="space-y-3">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
                  {announce?.title}
                </h1>
                <p className="text-xs md:text-base lg:text-lg font-bold">
                  {announce?.description}
                </p>
                <p className="text-sm text-gray-400">{formattedDate}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
          No announcement found
        </p>
      )}
    </div>
  );
};

export default Announcement;
