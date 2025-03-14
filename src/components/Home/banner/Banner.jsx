import { Link } from 'react-router';
import './banner.css';
const Banner = () => {
  return (
    <div
      className="w-full banner overflow-hidden   h-screen flex md:justify-between items-center flex-col md:flex-row bg-opacity-25  bg-gradient-to-bl to-[#1a044d] from-[#100d1b]"
      style={{
        padding: '30px',
      }}
    >
      <div className="w-full md:w-[40%]  flex  justify-start items-start flex-col gap-6 md:gap-3  ">
        <h1
          className=" text-2xl md:text-4xl text-left "
          style={{
            fontWeight: 'bold',
          }}
        >
          Best <span className="text-blue-500">Tutoring Platform</span> for{' '}
          <br /> Home & Online Tuitions
        </h1>
        <p className=" text-white text-lg">
          <i className="fas fa-map-marker-alt"></i> Find the Right Tutor in Your
          Area
        </p>
        <Link
          to="/tutor"
          className="bg-[#0b1221] text-3xl    border-3  rounded-full  text-white "
          style={{
            padding: '10px 30px',
            margin: '20px 0px',
          }}
        >
          <i className="fas fa-search"></i> Find a tutor{' '}
        </Link>
      </div>
      <div className="w-full md:w-1/2  relative">
        <div
          className="absolute  top-[-300px]  md:top-[-200px] z-[-1] right-[-300px]   md:right-[-200px]  w-[500px]  h-[500px]   "
          style={{
            transform: 'rotate(45deg)',
          }}
        >
          <div className="relative ">
            <div className="shapeone absolute shadow  rounded-[40px] w-[400px] h-[400px] bg-[rgba(0,0,0,0.4)] opacity-40  hover:scale-[3] transition-all duration-500 "></div>

            <div className="shapetwo absolute  rounded-[30px] shadow w-[300px] h-[300px] bg-[rgba(0,0,0,0.2)]  opacity-40 hover:scale-[3] transition-all duration-500"></div>

            <div className="shapethree absolute opacity-40 rounded-[20px] shadow w-[200px] h-[200px] bg-white hover:scale-[3] transition-all duration-500 "></div>
          </div>
        </div>
        <img
          src="https://tutorsheba3.netlify.app/assets/banner1-BOT-BWkG.svg"
          className="bannerAnimation w-full h-[400px]"
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Banner;
