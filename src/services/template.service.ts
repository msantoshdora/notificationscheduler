import { BaseTemplate } from "../templates/base.template";

export class TemplateService {
    constructor(private readonly templates: BaseTemplate[]) {}

  render(
    templateId: string | undefined,
    data: Record<string, any>
  ): string {
    try {
        if (!templateId) {
        return JSON.stringify(data);
        }

        const template = this.templates.find(t =>
          t.supports(templateId)
        );

        if (!template) {
        throw new Error(`Template not found: ${templateId}`);
        }

        return template.render(data);
    } catch (error) {
        throw new Error(`Failed to render template: ${(error as Error).message}`);  
    }
   }
}