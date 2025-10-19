import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // ✅ Check for Bearer token in header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      // ✅ Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ Get user info (without password)
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } else {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;