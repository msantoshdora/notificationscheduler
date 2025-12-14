import { Express, Request, Response } from "express";
import { validateNotificationRequest } from "./validators";

export function createRoutes(app: Express) {
  app.get("/api/v1/notifications", (req: Request, res: Response) => {
    try {
        validateNotificationRequest(req.body);
        res.json({ status: "OK" });
    } catch (error) {
        res.json({ status: "ERROR" });
    }
  });

}
