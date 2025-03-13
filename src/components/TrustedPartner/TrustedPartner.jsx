import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// import images

import imageOne from "../../assets/Home/TrustedPartner/Apple.png";
import image2 from "../../assets/Home/TrustedPartner/Gucci.jpg";
import image3 from "../../assets/Home/TrustedPartner/cocacola.png";
import image4 from "../../assets/Home/TrustedPartner/samsung.png";
import image5 from "../../assets/Home/TrustedPartner/unilever.png";

export default function TrustedPartner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imageOne, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="w-full pt-10">
        <h1 className="text-4xl text-center">Our trusted partner </h1>
        <div className="relative w-2/3 h-[300px] overflow-hidden flex items-center justify-center mx-auto">
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex gap-16"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
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
