import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json()); // <-- FIXED
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));

// ✅ Root route (optional health check)
app.get("/", (req, res) => {
  res.send("API running successfully 🚀");
});

// ✅ API routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;