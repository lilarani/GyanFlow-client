import { useSelector } from 'react-redux';
import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';

import React from 'react';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';

const Home = () => {
  return (
    <div>
      <TrustedPartner />
      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
      </section>
    </div>
  );
};

export default Home;
