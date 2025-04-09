import Button from '../customs/Button';

import Title from '../customs/Title';
import './about.css';

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/656716da09ca22f2f5e147d1/658567648a22c2f261087cc0_1-1.jpeg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay ============================*/}
      <div className="absolute bg-default w-full h-full top-0 left-0 opacity-80 transition-all hover:opacity-90 duration-500"></div>

      <div className="relative text-center text-white px-6 md:px-12 max-w-3xl flex justify-center items-center flex-col gap-2">
        <Title text="About Us" />
        <p className="mt-4 text-md">
          Explore a world of learning opportunities with our platform.
        </p>
        <p className="mt-4 text-md">
          Join us today and start your journey towards mastering new skills!
        </p>
        <Button text="Explore Courses" url="/dashboard/studentDashboard" />

        {/*  Circles =================== */}
        <div className="absolute top-[-80px] left-[200px]">
          <div className="animate-scale w-[200px] h-[200px] border-2   rounded-full flex justify-center items-center">
            <div className="w-[100px] h-[100px] border rounded-full child_animation"></div>
          </div>
        </div>

        {/* text animation =========================================== */}
        <div className="row">
          <div className="box">G</div>
          <div className="box">Y</div>
          <div className="box">A</div>
          <div className="box">N</div>
          <div className="box">F</div>
          <div className="box">L</div>
          <div className="box">0</div>
          <div className="box">W</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
