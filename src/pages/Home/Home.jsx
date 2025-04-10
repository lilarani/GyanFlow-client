import { useSelector } from 'react-redux';
import TrustedPartner from '../../components/Home/TrustedPartner/TrustedPartner';
import Impact from '../../components/Home/Impact/Impact';
import FeaturesSectionHomePage from '../../components/Home/FeaturesSection/FeaturesSectionHomePage';
import Banner from '../../components/Home/banner/Banner';
import { useGetUsersQuery } from '../../redux/ApiCalling/apiClice';
import { load } from 'redux-localstorage-simple';
import OurAllCourse from '@/components/Home/OurAllCourse/OurAllCourse';

// import { Helmet } from 'react-helmet-async';

const Home = () => {
  console.log('my info -- ', load().authUser);
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
      {/* <Helmet>
        <title>Gyanflow</title>
      </Helmet> */}
      {/* banner section */}
      <Banner />

      <section>
        {/* features section */}
        <FeaturesSectionHomePage></FeaturesSectionHomePage>

        {/* our all courses */}
        <OurAllCourse></OurAllCourse>
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
