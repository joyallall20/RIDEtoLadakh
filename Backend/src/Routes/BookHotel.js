import express from "express";
import {
  createHotelBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../Controllers/BookHotelController.js";

const router = express.Router();
router.post("/booking", createHotelBooking);
router.get("/booking", getAllBookings);
router.get("/booking/:id", getBookingById);
router.put("/booking/:id", updateBooking);
router.delete("/booking/:id", deleteBooking);

export default router;
