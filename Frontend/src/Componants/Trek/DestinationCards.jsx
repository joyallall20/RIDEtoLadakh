// DestinationCards.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const DestinationCards = ({ video, speed = 1, enableParallax = true ,children }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to Y translation
  const amplitude = 150;
  const rawY = useTransform(scrollYProgress, [0, 1], [amplitude * speed, -amplitude * speed]);

  // Make movement smooth with spring
  const y = useSpring(rawY, {
    stiffness: 60,   // lower = smoother
    damping: 20,     // higher = less bounce
    mass: 0.5,       // tweak for responsiveness
  });

  // Video hover control
  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y }} // now smooth scrolling
      whileHover={{ scale: 1.03 }}
      className="relative w-[425px] h-[500px] overflow-hidden shadow-2xl cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video}
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div >
            {children}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DestinationCards;
