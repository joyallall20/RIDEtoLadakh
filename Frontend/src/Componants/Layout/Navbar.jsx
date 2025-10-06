import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContex } from "../../Context/LoginContex";
import { User, Star, Settings, LogOut,   } from "lucide-react";

const Navbar = () => {
  const [isDropdown, setDropdown] = useState(false);
  const { user, logout, } = useContext(LoginContex);
  const dropdownRef = useRef(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 lg:left-14 w-300 sm:left-0 border-teal-600 border-b-4 bg-white h-14 rounded-b-2xl shadow-md flex items-center justify-between px-10 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <NavLink
        to = '/'
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-black sm:text-2xl sm:left-0 cursor-pointer border-2 font-extrabold lg:text-3xl"
      >
        RIDEtoLADAKH
      </NavLink>

      {/* Links */}
      <div style={{ fontFamily: "'poppins', serif" }} className="flex gap-6 items-center relative">

        {user && (
          <NavLink to="/mybooking" className="hover:text-black  text-teal-600 transition">
            My Bookings
          </NavLink>
        )}

        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdown(!isDropdown)}
              className="text-black font-bold bg-white rounded-2xl px-3 py-1 cursor-pointer hover:bg-gray-200 transition" 
            >
             <div className="flex gap-0.5">
               
            <h3>{user?.name}</h3> 
               <User/>
             </div>
            
            </button>

            <AnimatePresence>
              {isDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50"
                >
                  <Link
                    to="/account"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <User size={18} /> My Account
                  </Link>
                  <Link
                    to="/reviews"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <Star size={18} /> Reviews
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <Settings size={18} /> Settings
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-black font-bold bg-white rounded-2xl px-3 py-1 hover:bg-black hover:text-white transition"
            >
              Login
            </NavLink>
            <NavLink to="/signup">
              <button className="px-3 py-1 bg-white hover:bg-black hover:text-white text-black font-bold rounded-2xl transition">
                Signup
              </button>
            </NavLink>
          </>
        )}

        {/* Logout Icon with hover text */}
        {user && (
          <LogOut onClick={logout} className="cursor-pointer"/>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
