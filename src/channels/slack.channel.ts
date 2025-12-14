import { NotificationChannel } from "./notification.channel";

export class SlackChannel implements NotificationChannel {
  send(message: string, userId: string): void {
    console.log(`[SLACK] To ${userId}: ${message}`);
  }
}
