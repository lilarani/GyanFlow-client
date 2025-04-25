import Announcement from "@/components/Dashboard/StudentComponents/Announcement";
import AnnouncementBanner from "@/components/Dashboard/StudentComponents/AnnouncementBanner";
import React from "react";

const CourseAnnouncement = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen pt-16 text-white">
      <AnnouncementBanner />
      <Announcement/>
    </div>
  );
};

export default CourseAnnouncement;
