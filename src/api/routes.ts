import { Express, Request, Response } from "express";
import { validateNotificationRequest } from "./validators";
import {NotificationService} from "../services/notification.service";
import {templates} from "../templates/template-registry";
import {AlertTemplate} from "../templates/alert.template";
import {PromoTemplate} from "../templates/promo.template";


const notificationService = new NotificationService(templates);

export function createRoutes(app: Express) {
  app.post("/api/v1/notifications", (req: Request, res: Response) => {
    console.log('API called!!!');
    try {
        validateNotificationRequest(req.body);

        const {userId, type, templateId, payload, sendAt} = req.body;
       
        notificationService.send({userId, type, templateId, payload, sendAt});

        res.status(202).json({ status: "Notification Accepted Successfully" });
    } catch (error) {
        res.status(400).json({ status: "Error", message: (error as Error).message });
    }
  });

}
