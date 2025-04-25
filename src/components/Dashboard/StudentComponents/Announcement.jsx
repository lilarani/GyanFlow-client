import { useGetAnnouncementQuery } from '@/redux/ApiCalling/apiClice';
import React from 'react';

const Announcement = () => {
  const { data, isLoading, isError } = useGetAnnouncementQuery();

  const announcementData = data?.data || [];
  console.log(announcementData);

  return (
    <div>
      {announcementData ? (
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
