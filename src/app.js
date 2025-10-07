import express from "express";
import { connectDB } from "./db.js";
import mocksRouter from "./routes/mocks.router.js";
import { UserModel } from "./models/user.model.js";
import { PetModel } from "./models/pet.model.js";

const app = express();
app.use(express.json());

// Conexión a MongoDB
connectDB();

// ✅ Usa el router en la base /api/mocks
app.use("/api/mocks", mocksRouter);

// Endpoints de verificación
app.get("/api/users", async (req, res) => {
  const users = await UserModel.find();
  res.json({ users });
});

app.get("/api/pets", async (req, res) => {
  const pets = await PetModel.find();
  res.json({ pets });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`✅ Servidor en http://localhost:${PORT}`));
