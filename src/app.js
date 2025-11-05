import express from "express";
import adoptionRouter from "./routes/adoption.router.js";
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import { setupSwagger } from "./docs/swagger.js";

const app = express();
app.use(express.json());

app.use("/api/adoption", adoptionRouter);
app.use("/api/mocks", mocksRouter);
app.use("/api/users", usersRouter);

setupSwagger(app);

export default app;

