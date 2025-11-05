import { Router } from "express";
import { generateMockUsers } from "../mocks/mockUsers.js";
import { generateMockPets } from "../mocks/mockPets.js";

const router = Router();

/**
 * @route GET /api/mocks/mockingusers
 * @desc Genera usuarios de prueba (por defecto 10)
 */
router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateMockUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al generar usuarios mock", details: error.message });
  }
});

/**
 * @route GET /api/mocks/generateData?users=5&pets=10
 * @desc Genera usuarios y mascotas mockeadas con validaciones
 */
router.get("/generateData", async (req, res) => {
  try {
    let { users = 10, pets = 10 } = req.query;
    users = Number(users);
    pets = Number(pets);

    if (isNaN(users) || isNaN(pets)) {
      return res.status(400).json({ error: "Los parámetros 'users' y 'pets' deben ser números." });
    }

    if (users < 0 || pets < 0) {
      return res.status(400).json({ error: "Los parámetros 'users' y 'pets' no pueden ser negativos." });
    }

    const userList = await generateMockUsers(users);
    const petList = generateMockPets(pets, userList);

    res.status(200).json({
      status: "success",
      totalUsers: userList.length,
      totalPets: petList.length,
      data: { users: userList, pets: petList },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al generar datos", details: error.message });
  }
});

/**
 * @route GET /api/mocks/docs
 * @desc Documentación simple de los endpoints de mocks
 */
router.get("/docs", (req, res) => {
  res.status(200).json({
    endpoints: {
      "/api/mocks/mockingusers": "Genera 10 usuarios aleatorios con contraseña encriptada",
      "/api/mocks/generateData?users=5&pets=10": "Genera usuarios y mascotas. Parámetros opcionales: users, pets",
    },
    defaults: { users: 10, pets: 10 },
  });
});

export default router;
