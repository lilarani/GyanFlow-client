import Announcement from "@/components/Dashboard/StudentComponents/Announcement";
import AnnouncementBanner from "@/components/Dashboard/StudentComponents/AnnouncementBanner";
import React from "react";

const CourseAnnouncement = () => {
  return (
    <div className="bg-[#0F172A] pt-16 min-h-screen text-white">
      <AnnouncementBanner />
      <Announcement/>
    </div>
  );
};

export default CourseAnnouncement;
