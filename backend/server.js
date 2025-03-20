import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from './db.js';
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from './src/routes/postRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/posts", userRoutes);
app.use("/api/posts", postRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
