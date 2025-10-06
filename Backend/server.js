import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/DB.js';
import cors from 'cors';
import userRoutes from './src/Routes/userRoutes.js';
import BookHotel from './src/Routes/BookHotel.js'
import BookbikeRoutes from '../Backend/src/Routes/BookbikeRoutes.js'
import paymentRoutes from '../Backend/src/Routes/paymentRoutes.js'
import BikepaymentRoutes from '../Backend/src/Routes/BikepaymentRoutes.js'
dotenv.config();
import emailSend from '../Backend/src/Routes/emailSend.js'

const App = express();
const Port = process.env.PORT || 8000;

// Middleware
App.use(express.json());
App.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
App.use("/api/user", userRoutes);
App.use("/api/bike", BookbikeRoutes);
App.use("/api/hotels", BookHotel )
App.use("/api/payment", paymentRoutes);
App.use("/api/payment/bike",BikepaymentRoutes);
App.use("/api/email", emailSend)

// Default route
App.get("/", (req, res) => res.send("Server is running"));

// Connect DB & start server
connectDb()
  .then(() => {
    App.listen(Port, () => {
      console.log(`Server running on port ${Port} and DB connected`);
    });
  })
  .catch(err => console.error("DB connection failed:", err));
