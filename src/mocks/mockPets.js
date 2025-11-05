import { fakerES as faker } from "@faker-js/faker";

export const generateMockPets = (count = 10, users = []) => {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.dog(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
      owner: users.length ? faker.helpers.arrayElement(users).email : null,
    });
  }
  return pets;
};
