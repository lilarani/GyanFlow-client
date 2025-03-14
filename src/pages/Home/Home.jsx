import { useSelector } from "react-redux";
import TrustedPartner from "../../components/Home/TrustedPartner/TrustedPartner";
import Impact from "../../components/Home/Impact/Impact";
import FeaturesSectionHomePage from "../../components/Home/FeaturesSection/FeaturesSectionHomePage";
import Team from "../../components/About/Team/Team";

const Home = () => {
  return (
    <div>
      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
        {/* Trasted Feature */}
        <TrustedPartner />
        {/* Impact at a glance  */}
        <Impact />
      </section>
    </div>
  );
};

export default Home;
