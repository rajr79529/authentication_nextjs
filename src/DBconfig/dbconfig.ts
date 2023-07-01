import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected Successfully");
    });
    connection.on("error", (err) => {
      console.log("Error in connecting MongoDB", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
