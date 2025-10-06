import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContex } from "../../Context/LoginContex";
import { AxiosInstence } from "../../Api/AxiosInstence";
import { ApiPath } from "../../Api/ApiPath";
import DateSelector from "../../Componants/Layout/DateSelector";
import { DateSelectorContext } from "../../Context/DateSelector";
import PaymentButton from "../../Componants/Buttons/PaymentButton";
import toast from "react-hot-toast";

const HotelBooking = () => {
  const { user } = useContext(LoginContex);
  const { dateForm } = useContext(DateSelectorContext);
  const [loading, setLoading] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            NO DATA AVAILABLE
          </h1>
          <button
            onClick={() => navigate("/hotels")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Hotels
          </button>
        </div>
      </div>
    );
  }

  // Calculate nights
  const getNights = () => {
    if (!dateForm.startDate || !dateForm.endDate) return 0;
    const inDate = new Date(dateForm.startDate);
    const outDate = new Date(dateForm.endDate);
    const diffTime = outDate - inDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = getNights();
  const totalPrice =
    nights * (dateForm.rooms || 1) * (hotel.pricePerNight || 0);

  // ✅ Function to create booking & send email
  const hotelbooked = async () => {
    setLoading(true);

    if (!dateForm.startDate || !dateForm.endDate) {
      toast.error("Please select check-in and check-out dates");
      setLoading(false);
      return;
    }

    if (nights === 0) {
      toast.error("Check-out date must be after check-in date");
      setLoading(false);
      return;
    }

    try {
      const bookingData = {
        customerName: user?.name || "",
        customerEmail: user?.email || "",
        hotelName: hotel.name,
        hotelId: hotel._id?.toString(),
        location: hotel.location,
        startDate: dateForm.startDate,
        endDate: dateForm.endDate,
        roomsBooked: dateForm.rooms || 1,
        guests: dateForm.guests || 1,
        totalPrice,
        pricePerNight: hotel.pricePerNight || 0,
        specialRequest: specialRequest || "None",
      };

      const response = await AxiosInstence.post(
        ApiPath.BookHotel.createhotelbooking,
        bookingData
      );

      toast.success("Booking Confirmed & Email Sent! ✅");
      console.log("Booking response:", response.data);
      navigate("/mybooking");
    } catch (error) {
      console.error("Booking error:", error.response || error);
      toast.error(
        error.response?.data?.message || "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <DateSelector />
      </div>

      <div className="pt-[200px] sm:pt-[100px]">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-20 py-10 flex justify-center items-start transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT: Hotel Info */}
              <div className="bg-gray-900 text-white p-6 sm:p-8">
                <img
                  src={hotel.images?.[0]}
                  alt={hotel.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
                <div className="flex items-center gap-2 text-yellow-400 mb-2 text-sm sm:text-base">
                  {"★".repeat(hotel.rating || 0)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - (hotel.rating || 0))}
                  </span>
                  <span className="text-white text-xs sm:text-sm">
                    ({hotel.rating || 0}/5)
                  </span>
                </div>
                <p className="text-gray-300 mb-4 flex items-center gap-2 text-sm sm:text-base">
                  📍 {hotel.location}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Amenities</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    {hotel.amenities?.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        ✅ {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Booking Form */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Select Dates & Rooms
                </h3>

                <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Booking Summary
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per night</span>
                      <span className="font-semibold">${hotel.pricePerNight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in</span>
                      <span className="font-medium">
                        {dateForm.startDate || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out</span>
                      <span className="font-medium">
                        {dateForm.endDate || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">
                        {nights} night{nights !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rooms</span>
                      <span className="font-medium">{dateForm.rooms || 1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests</span>
                      <span className="font-medium">{dateForm.guests || 1}</span>
                    </div>

                    {/* Special Request */}
                    <div className="pt-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Special Request
                      </label>
                      <input
                        type="text"
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        placeholder="e.g., Need a room with mountain view"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">
                          Total Amount
                        </span>
                        <span className="text-2xl font-bold text-indigo-600">
                          ${totalPrice}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 text-right mt-1">
                        Including all taxes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <PaymentButton
                  amount={totalPrice}
                  hotelbooked={hotelbooked} // ✅ booking happens after successful payment
                />

                <p className="mt-4 text-center text-xs text-gray-500">
                  Free cancellation up to 24 hours before check-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
