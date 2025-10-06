import React, { useState } from 'react';
import Hotel from '../../assets/Destinations/Hotels.jpg';
import Footer from '../../Componants/Layout/Footer'
import HotelCard from './HotelCard';
import { useNavigate } from 'react-router-dom';
import HotelFilter from './HotelFilter';
import DateSelector from '../../Componants/Layout/DateSelector';


const Hotels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const  navigate = useNavigate()


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClose =()=>{
    setIsOpen(isOpen === false)

  }

  const hotelDestinations = [
    { name: "Leh", link: "#leh" },
    { name: "Nubra Valley", link: "#nubra" },
    { name: "Pangong Tso", link: "#pangong" },
    { name: "Kargil", link: "#kargil" },
  ];

  return (
    <div className="">
     
     <DateSelector/>
      <div className="block mt-[100px] lg:mt-10 relative w-screen overflow-hidden">
        {/* Background Image */}
        <img 
          src={Hotel} 
          alt="Ladakh Hotel" 
          className="w-full h-80 object-cover z-0" 
        />
        
        {/* Page Heading */}
        <div className="absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
          <h1 
            style={{ fontFamily: "'Playfair Display', serif" }} 
            className='text-white text-6xl md:text-8xl lg:text-9xl'
          >
            LADAKH
          </h1>
          <h2 className='text-white text-3xl'>HOTELS</h2>
        </div>
      

      </div>
      <HotelFilter className=" fixed"/>
      <br />
      <HotelCard  />
       <Footer/>
    </div>
  );
};

export default Hotels;
