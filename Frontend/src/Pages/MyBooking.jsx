import React, { useContext, useEffect, useState } from 'react';
import { AxiosInstence } from '../Api/AxiosInstence.js';
import { ApiPath } from '../Api/ApiPath.js';
import Navbar from '../Componants/Layout/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import { LoginContex } from '../Context/LoginContex.jsx';
import { Building, MapPin, Calendar, Users, DoorOpen, DollarSign, Loader2, Trash2, ArrowRight } from 'lucide-react';

const MyBooking = () => {
  const { user } = useContext(LoginContex);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchHotelBookings = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstence.get(ApiPath.BookHotel.getAllBookings);
      let allBookings = [];

      if (Array.isArray(response.data.booking)) {
        allBookings = response.data.booking;
      } else if (Array.isArray(response.data)) {
        allBookings = response.data;
      }

      const userBookings = allBookings.filter(
        (booking) => booking.customerEmail === user?.email
      );

      setHotelBookings(userBookings);
    } catch (error) {
      console.error('Error fetching hotel bookings:', error.response || error);
      setHotelBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteHotelBooking = async (bookingId) => {
    if (!bookingId) return console.error('Booking ID is missing!');
    const confirmDelete = window.confirm('Are you sure you want to cancel this booking?');
    if (!confirmDelete) return;

    try {
      await AxiosInstence.delete(ApiPath.BookHotel.deleteBooking.replace(':id', bookingId));
      setHotelBookings((prev) => prev.filter((booking) => booking._id !== bookingId));
      console.log('Booking deleted:', bookingId);
    } catch (error) {
      console.error('Error deleting hotel booking:', error.response || error);
      alert('Failed to delete booking. Please try again.');
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchHotelBookings();
    }
  }, [user]);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
        
          <p className="mt-2 text-slate-600">Manage your hotel reservations and upcoming stays</p>
        </div>

        {loading ? (
          // Loading State
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
            <p className="text-slate-600 text-lg">Loading your bookings...</p>
          </div>
        ) : hotelBookings.length === 0 ? (
          // Empty State
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-200">
            <Building className="mx-auto h-16 w-16 text-slate-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No bookings found</h3>
            <p className="text-slate-500 mb-6 max-w-md mx-auto">
              You haven't made any hotel bookings yet. Start planning your next trip!
            </p>
            <button
              onClick={() => navigate('/hotels')}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
            >
              Browse Hotels
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        ) : (
          // Bookings Grid
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {hotelBookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-6">
                  {/* Hotel Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-indigo-50 rounded-lg">
                        <Building className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 line-clamp-1">
                          {booking.hotelName}
                        </h3>
                        <img src={booking.images} alt="" />
                        {booking.location && (
                          <div className="flex items-center text-slate-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{booking.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      Confirmed
                    </span>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Check-in</span>
                      </div>
                      <span className="font-medium text-slate-900">
                        {new Date(booking.startDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">Check-out</span>
                      </div>
                      <span className="font-medium text-slate-900">
                        {new Date(booking.endDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex items-center text-slate-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">Guests</span>
                      </div>
                      <span className="font-medium text-slate-900">{booking.guests}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex items-center text-slate-600">
                        <DoorOpen className="h-4 w-4 mr-2" />
                        <span className="text-sm">Rooms</span>
                      </div>
                      <span className="font-medium text-slate-900">{booking.roomsBooked}</span>
                    </div>
                  </div>

                  {/* Footer with Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <p className="text-sm text-slate-600">Total Amount</p>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-indigo-600" />
                        <p className="text-2xl font-bold text-indigo-600">{booking.totalPrice}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteHotelBooking(booking._id)}
                      className="inline-flex items-center px-4 py-2 border border-red-200 text-red-700 font-medium rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors duration-200 group"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;