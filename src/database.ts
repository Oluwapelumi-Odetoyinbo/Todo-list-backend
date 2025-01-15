import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/church-report";

export const connectToDatabase = async (): Promise<void> => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      process.exit(1); // Exit the app if the connection fails
    }
  };