import { NotificationService } from "../../services/notification.service";
import { TemplateService } from "../../services/template.service";

describe("NotificationService", () => {
  const templateService = {
    render: jest.fn().mockReturnValue("msg"),
  } as unknown as TemplateService;

  it("sends immediately when sendAt missing", () => {
    const service = new NotificationService(templateService);
    service.send({
      type: "INFO",
      userId: "u1",
      payload: {},
    });

    expect(templateService.render).toHaveBeenCalled();
  });
});
