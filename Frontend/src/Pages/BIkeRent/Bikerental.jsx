import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import BikeListingCard from './BikeListingCard';
import { NavLink } from 'react-router-dom';
import Bikelisting from '../../assets/images/Bikelisting.jpg'


const Bikerental = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectedCity, setSelectedCity] = useState('Select City');

  const handleClick = () => setIsOpen(!isOpen);
  const handleSelectedCity = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <NavLink
            to='/'
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-gray-800 cursor-pointer text-3xl font-bold hover:text-indigo-600 transition-colors border-2 border-black duration-300"
          >
            RIDEtoLADAKH
          </NavLink>
        </div>
      </div>

   
    <div className="hidden sm:hidden lg:block">
         <div className="block lg:h-70 lg:mt-17 mt-20 lg:ml-5 w-screen overflow">
        <img src={Bikelisting} alt="" />
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className='absolute top-16 text-9xl lg-left-7 text-white' >Find Your
           </h1>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className='absolute lg:top-47 lg:left-7 lg:text-9xl shadow:xl text-white' >
           Perfect Ride for Ladakh</h1>
       </div>
    </div>
 <br />
      {/* Bike Listings */}
    
      <div className="container mx-auto px-4 py-12">
        <BikeListingCard selectedCity={isSelectedCity === 'Select City' ? 'All' : isSelectedCity} />
      </div>
    
    </div>
  );
};

export default Bikerental;
