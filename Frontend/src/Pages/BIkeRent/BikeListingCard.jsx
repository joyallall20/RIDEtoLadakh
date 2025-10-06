import React, { useState } from 'react';
import { BikeListing } from '../../DATA/BikeListing.js';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation } from 'lucide-react';
import SidebarFilter from './SidebarFilter.jsx';

// Helper to extract CC from engine string
const getEngineCC = (engineString) => {
  const match = engineString.match(/(\d+)\s*cc/i);
  return match ? parseInt(match[1], 10) : 0;
};

const BikeListingCard = () => {
  const navigate = useNavigate();

  // --- Filter states ---
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [cityLocation, setCityLocation] = useState('');
  const [maxEnginePower, setMaxEnginePower] = useState(650);
  const [maxPrice, setMaxPrice] = useState(20000);

  // --- Filtering bikes ---
  const filteredBikes = BikeListing.filter((bike) => {
    const matchesCity = selectedCity === 'All' || bike.pickup_city === selectedCity;
    const matchesLocation = !cityLocation || bike.pickup_site.includes(cityLocation);
    const bikeCC = getEngineCC(bike.specs.engine);
    const matchesPower = bikeCC <= maxEnginePower;
    const matchesPrice = bike.onewaytrip <= maxPrice || bike.roundtrip <= maxPrice;
    const matchesSearch = bike.bike_model.toLowerCase().includes(search.toLowerCase());

    return matchesCity && matchesLocation && matchesPower && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar filter */}
          <div className="lg:w-80">
            <SidebarFilter
              search={search}
              setSearch={setSearch}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              maxEnginePower={maxEnginePower}
              setMaxEnginePower={setMaxEnginePower}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              cityLocation={cityLocation}
              setCityLocation={setCityLocation}
            />
          </div>

          {/* Bike Cards */}
          <div className="flex-1">
            {filteredBikes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBikes.map((bike) => (
                  <div
                    key={bike.bike_model} // use bike_model as key
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
                  >
                    {/* Bike Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={bike.image}
                        alt={bike.bike_model}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            bike.status === 'AVAILABLE'
                              ? 'bg-green-100 text-green-800 border border-green-200'
                              : 'bg-red-100 text-red-800 border border-red-200'
                          }`}
                        >
                          {bike.status}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-black bg-opacity-60 text-white text-xs rounded-md">
                          {getEngineCC(bike.specs.engine)}cc
                        </span>
                      </div>
                    </div>

                    {/* Bike Details */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors duration-200">
                        {bike.bike_model}
                      </h3>

                      <div className="flex items-center text-sm text-gray-600 mb-3 gap-2">
                        <MapPin className="w-4 h-4" />
                        {bike.pickup_city}
                        {cityLocation && ` - ${cityLocation}`}
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        <span className="font-medium">Engine:</span> {bike.specs.engine.split(',')[0]}
                      </p>

                      {/* Pricing */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center border border-blue-100">
                          <p className="text-xs text-gray-600 font-medium mb-1">One Way</p>
                          <p className="text-lg font-bold text-indigo-700">₹{bike.onewaytrip}</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 text-center border border-green-100">
                          <p className="text-xs text-gray-600 font-medium mb-1">Round Trip</p>
                          <p className="text-lg font-bold text-teal-600">₹{bike.roundtrip}</p>
                        </div>
                      </div>

                      {/* Extras */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Navigation className="w-4 h-4" />
                          {bike.extras.gps ? 'GPS' : 'No GPS'}
                        </div>
                      </div>

                      {/* Book Now */}
                      <button
                        onClick={() => navigate(`/bikebooking/${bike.bike_model}`, { state: { bike } })}
                        className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-teal-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No bikes found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to find more options</p>
                  <button
                    onClick={() => {
                      setSearch('');
                      setSelectedCity('All');
                      setCityLocation('');
                      setMaxEnginePower(650);
                      setMaxPrice(20000);
                    }}
                    className="bg-teal-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeListingCard;
