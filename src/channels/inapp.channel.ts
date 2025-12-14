import { NotificationChannel } from "./notification.channel";

export class InAppChannel implements NotificationChannel {
  send(message: string, userId: string): void {
    console.log(`[In App] To ${userId}: ${message}`);
  }
}
