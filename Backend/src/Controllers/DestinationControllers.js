import Destination from '../Models/DestinationSchema.js'

// Create a new Destination
export const createDestination = async (req, res) => {
  try {
    const { name, location, description, images, attractions, distanceFromStart, durationToVisit } = req.body

    // Validate required fields BEFORE creating
    if (!name || !location) {
      return res.status(400).json({ message: "Name and location are required" })
    }

    const createdestination = await Destination.create({ name, location, description, images, attractions, distanceFromStart, durationToVisit })

    res.status(201).json({ createdestination })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single Destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params
    const getdestinationbyid = await Destination.findById(id)

    if (!getdestinationbyid) {
      return res.status(404).json({ message: "Destination not found" })
    }

    res.status(200).json({ getdestinationbyid })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get all Destinations
export const getAllDestinations = async (req, res) => {
  try {
    const getalldestinations = await Destination.find()

    if (getalldestinations.length === 0) {
      return res.status(404).json({ message: "No destinations found" })
    }

    res.status(200).json({ getalldestinations })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a Destination by ID
export const updateDestination = async (req, res) => {
  try {
    const { id } = req.params
    const update = req.body

    const updatedestination = await Destination.findByIdAndUpdate(id, update, { new: true })

    if (!updatedestination) {
      return res.status(404).json({ message: "Destination not updated / not found" })
    }

    res.status(200).json({ updatedestination })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete a Destination by ID
export const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params

    const deletedestination = await Destination.findByIdAndDelete(id)

    if (!deletedestination) {
      return res.status(404).json({ message: "Destination not found" })
    }

    res.status(200).json({ deletedestination })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
