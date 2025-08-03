// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joinWaitlistRoute from "./routes/joinWaitlist.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET'],
    credentials: true
  }));
app.use(express.json());

app.use("/api", joinWaitlistRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
