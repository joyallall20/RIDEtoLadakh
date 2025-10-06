import React, { useContext } from 'react';
import { hotelListings } from '../../DATA/hotelListings.js'; 
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContex.jsx';
import { DateSelectorContext } from '../../Context/DateSelector.jsx';
import DateSelector from '../../Componants/Layout/DateSelector.jsx';

const HotelCard = () => {
  const { searchHotel, filterHotel } = useContext(SearchContext);
  const { dateForm } = useContext(DateSelectorContext);
  const navigate = useNavigate();

  // Calculate number of nights based on selected dates
  const getNights = () => {
    if (!dateForm.startDate || !dateForm.endDate) return 1; // fallback to 1 night
    const inDate = new Date(dateForm.startDate);
    const outDate = new Date(dateForm.endDate);
    const diffTime = outDate - inDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 0 ? diffDays : 1; // ensure at least 1 night
  };

  const nights = getNights();

  // Filter hotels
  const filteredHotels = hotelListings.filter((hotel) => {
    // Name search
    const hotelNameMatch = !searchHotel
      ? true
      : hotel.name.toLowerCase().includes(searchHotel.toLowerCase());

    // Location filter
    const locationMatch = !filterHotel.location
      ? true
      : hotel.location.toLowerCase() === filterHotel.location.toLowerCase();

    // Amenities filter (multi-select)
    const amenitiesMatch =
      !filterHotel.amenities || filterHotel.amenities.length === 0
        ? true
        : filterHotel.amenities.every((selectedAmenity) =>
            hotel.amenities
              .map((a) => a.toLowerCase().trim())
              .includes(selectedAmenity.toLowerCase().trim())
          );

    // Price filter (total for selected nights)
    const priceMatch = !filterHotel.price
      ? true
      : hotel.pricePerNight * nights >= filterHotel.price[0] &&
        hotel.pricePerNight * nights <= filterHotel.price[1];

    return hotelNameMatch && locationMatch && amenitiesMatch && priceMatch;
  });

  return (
    <div className="px-4 md:px-7 mt-2 lg:px-16">
      {/* Date Selector */}
      <DateSelector />

      {/* Hotels List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              {/* Hotel Image */}
              <img
                src={hotel.images?.[0]}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />

              {/* Hotel Info */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-semibold">{hotel.name}</h2>
                  <p className="text-sm text-gray-600">{hotel.location}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Book button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">
                    ₹{hotel.pricePerNight * nights} ({nights} night{nights > 1 ? 's' : ''})
                  </span>
                  <button
                    className="bg-teal-500 cursor-pointer text-white py-1 px-3 rounded hover:bg-green-600"
                    onClick={() =>
                      navigate(`/hotelbooking/${hotel.id}`, { state: { hotel, nights } })
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No hotels found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelCard;
