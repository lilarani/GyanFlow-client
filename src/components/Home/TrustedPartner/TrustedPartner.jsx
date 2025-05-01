import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// import images

import image1 from '../../../assets/Home/TrustedPartner/envato.png';
import image2 from '../../../assets/Home/TrustedPartner/ostad.png';
import image3 from '../../../assets/Home/TrustedPartner/ph.jfif';
import image4 from '../../../assets/Home/TrustedPartner/samsung.png';
import image5 from '../../../assets/Home/TrustedPartner/10min.webp';
import image6 from '../../../assets/Home/TrustedPartner/upwork.png';
import image8 from '../../../assets/Home/TrustedPartner/dribble.webp';
import image9 from '../../../assets/Home/TrustedPartner/lws.jfif';

export default function TrustedPartner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,

    image8,
    image9,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="w-full md:my-28">
        <h1 className="font-bold text-xl md:text-5xl text-center">
          Our trusted partners
        </h1>
        <p className="text-center text-gray-600 my-3">
          Collaborating with reliable partners to ensure quality, innovation,
          and success.
        </p>
        <div className="relative w-10/12 h-[200px] overflow-hidden flex items-center justify-center mx-auto">
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex gap-16"
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {/* Show all images once */}
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-auto h-[80px] object-cover object-top"
                  alt={`Partner ${i + 1}`}
                />
              ))}

              {/* Duplicate images to create seamless loop */}
              {images.map((src, i) => (
                <img
                  key={`dup-${i}`}
                  src={src}
                  className="w-auto h-[80px] object-cover object-top"
                  alt={`Partner ${i + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
