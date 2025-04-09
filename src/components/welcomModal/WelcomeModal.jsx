import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../customs/Button';
import image from '../../assets/images/eid.png';
import image1 from '../../assets/images/eid1.png';

const WelcomeModal = ({ open, setOpen }) => {
  const slides = [
    {
      id: 1,
      text: 'Eid Offer: 50% Off on All Courses!',
      bg: ' bg-gradient-to-r from-[#000201] to-transparent',
      img: image,
    },
    {
      id: 2,
      text: 'Enroll Now & Get Exclusive Eid Gifts!',
      bg: ' bg-gradient-to-r from-yellow-500 to-transparent',
      img: image,
    },
    {
      id: 3,
      text: 'Limited Time Eid Discount: Join Today!',
      bg: 'bg-gradient-to-r from-red-500 to-transparent',
      img: image,
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!open) return null;

  return (
    <div className="transition-all duration-1000 fixed w-full h-screen bg-[rgba(0,0,0,0.7)] top-0 z-[100] text-white flex justify-center items-center ">
      <div className="w-[100%] h-[100%] mx-auto flex justify-center items-center relative">
        <div className="w-[90%] md:w-[70%] h-[90%] md:h-[60%] mx-auto bg-[#0b1739] text-black rounded-lg shadow-lg flex flex-col justify-center items-center overflow-hidden  ">
          <div className="w-full flex justify-center items-center    sticky  p-5  ">
            <h1 className="text-white text-3xl   first-letter:text-yellow-500 first-letter:font-bold">
              Eid Mubarak
            </h1>
            <button
              className="bg-red-500 absolute m-5 px-4 py-2 rounded-full cursor-pointer text-white right-[8px] top-[-60px]  flex justify-center items-center"
              onClick={() => setOpen(false)}
            >
              x
            </button>
          </div>

          {slides[current] && (
            <motion.div
              // ${slides[current].bg}
              key={slides[current].id}
              className={`h- w-[100%]  flex flex-col items-center justify-center  font-bold  
                            
                                `}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`flex  justify-center items-center gap-4  w-full h-full relative  flex-col  md:flex-row`}
              >
                <img
                  src={slides[current]?.img}
                  alt=""
                  className="w-[500px]  h-[250px] object-cover rounded"
                />
                <div className="flex gap-3  flex-col">
                  <h1 className="text-white text-3xl">
                    {slides[current].text}
                  </h1>
                  <h1 className="text-white text-[14px]">
                    {slides[current].text}
                  </h1>
                  <div className="w-max">
                    <Button text="Enroll Now" url="/enroll" />
                  </div>
                </div>
                <img
                  src={image1}
                  alt=""
                  className="absolute bottom-[-200px]   w-[300px] h-[300px] rotate-45  right-[-70px] -z-0"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
