import React from 'react';
import OurAchievementSection from '../../components/About/OurAchievementSection/OurAchievementSection';
import Team from './../../components/About/Team/Team';

export default function About() {
  return (
    <div>
      <OurAchievementSection></OurAchievementSection>

      {/* Team section */}
      <Team></Team>
    </div>
  );
}
