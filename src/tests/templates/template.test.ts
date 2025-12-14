import { TemplateService } from "../../services/template.service";
import { AlertTemplate } from "../../templates/alert.template";

describe("TemplateService", () => {
  const service = new TemplateService([new AlertTemplate()]);

  it("returns JSON if templateId missing", () => {
    const result = service.render(undefined, { a: 1 });
    expect(result).toBe(JSON.stringify({ a: 1 }));
  });

  it("renders template when found", () => {
    const result = service.render("ALERT", { service: "API" });
    expect(result).toContain("API");
  });

  it("throws if template not found", () => {
    expect(() =>
      service.render("UNKNOWN", {})
    ).toThrow("Template not found");
  });
});
