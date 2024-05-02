import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://agustinmorro:BocaJrs12@prismadb.iczdgiy.mongodb.net/?retryWrites=true&w=majority&appName=prismadb");
    console.log("conexion a mongo exitosa")
  } catch (error) {
    console.log(error);
  }
};
