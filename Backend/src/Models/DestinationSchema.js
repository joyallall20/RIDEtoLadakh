import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  images: [String],
  attractions: [String],
  distanceFromStart: { type: Number },
  durationToVisit: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
