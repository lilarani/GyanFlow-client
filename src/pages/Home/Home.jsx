import { useSelector } from 'react-redux';
import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';
import Impact from '../../components/Home/Impact/Impact';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';
import Banner from '../../components/Home/banner/Banner';
import { Helmet } from 'react-helmet-async';
// import About from '../../components/about/About';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gyanflow</title>
      </Helmet>
      {/* banner section */}
      <Banner />

      <section>
        {/* features section */}
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
        {/* Trasted Features */}
        <TrustedPartner />
        {/* <About/> */}
        {/* Impact at a glance  */}
        <Impact />
      </section>
    </div>
  );
};

export default Home;
