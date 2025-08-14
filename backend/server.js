import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import joinWaitlistRoute from "./routes/joinWaitlist.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Define allowed origins
const allowedOrigins = [
  "https://growdex.netlify.app", // production
  "http://localhost:5173"         // development
];

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman or mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api", joinWaitlistRoute);

// Root route for testing
app.get("/", (req, res) => {
  res.send("Growdex API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
