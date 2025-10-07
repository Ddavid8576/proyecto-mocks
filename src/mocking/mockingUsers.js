import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export const generateMockUsers = (num) => {
  const users = [];

  for (let i = 0; i < num; i++) {
    const hashedPassword = bcrypt.hashSync("coder123", 10);
    const role = Math.random() < 0.5 ? "user" : "admin";

    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role,
      pets: [],
    });
  }

  return users;
};
