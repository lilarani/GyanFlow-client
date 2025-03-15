import React from "react";
import OurAchievementSection from "../../components/About/OurAchievementSection/OurAchievementSection";
import Team from "./../../components/About/Team/Team";
import OurMission from "../../components/About/OurMission/OurMission";
import Statistics from "../../components/Dashboard/Statistics/Statistics";

export default function About() {
  return (
    <div>
      {/*  */}

      {/* our achiement section */}
      <OurAchievementSection></OurAchievementSection>

      {/* Our Mission section */}
      <OurMission></OurMission>

      {/* Team section */}
      <Team></Team>
    </div>
  );
}
