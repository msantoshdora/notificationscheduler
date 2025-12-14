import express from "express";
import { createRoutes } from "./routes";

export function startServer() {
  const app = express();
  app.use(express.json());

  createRoutes(app);

  app.listen(3000, () => {
    console.log("Notification Service running on port 3000!");
  });
}