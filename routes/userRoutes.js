import express from "express";
import { validateLoginUser, validateUser } from "../middleware/validate.js";
import { loginUser, logoutUser, registerUser } from "../controllers/userControllers.js";

const router = express.Router();  

// Register new user
router.post("/register", validateUser, registerUser);

// Login user
router.post("/login", validateLoginUser,  loginUser);

// Logout user
router.post("/logout", logoutUser);

export default router;