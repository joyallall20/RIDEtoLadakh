import { AxiosInstence } from "./AxiosInstence";

export const ApiPath = {
  Auth: {
    Signup: (data) => AxiosInstence.post("/user/signup", data),
    Login: (data) => AxiosInstence.post("/user/login", data),
  },

  Destinations: {
    createDestinations: (data) => AxiosInstence.post("/destinations", data),
    deleteDestintion: (id) => AxiosInstence.delete(`/destinations/${id}`),
    updateDestination: (id, data) => AxiosInstence.put(`/destinations/${id}`, data),
    getAllDestination: () => AxiosInstence.get("/destinations"),
    getDestinationById: (id) => AxiosInstence.get(`/destinations/${id}`),
  },

  Hotels: {
    createHotel: (data) => AxiosInstence.post("/hotels", data),
    deleteHotel: (id) => AxiosInstence.delete(`/hotels/${id}`),
    updateHotel: (id, data) => AxiosInstence.put(`/hotels/${id}`, data),
    getAllHotel: () => AxiosInstence.get("/hotels"),
    getAllHotelbyId: (id) => AxiosInstence.get(`/hotels/${id}`),
  },

  TripRoutes: {
    createTrip: (data) => AxiosInstence.post("/trips", data),
    deleteTrip: (id) => AxiosInstence.delete(`/trips/${id}`),
    updateTrip: (id, data) => AxiosInstence.put(`/trips/${id}`, data),
    getAllTrip: () => AxiosInstence.get("/trips"),
    getAllTripsById: (id) => AxiosInstence.get(`/trips/${id}`),
  },

  BookbikeRoutes: {
    createBooking: (data) => AxiosInstence.post("/bike", data),
    getAllBookings: () => AxiosInstence.get("/bike"),
    getBookingById: (id) => AxiosInstence.get(`/bike/${id}`),
    updateBooking: (id, data) => AxiosInstence.put(`/bike/${id}`, data),
    deleteBooking: (id) => AxiosInstence.delete(`/bike/${id}`),
  },

  BookHotel: {
    createhotelbooking: (data) => AxiosInstence.post("/hotels/booking", data),
    getAllBookings: () => AxiosInstence.get("/hotels/booking"),
    getBookingById: (id) => AxiosInstence.get(`/hotels/booking/${id}`),
    updateBooking: (id, data) => AxiosInstence.put(`/hotels/booking/${id}`, data),
    deleteBooking: (id) => AxiosInstence.delete(`/hotels/booking/${id}`),
  },

 paymentRoutes: {
  createOrder: (data) => AxiosInstence.post("/payment/create-order", data),  // <-- pass data here
  verifyPayment: (data) => AxiosInstence.post("/payment/verify-payment", data),
},

  BikepaymentRoutes: {
    createOrder: (data) => AxiosInstence.post("/payment/create-order/bike", data),
    verifyPayment: (data) => AxiosInstence.post("/payment/confirm-booking/bike", data),
  },
};
