import express from "express";
import { getMaxCommentedPosts, getLatestPosts } from "../Controllers/postController.js";

const router = express.Router();


router.get("/top-commented", getMaxCommentedPosts);


router.get("/latest", getLatestPosts);

export default router;
