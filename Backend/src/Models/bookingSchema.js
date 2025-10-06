import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true, // fixed typo: was "requried"
    },
    bikeName: {
      type: String,
      required: true,
    },
    onewayprice: {
      type: Number,
      validate: {
        validator: function (value) {
          return value != null || this.roundtripprice != null;
        },
        message: "Either onewayprice or roundtripprice is required.",
      },
    },
    roundtripprice: {
      type: Number,
      validate: {
        validator: function (value) {
          return value != null || this.onewayprice != null;
        },
        message: "Either roundtripprice or onewayprice is required.",
      },
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    city: {
      type: String,
      required: true,
    },
    pickuplocation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Fix for OverwriteModelError
const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
