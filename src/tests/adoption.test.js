import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const { expect } = chai;
chai.use(chaiHttp);

const requester = chai.request.agent(app);

describe("🔍 TEST FUNCIONALES - adoption.router.js", () => {
  it("Debería obtener todas las adopciones (GET /api/adoption)", async () => {
    const res = await requester.get("/api/adoption");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });

  it("Debería crear una nueva adopción (POST /api/adoption)", async () => {
    const petData = {
      name: "FirulaisTest",
      species: "Perro",
      age: 3,
    };

    const res = await requester.post("/api/adoption").send(petData);
    expect(res).to.have.status(201);
    expect(res.body).to.have.property("name", "FirulaisTest");
  });

  it("Debería devolver error si faltan datos (POST /api/adoption)", async () => {
    const res = await requester.post("/api/adoption").send({});
    expect(res).to.have.status(400);
    expect(res.body).to.have.property("error");
  });

  it("Debería manejar correctamente eliminación de adopción (DELETE /api/adoption/:id)", async () => {
    const fakeId = "6736ac1b9bdf0b9b1a000000";
    const res = await requester.delete(`/api/adoption/${fakeId}`);
    expect(res).to.have.status(404);
    expect(res.body).to.have.property("error");
  });
});

