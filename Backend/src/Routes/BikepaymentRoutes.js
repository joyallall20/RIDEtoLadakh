import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv"
import Booking from "../Models/bookingSchema.js";
const router = express.Router();

dotenv.config(); 
// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Route 1: Create Razorpay Order
router.post("/create-payment-order/bike", async (req, res) => {
  try {
    const { totalPrice } = req.body; // in rupees

    const options = {
      amount: totalPrice , // Razorpay amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    res.status(500).json({ message: "Failed to create payment order" });
  }
});

// Route 2: Confirm Bike Booking (after successful payment)
router.post("/confirm-booking/bike", async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      bikeName,
      city,
      onewayprice,
      roundtripprice,
      pickupLocation,
      amount,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = req.body;

    // You may also verify signature here using Razorpay SDK for security

    const newBooking = new Booking({
      customerName,
      customerEmail,
      bikeName,
      city,
      onewayprice,
      roundtripprice,
      pickuplocation: pickupLocation,
      amount,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking confirmed", booking: newBooking });
  } catch (err) {
    console.error("Booking failed:", err);
    res.status(500).json({ message: "Booking failed" });
  }
});

export default router;
