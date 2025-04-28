import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Route imports - here

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.NODE_ENV === 'production'
    ? (process.env.MONGO_URI_PROD)
    : (process.env.MONGO_URI_DEV);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("/GET");
});


app.listen(PORT, () => {
    connectDB(MONGO_URI);
    console.log(`Server running on port ${PORT}`);
});
