import TRIP from "../Models/TRIPSchema.js";

// ------------------------ CREATE TRIP ------------------------
export const createTrip = async (req, res) => {
  try {
    const { tripname, location, difficulty, durationDays, price, bike, hotel } = req.body;

    // Validate required fields
    if (!tripname || !bike || !location) {
      return res.status(400).json({ message: "Trip name, location, and bike are required" });
    }

    // Create trip
    const trip = await TRIP.create({ tripname, location, difficulty, durationDays, price, bike, hotel });

    res.status(201).json({ trip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------------ GET ALL TRIPS ------------------------
export const getAllTrips = async (req, res) => {
  try {
    const trips = await TRIP.find()
      .populate("hotel")
      .populate("bike");

    res.status(200).json({ trips });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------------ GET TRIP BY ID ------------------------
export const getTripById = async (req, res) => {
  try {
    const { id } = req.params;

    const trip = await TRIP.findById(id)
      .populate("hotel")
      .populate("bike");

    if (!trip) return res.status(404).json({ message: "Trip not found" });

    res.status(200).json({ trip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------------ UPDATE TRIP ------------------------
export const updateTrip = async (req, res) => {
  try {
    const { id } = req.params; //object containing route parameters in your URL.
    const updates = req.body; //contains the data sent by the client in the request body (usually JSON).

    const updatedTrip = await TRIP.findByIdAndUpdate(id, updates, { new: true })
      .populate("hotel")
      .populate("bike");

    if (!updatedTrip) return res.status(404).json({ message: "Trip not found" });

    res.status(200).json({ updatedTrip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------------ DELETE TRIP ------------------------
export const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTrip = await TRIP.findByIdAndDelete(id);

    if (!deletedTrip) return res.status(404).json({ message: "Trip not found" });

    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
