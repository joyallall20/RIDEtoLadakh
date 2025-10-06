import React from 'react';
import { toast } from 'react-hot-toast';
import { Building2, Search, Locate, Funnel } from 'lucide-react';
import { BikeListing } from '../../DATA/BikeListing';

const SidebarFilter = ({
  search,
  setSearch,
  selectedCity,
  setSelectedCity,
  maxEnginePower,
  setMaxEnginePower,
  maxPrice,
  setMaxPrice,
  cityLocation,
  setCityLocation
}) => {

  // Get pickup locations based on selected city
  const locationsForCity =
    selectedCity && selectedCity !== 'All'
      ? BikeListing.filter(bike => bike.pickup_city === selectedCity)
          .flatMap(bike => bike.pickup_site)
      : [];

  const uniqueLocations = [...new Set(locationsForCity)];

  // Reset filters handler
  const handleResetFilters = () => {
    setSearch('');
    setSelectedCity('All');
    setCityLocation('');
    setMaxEnginePower(1000);
    setMaxPrice(20000);
    toast.success('Filters reset successfully!');
  };

  return (
    <div className="w-full lg:w-80 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      {/* Header */}
      <div className="flex mb-6 gap-3 items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">FILTERS</h2>
        <Funnel className="w-6 h-6" />
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Search Bike
        </label>
        <div className="relative flex">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter bike model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          />
        </div>
      </div>

      {/* City Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Pickup City
        </label>
        <div className="relative flex">
          <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 appearance-none bg-white"
          >
            <option value="All">All Cities</option>
            <option value="Delhi">Delhi</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Chandigarh">Chandigarh</option>
          </select>
        </div>
      </div>

      {/* Pickup Location Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Pickup Location
        </label>
        <Locate className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <select
          value={cityLocation}
          onChange={(e) => setCityLocation(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 appearance-none bg-white"
          disabled={!selectedCity || selectedCity === 'All'}
        >
          <option value="">Select Pickup Location</option>
          {uniqueLocations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Engine CC Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-semibold text-gray-700">
            Engine Power
          </label>
          <span className="text-sm font-bold text-teal-600 bg-indigo-50 px-2 py-1 rounded-full">
            {maxEnginePower}cc
          </span>
        </div>
        <input
          type="range"
          min={100}
          max={1000}
          step={50}
          value={maxEnginePower}
          onChange={(e) => setMaxEnginePower(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>100cc</span>
          <span>1000cc</span>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-semibold text-gray-700">
            Max Price
          </label>
          <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            ₹{maxPrice}
          </span>
        </div>
        <input
          type="range"
          min={100}
          max={20000}
          step={500}
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>₹100</span>
          <span>₹20,000</span>
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={handleResetFilters}
        className="w-full py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default SidebarFilter;
