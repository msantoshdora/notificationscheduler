import { Express, Request, Response } from "express";
import { validateNotificationRequest } from "./validators";
import {NotificationService} from "../services/notification.service";

const service = new NotificationService();

export function createRoutes(app: Express) {
  app.post("/api/v1/notifications", (req: Request, res: Response) => {
    console.log('API called!!!');
    try {
        validateNotificationRequest(req.body);

        const {userId, type, payload, sendAt} = req.body;
        service.send({userId, type, payload, sendAt});

        res.json({ status: "OK" });
    } catch (error) {
        res.json({ status: "received wrong data" });
    }
  });

}
