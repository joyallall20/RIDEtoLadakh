import mongoose from "mongoose";

const hotelBookingSchema = new mongoose.Schema(
  {
    // Customer info
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    customerEmail: {
      type: String,
      required: true,
      trim: true,
    },

    // Hotel info
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel"
    },
    location: {
      type: String,
    },

    // Booking details
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    roomsBooked: {
      type: Number,
      default: 1,
      min: 1,
    },
    guests: {
      type: Number,
      default: 1,
      min: 1,
    },

    // Pricing
    pricePerNight: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },  

    // Optional fields
    specialRequests: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const HotelBooking = mongoose.model("HotelBooking", hotelBookingSchema);

export default HotelBooking;
