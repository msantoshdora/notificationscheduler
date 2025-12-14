import request from "supertest";
import express from "express";
import { createRoutes } from "../../api/routes";

describe("POST /api/v1/notifications", () => {
  const app = express();
  app.use(express.json());
  createRoutes(app);

  it("returns 202 for valid request", async () => {
    const res = await request(app)
      .post("/api/v1/notifications")
      .send({
        type: "INFO",
        userId: "user-1",
        payload: { name: "santosh" },
      });

    expect(res.status).toBe(202);
  });

  it("returns 400 for invalid request", async () => {
    const res = await request(app)
      .post("/api/v1/notifications")
      .send({});

    expect(res.status).toBe(400);
  });
});
