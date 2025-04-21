import OurAchievementSection from '../../components/About/OurAchievementSection/OurAchievementSection';
import Team from './../../components/About/Team/Team';

import OurMission from '../../components/About/OurMission/OurMission';
import AboutUs from '@/components/about/About';

export default function About() {
  return (
    <div>
      {/* about section */}
      <AboutUs />

      {/* our achiement section */}
      <OurAchievementSection></OurAchievementSection>

      {/* Our Mission section */}
      <OurMission></OurMission>

      {/* Team section */}
      <Team></Team>
    </div>
  );
}
