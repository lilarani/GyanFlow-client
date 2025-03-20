import { useSelector } from 'react-redux';
import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';
import Impact from '../../components/Home/Impact/Impact';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';
import Banner from '../../components/Home/banner/Banner';
import { useGetUsersQuery } from '../../redux/ApiCalling/apiClice';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  // let {data , isLoading , isError} = useGetUsersQuery();
  // // isLoading ? console.log(isLoading) :  console.log(data)
  // if(isLoading){
  //   console.log("loading data" , isLoading)
  // }else if(isError){
  //   console.log(isError)
  // }else{
  //   console.log(data)
  // }

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
