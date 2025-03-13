
import { useSelector } from "react-redux"
import TrustedPartner from "../../components/TrustedPartner/TrustedPartner";

import React from 'react';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';


const Home = () => {
  return (
    <div>

      Hello i am {user?.displayName} , This is home pages
      <TrustedPartner />

      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
      </section>

    </div>
  );
};

export default Home;
