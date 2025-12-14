import { NotificationChannel } from "./notification.channel";

export class SlackChannel implements NotificationChannel {
  async send(message: string, userId: string): Promise<void> {
    console.log(`[SLACK] To ${userId}: ${message}`);
  }
}
