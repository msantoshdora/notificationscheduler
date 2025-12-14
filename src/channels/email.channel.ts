import { NotificationChannel } from "./notification.channel";

export class EmailChannel implements NotificationChannel {
  send(message: string, userId: string): void {
    console.log(`[EMAIL] To ${userId}: ${message}`);
  }
}
