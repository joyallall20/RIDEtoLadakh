import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import { BikeListing } from "../../DATA/BikeListing.js";
import { LoginContex } from '../../Context/LoginContex';
import BikePaymentButton from "../../Componants/Buttons/BikePaymentButton.jsx";
import { AxiosInstence } from "../../Api/AxiosInstence.js";
import { ApiPath } from "../../Api/ApiPath.js";

const BikeBooking = () => {
  const { user } = useContext(LoginContex);
  const location = useLocation();
  const navigate = useNavigate();
  const { bikeModel } = useParams(); // get bike_model from URL

  // --- Find bike ---
  const [bike, setBike] = useState(location.state?.bike || null);

  useEffect(() => {
    if (!bike) {
      // Try to find the bike by bike_model from URL param
      const foundBike = BikeListing.find(b => b.bike_model === decodeURIComponent(bikeModel));
      setBike(foundBike || null);
    }
  }, [bike, bikeModel]);

  const initialPickupLocation = location.state?.cityLocation || (bike?.pickup_site[0] || '');

  const [formData, setFormData] = useState({
    customerName: user?.name || '',
    customerEmail: user?.email || '',
    tripType: "oneway",
    pickupLocation: initialPickupLocation
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!bike) {
    return (
      <div className="flex justify-center items-center mt-10 h-64">
        <p className="text-red-500 text-lg font-semibold">No bike data available.</p>
      </div>
    );
  }

  // --- Booking logic remains same ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const basePrice = formData.tripType === "oneway" ? bike.onewaytrip : bike.roundtrip;
  const totalPrice = basePrice + 500;

  const handleBookNow = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const bookingData = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        bikeName: bike.bike_model,
        tripType: formData.tripType,
        onewayprice: formData.tripType === "oneway" ? bike.onewaytrip : undefined,
        roundtripprice: formData.tripType === "roundtrip" ? bike.roundtrip : undefined,
        city: bike.pickup_city,
        pickuplocation: formData.pickupLocation,
      };

      const response = await AxiosInstence.post(ApiPath.BookbikeRoutes.createBooking, bookingData)

      // Mock API call
      console.log("Booking data:", bookingData);
      alert("Booking Confirmed!");
      
    } catch (err) {
      console.error("Booking error:", err);
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
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

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

            {/* Bike Image */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <img src={bike.image} alt={bike.bike_model} className="w-full h-96 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{bike.status}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">{bike.pickup_city}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(bike.specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-600">{key.replace('_', ' ').toUpperCase()}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{bike.bike_model}</h1>
                <p className="text-gray-600 mb-6">Complete your booking details below</p>

                <form onSubmit={handleBookNow} className="space-y-6">
                  {/* Trip Type */}
                  <div className="flex gap-6 mb-4">
                    {['oneway', 'roundtrip'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="tripType"
                          value={type}
                          checked={formData.tripType === type}
                          onChange={handleChange}
                          className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700 font-medium">{type === 'oneway' ? 'Oneway Trip' : 'Round Trip'}</span>
                      </label>
                    ))}
                  </div>

                  {/* Pickup Location */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Pickup Location</label>
                    <select
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      {bike.pickup_site.map((site, idx) => (
                        <option key={idx} value={site}>{site}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Base Price</span>
                      <span className="font-semibold">₹{basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Additional Charges</span>
                      <span className="font-semibold">₹500</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">Total Price</span>
                        <span className="text-2xl font-bold text-indigo-600">₹{totalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-500 text-right">(+GST applicable)</p>
                    </div>
                  </div>

                  <BikePaymentButton
  amount={totalPrice}
  bikeBookingData={{
    customerName: formData.customerName,
    customerEmail: formData.customerEmail,
    bikeName: bike.bike_model,
    city: bike.pickup_city,
    onewayprice: formData.tripType === "oneway" ? bike.onewaytrip : 0,
    roundtripprice: formData.tripType === "roundtrip" ? bike.roundtrip : 0,
    pickupLocation: formData.pickupLocation,
    tripType: formData.tripType
  }}
  onPaymentSuccess={(booking) => {
    console.log("Booking confirmed:", booking);
    navigate("/mybooking");
  }}
/>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeBooking;
