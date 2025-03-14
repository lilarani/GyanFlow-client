

import { useSelector } from "react-redux"
import Banner from "../../components/banner/Banner";

import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';
import Impact from '../../components/Home/Impact/Impact';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';



const Home = () => {
  return (
    <div>

     <Banner/>

      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
        {/* Trasted Features */}
        <TrustedPartner />
        {/* Impact at a glance  */}
        <Impact />
      </section>

    </div>
  );
};

export default Home;
