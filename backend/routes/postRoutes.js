// import express from "express";
// import {
//   getPosts,
//   getPost,
//   createPost,
//   updatePost,
//   deletePost,
// } from "../controllers/postController.js";

// const router = express.Router();

// router.get("/", getPosts);
// router.get("/:slug", getPost);
// router.post("/", createPost);
// router.put("/:slug", updatePost);
// router.delete("/:slug", deletePost);

// export default router;


import express from "express";
import { uploadPostImages } from "../middleware/upload.js";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPublicPosts
} from "../controllers/postController.js";

const router = express.Router();



// Create new post (with featuredImage + multiple images)
router.post("/", uploadPostImages, createPost);

// Update post (with featuredImage + multiple images)
router.put("/:slug", uploadPostImages, updatePost);

// Delete post (also removes images from Cloudinary)
router.delete("/:slug", deletePost);

// Public endpoint: latest 10 posts
router.get("/public", getPublicPosts);

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:slug", getPost);

export default router;
