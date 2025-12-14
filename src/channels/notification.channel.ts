export interface NotificationChannel {
  send(message: string, userId: string): Promise<void>;
}