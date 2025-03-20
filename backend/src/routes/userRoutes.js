import express from "express";
import { getTopUsers } from "../Controllers/userController.js";

const router = express.Router();

router.get("/top-users", getTopUsers);

export default router;
