import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateMockUsers } from "../mocking/mockingUsers.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

/* === /api/mocks/mockingpets === */
router.get("/mockingpets", (req, res) => {
  const pets = [];

  for (let i = 0; i < 10; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.petName(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
    });
  }

  res.json({ status: "success", payload: pets });
});

/* === /api/mocks/mockingusers === */
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: "success", payload: users });
});

/* === /api/mocks/generateData === */
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.query;

    // Generar usuarios
    const newUsers = generateMockUsers(Number(users));
    await UserModel.insertMany(newUsers);

    // Generar mascotas
    const newPets = [];
    for (let i = 0; i < pets; i++) {
      newPets.push({
        name: faker.animal.petName(),
        species: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 15 }),
      });
    }
    await PetModel.insertMany(newPets);

    res.json({
      status: "success",
      inserted: { users: newUsers.length, pets: newPets.length },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
