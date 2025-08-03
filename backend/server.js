import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joinWaitlistRoute from "./routes/joinWaitlist.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://growdex.netlify.app/',
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// ✅ Root route for Render testing
app.get("/", (req, res) => {
  res.send("Growdex API is running");
});

app.use("/api", joinWaitlistRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
