import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME, // Use from .env file for flexibility
      useNewUrlParser: true, // Optional but recommended
      useUnifiedTopology: true, // Optional but recommended
    })
    .then(() => {
      console.log("✅ Connected to the database!");
    })
    .catch((err) => {
      console.error("❌ Error connecting to database:", err);
    });
};
