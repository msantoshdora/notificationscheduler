import { NotificationRequest } from "../models/notification.model";
import { NotificationType } from "../types/notification.types";
import { ChannelType } from "../types/channel.types";
import { ChannelResolver } from "./channel-resolver.service";
import { SchedulerService } from "./scheduler.service";
import {TemplateService} from "./template.service";
import { AlertTemplate } from "../templates/alert.template";
import { PromoTemplate } from "../templates/promo.template";


const CHANNEL_MAP: Record<NotificationType, ChannelType[]> = {
  ERROR: [ChannelType.SLACK],
  ALERT: [ChannelType.SLACK],
  SYSTEM: [ChannelType.SLACK],
  PROMOTION: [ChannelType.EMAIL],
  INFO: [ChannelType.IN_APP, ChannelType.EMAIL],
  WARN: [ChannelType.IN_APP, ChannelType.EMAIL],
};

export class NotificationService {
    constructor(
    private readonly templateService: TemplateService,
  ) {}

    send(notification: NotificationRequest) {
      try {
            const execute = () => {
            const channelTypes: ChannelType[] = CHANNEL_MAP[notification.type];

            const channels = channelTypes.map(type => {
                return ChannelResolver.resolve(type);
            });

            const template =  this.templateService.render(notification.templateId, notification.payload);
            
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
}