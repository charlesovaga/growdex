import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

// import passport from './config/passport.js'; // register strategies

// Routes
// import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import joinWaitlistRoute from './routes/joinWaitlist.js';
import adminRoutes from "./routes/adminBlog.js"; 
import adminBlogRoutes from "./routes/adminBlogAnalytics.js"; 
import trackRoutes from "./routes/adminBlogTrack.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";

const app = express();
connectDB();

// Allowed origins
const allowedOrigins = [
  'https://growdex.ai', // production
  "http://localhost:5173"        // development
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
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
app.use(helmet());
app.use(cookieParser());
app.use(rateLimit({ windowMs: 60_000, max: 200 }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
// app.use('/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api', joinWaitlistRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/admin-dashboard", adminBlogRoutes);
app.use("/api/track", trackRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tags", tagRoutes);
// Test route
app.get('/', (req, res) => res.send('Growdex API is running'));

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
