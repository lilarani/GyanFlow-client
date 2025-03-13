
import { useSelector } from "react-redux"
import Banner from "../../components/banner/Banner";

import FeaturesSectionHomePage from '../../components/FeaturesSectionHomePage';


const Home = () => {
  return (
    <div>

     <Banner/>

      <section>
        <FeaturesSectionHomePage></FeaturesSectionHomePage>
      </section>

    </div>
  );
};

export default Home;
