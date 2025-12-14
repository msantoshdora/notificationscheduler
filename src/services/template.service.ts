const templates: Record<string, string> = {
  ALERT: "Alert! {{service}} service is down.",
  PROMO: "Special offer for {{name}}. Free shipping on orders over $50!",
};

export class TemplateService {
  static render(templateId: string | undefined, data: Record<string, any>): string {
    try {
        if (!templateId) {
         return JSON.stringify(data);
        }

        let template = templates[templateId];

        if (!template) {
          throw new Error("Template not found");
        }

        Object.keys(data).forEach((key) => {
        template = template.replace(`{{${key}}}`, String(data[key]));
        });

        return template;
        } catch (error) {
            throw new Error("Template not found. Defined Wrong templateId");
        }
   }
}