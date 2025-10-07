# Proyecto Mocks API 🐾

## Descripción
Este proyecto implementa un router `/api/mocks` con endpoints para generar datos falsos de usuarios y mascotas, e insertarlos en MongoDB.

### Endpoints principales:
- `GET /api/mocks/mockingpets` → Genera 10 mascotas falsas.
- `GET /api/mocks/mockingusers` → Genera 50 usuarios simulados (sin guardar en BD).
- `POST /api/mocks/generateData?users=5&pets=10` → Inserta usuarios y mascotas reales en MongoDB.
- `GET /api/users` y `GET /api/pets` → Permiten verificar los registros insertados.

## Instalación
```bash
git clone https://github.com/TU_USUARIO/proyecto-mocks.git
cd proyecto-mocks
npm install
node src/app.js
Tecnologías usadas
Node.js

Express

MongoDB + Mongoose

Bcrypt

Faker.js

Autor
Denynson Mujica✨