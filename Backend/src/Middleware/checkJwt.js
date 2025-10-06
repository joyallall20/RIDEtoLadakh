import express from 'express';
import { checkJwt } from './middleware/auth.js';
import HotelBooking from '../Models/HotelBooking.js';

const router = express.Router();

// Protected route: get user bookings
router.get('/mybookings', checkJwt, async (req, res) => {
  try {
    const userEmail = req.auth?.sub; // Auth0 sub contains user ID or email
    const bookings = await HotelBooking.find({ customerEmail: userEmail });
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

// Protected route: create booking
router.post('/hotel', checkJwt, async (req, res) => {
  try {
    const bookingData = req.body;
    bookingData.customerEmail = req.auth?.sub; // get email from token
    const newBooking = await HotelBooking.create(bookingData);
    res.status(201).json({ message: 'Booking created!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
});

export default router;
