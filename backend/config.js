// config.js
import dotenv from "dotenv";

dotenv.config();

export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
export const COOKIE_SECURE = process.env.COOKIE_SECURE === "true";