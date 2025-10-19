import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase(); // normalize email to lowercase

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const authUser = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase(); // normalize input for login

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }

    res.status(401).json({ message: "Invalid email or password" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};