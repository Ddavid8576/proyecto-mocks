# Proyecto Mocks - Backend Dockerizado

## Descripción

Este proyecto implementa un backend para la gestión de adopciones de mascotas, con endpoints funcionales para crear, listar y eliminar adopciones. El proyecto está dockerizado, permitiendo ejecutarlo fácilmente en cualquier equipo con Docker.

## Imagen Docker

* Imagen en Docker Hub: [david8576/proyecto-mocks](https://hub.docker.com/r/david8576/proyecto-mocks)

## Requisitos

* Docker
* Docker Compose (opcional, recomendado)
* Node.js (solo si se quiere correr sin Docker)

## Variables de Entorno

Archivo `.env` opcional si se quiere personalizar:

```
MONGO_URL=mongodb://mongo:27017/adoptionsdb
DB_NAME=proyecto_mocks
PORT=8080
```

## Levantar el proyecto

### Usando Docker Compose (recomendado)

```bash
docker compose up -d
```

Esto levantará:

* Contenedor `mongo-mocks` con MongoDB
* Contenedor `proyecto-mocks` con la API backend

### Usando Docker solo

```bash
docker run -d -p 8080:8080 --name proyecto-mocks david8576/proyecto-mocks:latest
```

> Nota: Asegúrate de tener MongoDB accesible desde la URL configurada en MONGO_URL.

## Endpoints

Base URL: `http://localhost:8080/api/adoption`

| Método | Ruta   | Descripción                 | Ejemplo JSON                   |
| ------ | ------ | --------------------------- | ------------------------------ |
| GET    | `/`    | Listar todas las adopciones | -                              |
| POST   | `/`    | Crear una nueva adopción    | `{ "name": "Fido", "age": 3 }` |
| DELETE | `/:id` | Eliminar adopción por ID    | -                              |

## Tests Funcionales

Se incluyen tests funcionales con Mocha para todos los endpoints de `adoption.router.js`. Para correr los tests:

```bash
npm install
npm test
```

Todos los tests deben pasar.

## Notas Adicionales

* Validaciones mínimas implementadas: se evita insertar datos nulos o negativos en `age`.
* Para probar los endpoints se recomienda Postman o cURL.
* Docker asegura que la aplicación funcione en cualquier máquina con los contenedores adecuados.

## Créditos

* Proyecto desarrollado como entrega de prácticas de Docker y Backend.
* Autor: Denynson David Mujica
