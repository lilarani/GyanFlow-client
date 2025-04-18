import Annoucement from "@/components/Dashboard/StudentComponents/Annoucement";
import AnnouncementBanner from "@/components/Dashboard/StudentComponents/AnnouncementBanner";
import React from "react";

const CourseAnnoucement = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen pt-16 text-white">
      <AnnouncementBanner />
      <Annoucement/>
    </div>
  );
};

export default CourseAnnoucement;
