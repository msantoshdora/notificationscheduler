import { BaseTemplate } from "./base.template";

export class AlertTemplate implements BaseTemplate {
   supports(templateId: string): boolean {
    return templateId === "ALERT";
  }

  render(data: Record<string, any>): string {
    return `Alert! ${data.service} service is down.`;
  }
}