import { ChannelType } from "../types/channel.types";
import { NotificationChannel } from "../channels/notification.channel";
import { EmailChannel } from "../channels/email.channel";
import { SlackChannel } from "../channels/slack.channel";
import { InAppChannel } from "../channels/inapp.channel";

export class ChannelResolver {
  static resolve(channel: ChannelType): NotificationChannel {
    switch (channel) {
      case ChannelType.EMAIL:
        return new EmailChannel();
      case ChannelType.SLACK:
        return new SlackChannel();
      case ChannelType.IN_APP:
        return new InAppChannel();
      default:
        throw new Error("Unsupported channel");
    }
  }
}