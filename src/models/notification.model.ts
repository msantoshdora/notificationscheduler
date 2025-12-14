import { NotificationType } from "../types/notification.types";

export interface NotificationRequest {
  type: NotificationType;
  userId: string;
  payload: Record<string, any>;
  sendAt?: string; // ISO date string
}