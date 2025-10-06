import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { homepageImages } from "../../DATA/Images.js";

const HomepageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the slide change
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === homepageImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Set up the interval to automatically change slides
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-screen h-screen overflow-hidden relative"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background Image with Blur */}
      <div className="w-full h-full ">
        {homepageImages.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 blur-md" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Optional: Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </motion.div>
  );
};

export default HomepageSlider;
