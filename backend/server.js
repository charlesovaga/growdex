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
app.use(cors({
  origin: 'https://growdex.netlify.app',
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/posts", postRoutes);

// ✅ Root route for Render testing
app.get("/", (req, res) => {
  res.send("Growdex API is running");
});

app.use("/api", joinWaitlistRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
