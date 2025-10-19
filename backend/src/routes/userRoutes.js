import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register new user
router.post("/register", registerUser);

// Login existing user
router.post("/login", authUser);

// Get user profile (protected route)
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;