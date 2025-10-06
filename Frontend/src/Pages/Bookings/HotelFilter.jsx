import React, { useContext, useState } from 'react';
import { SearchContext } from '../../Context/SearchContex';
import { FunnelX, FunnelPlus, Search } from 'lucide-react';
import { allAmenities } from '../../DATA/amenities.js';

const HotelFilter = () => {
  const { searchHotel, setSearchHotel, filterHotel, setFilterHotel } = useContext(SearchContext);
  const [openFilter, setOpenFilter] = useState(false);

  // Ensure price array exists
  const priceRange = filterHotel.price || [500, 5000];

  // Change location
  const handleChangeLocation = (location) => {
    setFilterHotel((prev) => ({ ...prev, location }));
  };

  // Show all locations
  const handleShowAll = () => {
    setFilterHotel((prev) => ({ ...prev, location: '' }));
  };

  // Reset selected amenities
  const handleReset = () => {
    setFilterHotel((prev) => ({ ...prev, amenities: [] }));
  };

  // Handle multi-select amenities
  const handleAmenities = (amenity) => {
    setFilterHotel((prev) => {
      const current = prev.amenities || [];
      if (current.includes(amenity)) {
        return { ...prev, amenities: current.filter((a) => a !== amenity) };
      } else {
        return { ...prev, amenities: [...current, amenity] };
      }
    });
  };

  // Handle price slider change
  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);
    if (type === 'min') {
      setFilterHotel((prev) => ({
        ...prev,
        price: [value, prev.price ? prev.price[1] : 5000],
      }));
    } else {
      setFilterHotel((prev) => ({
        ...prev,
        price: [prev.price ? prev.price[0] : 500, value],
      }));
    }
  };

  return (
    <div className="w-full max-w-7xl mt-3 mx-auto px-4">
      <div className="flex gap-2 items-center">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search Hotel"
            className="h-12 w-full mt-2 text-gray-700 border-2 border-gray-300 px-4 rounded-xl focus:outline-none  focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 shadow-sm"
            value={searchHotel}
            onChange={(e) => setSearchHotel(e.target.value)}
          />
        </div>
        <button
          className="h-12 w-12 mt-2 bg-teal-500 text-white border-2 border-teal-500 rounded-xl hover:bg-teal-600 hover:border-teal-600 transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center"
          onClick={() => console.log('Searching:', searchHotel)}
        >
          <Search className="w-5 h-5" />
        </button>

        <button
          className="h-12 w-12 mt-2 bg-white text-teal-600 border-2 border-teal-500 rounded-xl cursor-pointer hover:bg-teal-50 transition-all duration-200 shadow-md flex items-center justify-center"
          onClick={() => setOpenFilter(!openFilter)}
        >
          {openFilter ? (
            <FunnelX className="w-5 h-5" />
          ) : (
            <FunnelPlus className="w-5 h-5" />
          )}
        </button>
      </div>

      {openFilter && (
        <div className="w-full bg-white cursor-pointer rounded-2xl p-6 mt-4 shadow-xl border border-gray-200">
          {/* Destinations */}
          <div className="mb-6">
            <p className="font-bold text-lg text-gray-800 mb-3">Destinations</p>
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  filterHotel.location === '' 
                    ? 'bg-teal-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={handleShowAll}
              >
                All Locations
              </button>

              {['Leh', 'Nubra Vally', 'Pangong Tso', 'Kargil'].map((city) => (
                <button
                  key={city}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    filterHotel.location === city 
                      ? 'bg-teal-500 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleChangeLocation(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Amenities */}
          <div className="mb-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all duration-200 shadow-md"
              onClick={handleReset}
            >
              Reset Amenities
            </button>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <p className="font-bold text-lg text-gray-800 mb-3">Amenities</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-h-60 overflow-y-auto p-2">
              {allAmenities.map((amenity) => (
                <div
                  key={amenity}
                  onClick={() => handleAmenities(amenity)}
                  className={`px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 text-center text-sm font-medium border-2 ${
                    filterHotel.amenities?.includes(amenity)
                      ? 'bg-teal-500 text-white border-teal-500 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:bg-teal-50'
                  }`}
                >
                  {amenity}  
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-lg text-gray-800 mb-4">Price Range</p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-lg border border-gray-300 min-w-16 text-center">
                ₹{priceRange[0]}
              </span>
              <div className="flex-1">
                <input
                  type="range"
                  min={500}
                  max={4000}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-600 transition-colors"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-lg border border-gray-300 min-w-16 text-center">
                ₹{priceRange[1]}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelFilter;