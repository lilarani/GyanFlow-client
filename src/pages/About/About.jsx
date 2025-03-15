
import OurAchievementSection from "../../components/About/OurAchievementSection/OurAchievementSection";
import Team from "./../../components/About/Team/Team";
import OurMission from "../../components/About/OurMission/OurMission";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import OurMission from '../../components/About/OurMission/OurMission';


export default function About() {
  return (
    <div>
      <div className="w-[100%] overflow-x-hidden bg-[red]  h-max">
        {/* <AboutUs /> */}
      </div>

      {/* our achiement section */}
      <OurAchievementSection></OurAchievementSection>

      {/* Our Mission section */}
      <OurMission></OurMission>

      {/* Team section */}
      <Team></Team>
    </div>
  );
}
