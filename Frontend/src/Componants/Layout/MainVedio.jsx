import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const MainVideo = ({ src }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden overflow-y-hidden z-0" // Reduced z-index here
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        className="w-full h-full object-cover"
        playsInline
      />
    </motion.div>
  );
};

export default MainVideo;