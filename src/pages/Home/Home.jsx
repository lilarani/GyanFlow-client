import React from "react";
import FeaturesSectionHomePage from "../../components/FeaturesSectionHomePage";
import Impact from "../../components/Home/Impact/Impact";

const Home = () => {
  return (
    <div>
      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>

        {/* Impact at a glance  */}
        <Impact />
      </section>
    </div>
  );
};

export default Home;
