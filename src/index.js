import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
const port = process.env.PORT || 3000;
app.listen(3000);

console.log("Server on port", port);
