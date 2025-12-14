import { NotificationChannel } from "./notification.channel";

export class EmailChannel implements NotificationChannel {
  async send(message: string, userId: string): Promise<void> {
    console.log(`[EMAIL] To ${userId}: ${message}`);
  }
}
