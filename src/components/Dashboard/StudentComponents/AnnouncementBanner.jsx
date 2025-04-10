import React from "react";

const AnnouncementBanner = () => {
  return (
    <div className="text-white px-[115px] py-7 m-10 flex items-center justify-between gap-10 bg-[#633974] rounded-md">
      <div className="space-y-2">
        <p className="text-xl font-bold">Find all course announcement here.</p>

        <h2 className="text-3xl font-bold">All Annoucements</h2>
      </div>
      <div className="w-36">
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
