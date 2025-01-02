import User from "../models/user.js";
import bcrypt from "bcrypt";

import dotenv from "dotenv";

dotenv.config();

export function createUser(req, res) {
  const newUserData = req.body;
  newUserData.password = bcrypt.hashSync(newUserData.password, 10);
  const user = new User(newUserData);

  user
    .save()
    .then(() => {
      res.json({
        message: "User created",
      });
    })
    .catch(() => {
      res.json({
        message: "Error User not created",
      });
    });
  }


export function loginUser(req, res) {
  const { userName, password } = req.body;

  // Validate input
  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Find the user by username
  User.findOne({ userName })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "Invalid username or password" });
      }

      // Compare password
      const isPasswordMatch = bcrypt.compareSync(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid username or password" });
      }

      // Login successful
      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          userName: user.userName,
          type: user.type,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    });
}
