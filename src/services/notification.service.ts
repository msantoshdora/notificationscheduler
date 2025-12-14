import { NotificationRequest } from "../models/notification.model";
import { NotificationType } from "../types/notification.types";
import { ChannelType } from "../types/channel.types";
import { ChannelResolver } from "./channel-resolver.service";

export class NotificationService {
    send(notification: NotificationRequest) {
        try {
        const channelTypes: ChannelType[] = this.mapNotificationTypeToChannel(notification.type);

        const channels = channelTypes.map(type => {
            return ChannelResolver.resolve(type);
        });

        const template = `Notification of type ${notification.type} with payload ${JSON.stringify(notification.payload)} send at ${notification.sendAt}`;

        channels.forEach(async channel =>{
          await channel.send(template, notification.userId)});
        } catch (error) {
            console.error("Failed to send notification:", error);
        }
    }

    private mapNotificationTypeToChannel(type: NotificationType): ChannelType[] {
        switch (type) {
            case "ERROR":
            case "ALERT":
            case "SYSTEM":
                return [ChannelType.SLACK];
            case "PROMOTION":
                return [ChannelType.EMAIL];
            case "INFO":
            case "WARN":
            default:
                return [ChannelType.IN_APP, ChannelType.EMAIL];
        }
    }
}