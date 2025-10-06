import HotelBooking from "../Models/HotelBooking.js";
import mongoose from "mongoose";

// @desc    Create a new hotel booking
// @route   POST /api/hotels/booking
// @access  Public (or private if using auth)
export const createHotelBooking = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      hotelName,
      hotelId,
      location,
      startDate,
      endDate,
      roomsBooked,
      guests,
      pricePerNight,
      totalPrice,
      specialRequests,
      status,
    } = req.body;

    // Validation
    if (!customerName || !customerEmail) {
      return res.status(400).json({ message: "Customer name and email are required" });
    }

    if (!hotelName) {
      return res.status(400).json({ message: "Hotel name and ID are required" });
    }

    if (!startDate || !endDate) {
      return res.status(400).json({ message: "Start date and end date are required" });
    }

    if (!pricePerNight || !totalPrice) {
      return res.status(400).json({ message: "Price per night and total price are required" });
    }

    // Create booking
    const newBooking = await HotelBooking.create({
      customerName,
      customerEmail,
      hotelName,
      hotelId,
      location,
      startDate,
      endDate,
      roomsBooked: roomsBooked || 1,
      guests: guests || 1,
      pricePerNight,
      totalPrice,
      specialRequests: specialRequests || "",
      status: status || "pending",
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating hotel booking:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/hotels/booking
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await HotelBooking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a booking by ID
// @route   GET /api/hotels/booking/:id
export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid booking ID" });

    const booking = await HotelBooking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status or details
// @route   PUT /api/hotels/booking/:id
export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid booking ID" });

    const updatedBooking = await HotelBooking.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json({ message: "Booking updated", booking: updatedBooking });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/hotels/booking/:id
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid booking ID" });

    const deletedBooking = await HotelBooking.findByIdAndDelete(id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: error.message });
  }
};
