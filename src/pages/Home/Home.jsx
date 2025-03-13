
import React from "react";
import FeaturesSectionHomePage from "../../components/FeaturesSectionHomePage";
import Impact from "../../components/Home/Impact/Impact";


import { useSelector } from "react-redux"
import TrustedPartner from "../../components/TrustedPartner/TrustedPartner";

import React from 'react';
import FeaturesSectionHomePage from '../../components/FeaturesSectionHomePage';



const Home = () => {
  return (
    <div>

      <TrustedPartner />

      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>

        {/* Impact at a glance  */}
        <Impact />
      </section>

    </div>
  );
};

export default Home;
