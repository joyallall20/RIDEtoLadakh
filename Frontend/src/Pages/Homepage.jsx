import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Componants/Layout/Navbar";
import DestinationCards from "../Componants/Trek/DestinationCards";
import Footer from "../Componants/Layout/Footer";
import MainVedio from "../Componants/Layout/MainVedio";
import HomepageHotelSlider from "../Componants/Layout/HomepageHotelSliders";
import HompageSelectButton from "../Componants/Buttons/HompageSelectButton";

// Import main image/video from src
import LadakhMain1 from "../assets/images/LadakhMain1.webm";

const Homepage = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Main Video Background */}
        <MainVedio className="overflow-x-hidden" src={LadakhMain1} />

        {/* Navbar and Content Layer */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="absolute top-55 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-20">
          <h1
            style={{ fontFamily: "'poppins', serif" }}
            className="text-4xl sm:text-5xl md:text-7xl text-white font-bold"
          >
            Adventure Awaits in the Land of High Passes
          </h1>
        </div>

        {/* Buttons Layer */}
        <HompageSelectButton />
      </div>

      {/* Destinations Section */}
      <div className="grid text-center justify-center text-black mt-4 mb-4">
        <p
          style={{ fontFamily: "'poppins', serif" }}
          className="text-4xl text-teal-700"
        >
          Choose Your
        </p>
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-9xl"
        >
          DESTINATIONS
        </h1>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid md:grid-cols-3 gap-x-2 gap-y-2 mt-10 mb-10 px-4">
        {/* Left Column */}
        <div className="flex flex-col gap-2">
          <DestinationCards video="/videos/NubravallyCut.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Nubra Valley</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Desert oasis</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/Thiskey.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Thiksey Monastery</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Spiritual majesty</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/LEH2.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Leh</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Explore Culture</p>
            </div>
          </DestinationCards>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-2">
          <DestinationCards video="/videos/pLake.mp4" speed={0.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Pangong Tso</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Serene reflections</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/KhardunglaPass.mp4" speed={0.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Khardung La</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Conquer altitude</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/TsoMoriLake1.mp4" speed={0.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Tso Moriri</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Mountain tranquility</p>
            </div>
          </DestinationCards>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2">
          <DestinationCards video="/videos/Hemis.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Hemis Monastery</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Ancient rituals</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/Kargil.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Kargil</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Historic bravery</p>
            </div>
          </DestinationCards>

          <DestinationCards video="/videos/STUPA.mp4" speed={1.5}>
            <div className="flex flex-col text-center">
              <h1 className="text-white text-5xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Shanti Stupa</h1>
              <p className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Find peace</p>
            </div>
          </DestinationCards>
        </div>
      </div>

      <HomepageHotelSlider />
      <Footer />
    </>
  );
};

export default Homepage;
