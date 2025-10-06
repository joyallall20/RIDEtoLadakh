import React, { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../Context/SearchContex";

const ChooseCityButton = () => {
  const { filterBikes, setFilerBikes } = useContext(SearchContext);
  const [openCityButton, setOpenCityButton] = useState(false);
  const selectCityRef = useRef(null);

  const selectCity = (newCity) => {
    setFilerBikes({ ...filterBikes, city: newCity });
    setOpenCityButton(false);
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectCityRef.current && !selectCityRef.current.contains(e.target)) {
        setOpenCityButton(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpenCityButton(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const cities = ["Delhi", "Chandigarh", "Dehradun"];

  return (
    <div className="relative inline-block text-left" ref={selectCityRef}>
      <button
        onClick={() => setOpenCityButton((prev) => !prev)}
        className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-300"
      >
        {filterBikes?.city || "Select City"}
      </button>

      {openCityButton && (
        <div className="absolute mt-2 w-40 bg-white/90 rounded-xl shadow-lg text-gray-800 backdrop-blur-md z-30">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => selectCity(city)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChooseCityButton;
