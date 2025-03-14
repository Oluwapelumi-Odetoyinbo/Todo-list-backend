import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MongoDB connection string (MONGO_URI) is missing!");
  process.exit(1);
}

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
