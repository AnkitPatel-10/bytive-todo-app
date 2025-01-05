import jwt from "jsonwebtoken";

//Generate token and store it in Cookie
const generateToken = (res, id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    if (!token) {
        return res.status(401).json({ message: "Error in generating token" });
    }
    const cookieOptions = {
        httpOnly: true,
        maxAge:  1 * 24 * 60 * 60 * 1000, // 1 day
    
    };
    console.log("Token generated successfully: ", token);
    res.cookie("jwt", token, cookieOptions);
}

export default generateToken;