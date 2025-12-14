import { NotificationRequest } from "../models/notification.model";
import { NotificationType } from "../types/notification.types";
import { ChannelType } from "../types/channel.types";
import { ChannelResolver } from "./channel-resolver.service";
import { SchedulerService } from "./scheduler.service";
import {TemplateService} from "./template.service";

export class NotificationService {

    send(notification: NotificationRequest) {
      try {
            const execute = () => {
            const channelTypes: ChannelType[] = this.mapNotificationTypeToChannel(notification.type);

            const channels = channelTypes.map(type => {
                return ChannelResolver.resolve(type);
            });
            const template = TemplateService.render(notification.templateId, notification.payload);
            
            channels.forEach(async (channel) =>{
                try {
                    await channel.send(template, notification.userId);
                } catch (error) {
                    console.error(`Error sending via channel:`, error);
                }
            });
            };

            if (notification.sendAt) {
                console.log("Scheduling notification for later:", notification.sendAt);
                SchedulerService.schedule(
                    execute,
                    new Date(notification.sendAt)
                ); 
            } else {
                console.log("Sending notification immediately");
                execute();
            }
        } catch (error) {
            throw new Error(`Failed to send notification: ${(error as Error).message}`);
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