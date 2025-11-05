import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
  });
});