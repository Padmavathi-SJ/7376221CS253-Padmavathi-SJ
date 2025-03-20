import express from "express";
import { getMaxCommentedPosts, getLatestPosts } from "../Controllers/postController.js";

const router = express.Router();

// Route for fetching posts with the most comments
router.get("/top-commented", getMaxCommentedPosts);

// Route for fetching latest posts in real-time
router.get("/latest", getLatestPosts);

export default router;
