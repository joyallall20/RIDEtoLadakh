import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/DB.js';
import cors from 'cors';
import userRoutes from './src/Routes/userRoutes.js';
import BookHotel from './src/Routes/BookHotel.js'
import paymentRoutes from './src/Routes/paymentRoutes.js'

dotenv.config();
import emailSend from './src/Routes/emailSend.js'

const App = express();
const Port = process.env.PORT || 8000;

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

App.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://rid-eto-ladakh.vercel.app"
];


App.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Routes
App.use("/api/user", userRoutes);
App.use("/api/hotels", BookHotel )
App.use("/api/payment", paymentRoutes);
App.use("/api/email", emailSend)
App.get("/test", (req, res) => res.json({ success: true, message: "Backend is alive!" }));
App.use('/public', express.static(path.join(__dirname, 'public')));


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
