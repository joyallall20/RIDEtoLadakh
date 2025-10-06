import Booking from '../../src/Models/bookingSchema.js'

// Helper: validate dates
const isValidDate = (date) => !isNaN(new Date(date).getTime());

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const { customerName, customerEmail, bikeName, onewayprice, roundtripprice, city, pickuplocation } = req.body;

    if (!bikeName || !city) {
      return res.status(400).json({ message: "bikeName, startDate, endDate, and city are required" });
    }

    if (!onewayprice && !roundtripprice) {
      return res.status(400).json({ message: "Either onewayprice or roundtripprice is required" });
    }

    const booking = await Booking.create({pickuplocation, customerName, customerEmail, bikeName, onewayprice, roundtripprice, city});
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update booking
export const updateBooking = async (req, res) => {
  try {
    const updates = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ updatedBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ deletedBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
