import express from "express";
import { login, refresh, logout, getMe } from "../controllers/adminBlog.js";
import { requireAdminAuth } from "../middleware/adminBlogMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", requireAdminAuth, getMe);

export default router;
