import { useSelector } from 'react-redux';
import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';
import Impact from '../../components/Home/Impact/Impact';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';
import Team from '../../components/About/Team/Team';

import Banner from '../../components/Home/banner/Banner';
import OurMission from '../../components/OurMission/OurMission';

import About from '../../components/Home/about/About';

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />

      <section>
        {/* features section */}
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
        {/* Trasted Features */}
        <TrustedPartner />
        <About />
        {/* Impact at a glance  */}
        <Impact />
      </section>
    </div>
  );
};

export default Home;
