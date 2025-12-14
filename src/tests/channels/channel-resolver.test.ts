import { ChannelResolver } from "../../services/channel-resolver.service";
import { ChannelType } from "../../types/channel.types";
import { EmailChannel } from "../../channels/email.channel";

describe("ChannelResolver", () => {
  it("resolves EMAIL channel", () => {
    const channel = ChannelResolver.resolve(ChannelType.EMAIL);
    expect(channel).toBeInstanceOf(EmailChannel);
  });

  it("throws on unsupported channel", () => {
    expect(() =>
      ChannelResolver.resolve("INVALID" as any)
    ).toThrow();
  });
});
