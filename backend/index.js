import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import users from "./routes/userRoute.js"

//tem comment
const app = express(); //this line create a new web server

dotenv.config();
app.use(cors());//Allowing Other Websites to Talk to Your Server

const PORT = process.env.PORT || 8000;

// db connection function
const connect = async () => {
  try {
    // Establish connection to MongoDB using the connection string stored in environment variable (MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,      // Ensures MongoDB driver uses the new URL parser (recommended)
      useUnifiedTopology: true,  // Makes MongoDB driver use the unified topology engine (recommended)
      ssl: true,                  // Ensures SSL is enabled for secure connection (MongoDB Atlas requires this)
      tls: true                   // Forces MongoDB to use TLS (TLS 1.2 or higher), which is what MongoDB Atlas uses by default
    });

    // Log success message once connected to the MongoDB database
    console.log("Connected to MongoDB");
  } catch (err) {
    // Log error message in case of failure
    console.log("Error connecting to MongoDB");
    // Throw error to stop further execution and potentially handle in an outer scope
    throw err;
  }
};



mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", users)

//error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log("Listen to port", PORT);
});
