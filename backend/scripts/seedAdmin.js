// scripts/seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js"; // your User model

dotenv.config(); // load .env

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("Monkey211@", 10);

    const admin = new User({
      name: "Emmanuel Chuma-Onwuoku",
      email: "emmaebuka211@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    await admin.save();
    console.log("✅ Admin seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
