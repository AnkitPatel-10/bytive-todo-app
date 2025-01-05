import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../functions/tokenFunctions.js";


const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            throw new Error( "User already exists." );
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        // Generate JWT token
        generateToken(res, user._id);
        
        res.status(201).json({
            message: "User registered successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "User not found : Invalid email or password" });
        }
        // Generate JWT token
        generateToken(res, user._id);
        res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
};

export {registerUser, loginUser, logoutUser};