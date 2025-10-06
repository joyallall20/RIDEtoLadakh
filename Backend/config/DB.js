import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    // 1. Initiate the connection, using recommended stability options
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Increase timeout for high-latency connections, just in case
      serverSelectionTimeoutMS: 30000, 
    });

    // 2. Add an event listener to confirm the connection is fully open
    // This part is crucial for guaranteeing readiness before other operations run
    mongoose.connection.on('connected', () => {
        console.log(`Mongoose connection is fully open.`);
    });

    // 3. Log the successful connection host
    console.log(`MongoDB connected: ${connect.connection.host}`);
    
  } catch (error) {
    // Handle immediate connection failure (e.g., bad URL, DNS error)
    console.error("MongoDB connection failed:", error.message);
    // It's still critical to exit the process if the DB fails to connect
    process.exit(1); 
  }
};