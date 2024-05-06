import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import cartsRoutes from "./routes/carts.routes.js";

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartsRoutes);

export default app;
