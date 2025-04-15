import React from "react";

const AnnouncementBanner = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#162d6b] to-[#2C4C9A]
 text-white px-6 md:px-10 lg:px-[115px] py-7 mx-16 mb-16 flex items-center justify-between rounded-md gap-2"
    >
      <div className="space-y-2">
        <p className="text-xs md:text-lg lg:text-xl font-bold">
          Find all course announcement here.
        </p>

        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
          All Annoucements
        </h2>
      </div>
      <div className="w-24 md:w-28 lg:w-36">
        <img
          className="rounded-full"
          src="https://i.ibb.co.com/0pgrygHD/illustrationn-megaphone-monochrome-style-isolated-white-background-1284-38767.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
