import { Router } from "express";

const router = Router();

// 🟢 Obtener todas las adopciones
router.get("/", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Toby", species: "Perro" },
    { id: 2, name: "Michi", species: "Gato" },
  ]);
});

// 🟢 Crear una adopción
router.post("/", (req, res) => {
  const { name, species, age } = req.body;
  if (!name || !species || !age) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const newPet = { id: Date.now(), name, species, age };
  res.status(201).json(newPet);
});

// 🟢 Eliminar adopción
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Validar formato de ID
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ error: "Formato de ID no válido" });
  }

  // 🔹 Simulamos que el ID no existe en el mock
  const adoptionExists = false; // No hay persistencia, así que siempre devolvemos no encontrado

  if (!adoptionExists) {
    return res.status(404).json({ error: "Adopción no encontrada" });
  }

  // Si existiera (caso real)
  res.status(200).json({ message: "Adopción eliminada correctamente" });
});


export default router;

