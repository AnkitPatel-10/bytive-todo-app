import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

const app = express();

app.use(bodyParser.json());    //for JSON data
app.use(cookieParser());     //for Cookies


// HOME PAGE
app.get("/", (req, res) => {
    res.send("This is home route of the app");
});

// ROUTES
app.use('/todos', todoRoutes);      //TODO Routes
app.use('/todos/auth', userRoutes);        //AUTH Routes

//Connection with MONGODB using MONOGO URL
const connectDb = async() => {
    await mongoose.connect(process.env.MDB_URL).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log('Error in connecting to Db :', err);
    });
}

//Connecting with Server
app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
    connectDb();
});