import { NotificationChannel } from "./notification.channel";

export class InAppChannel implements NotificationChannel {
  async send(message: string, userId: string): Promise<void> {
    console.log(`[In App] To ${userId}: ${message}`);
  }
}
