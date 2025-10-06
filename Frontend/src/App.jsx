import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/Pages/Homepage";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Hotels from "./Pages/Bookings/Hotels";
import Bikerental from "./Pages/BIkeRent/bikerental"; 

import BikeBooking from "./Pages/BIkeRent/BikeBooking";

import MyBooking from "./Pages/MyBooking";

// CONTEXT PROVIDERS
import { LoginProvider } from '../src/Context/LoginContex';
import { SearchContextProvider } from './Context/SearchContex';
import {DateSelectorProvider} from './Context/DateSelector'
import HotelBooking from "./Pages/Bookings/HotelBooking";


const App = () => {
  return (
    <LoginProvider>
      <SearchContextProvider>
        <DateSelectorProvider> {/* Use the provider, not the context object */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotelbooking/:id" element={<HotelBooking/> } />
            <Route path="/mybooking" element={<MyBooking />} />
            
          </Routes>
        </DateSelectorProvider>
      </SearchContextProvider>
    </LoginProvider>
  );
};


export default App;
