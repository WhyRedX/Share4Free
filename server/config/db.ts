import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    console.log("connection error");
  }

  const connection = mongoose.connection;

  if (connection.readyState >= 1) {
    console.log("MongoDB connected");
    return;
  }
  connection.on("error", (error) => console.log("connection failed"));
};

export default connectDB;
