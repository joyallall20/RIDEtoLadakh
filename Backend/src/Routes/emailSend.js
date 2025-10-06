// routes/hotelBooking.js

import express from 'express';
import nodemailer from 'nodemailer';
import HotelBooking from '../Models/HotelBooking.js';

const router = express.Router();

// Create a hotel booking
router.post('/email', async (req, res) => {
  try {
    const bookingData = req.body;

    // Save booking to DB
    const newBooking = await HotelBooking.create(bookingData);

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // or your SMTP server
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password or email password
      },
    });

    const mailOptions = {
      from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
      to: bookingData.customerEmail,
      subject: 'Hotel Booking Confirmation',
      html: `
        <h3>Hi ${bookingData.customerName},</h3>
        <p>Your booking at <strong>${bookingData.hotelName}</strong> is confirmed.</p>
        <p>Check-in: ${bookingData.startDate}</p>
        <p>Check-out: ${bookingData.endDate}</p>
        <p>Total Price: $${bookingData.totalPrice}</p>
        <p>Thank you for booking with us!</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking created and email sent!', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error booking hotel', error });
  }
});

export default router;
