import { getAllBookings, getBookingById, updateBooking } from "../../../../Backend/src/Controllers/BookHotelController";


export const ApiPath = {
  Auth:{
    Signup: "/user/signup",
    Login: "/user/login",
  },

  Destinations:{
    createDestinations: "/destinations",
    deleteDestintion: "/destinations/id",
    updateDestination:"/destinations/:id",
    getAllDestination: "/destinations",
    getDestinationById:"/destinations/id"
  },
  Hotels:{
    createHotel: "/hotels",
    deleteHotel: "/hotels",
    updateHotel: "/hotels/id",
    getAllHotel: "/hotels",
    getAllHotelbyId: "/hotels/id"
  },
  TripRoutes:{
    createTrip: "/trips",
    deleteTrip: "/trips/:id",
    updateTrip: "/trips/:id",
    getAllTrip: "/trips",
    getAllTripsById: "trips/:id"
  },
  BookbikeRoutes: {
  createBooking: "/bike",
  getAllBookings: "/bike",
  getBookingById: "/bike/:id",
  updateBooking: "/bike/:id",
  deleteBooking: "/bike/:id",
},
BookHotel:{
  createhotelbooking : '/hotels/booking',
  getAllBookings : '/hotels/booking',
  getBookingById: '/hotels/booking/:id',
  updateBooking: '/hotels/booking/:id',
  deleteBooking: '/hotels/booking/:id'

},
 paymentRoutes: {
    createOrder: "/payment/create-order",  // backend endpoint for Razorpay order
    verifyPayment: "/payment/verify-payment",      // optional, if you implement payment verification
  },
  BikepaymentRoutes:{
     createOrder: "/payment/create-order/bike",  // backend endpoint for Razorpay order
    verifyPayment: "/payment/confirm-booking/bike",   
  }


}