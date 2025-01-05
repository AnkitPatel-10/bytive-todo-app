import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Authenticate the user using jwt token
const authenticateToken = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.id).select("-password");
        

    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
    next(); 
}

export default authenticateToken;