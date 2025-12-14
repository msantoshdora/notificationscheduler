import { BaseTemplate } from "./base.template";

export class PromoTemplate implements BaseTemplate {
   supports(templateId: string): boolean {
    return templateId === "PROMO";
  }

  render(data: Record<string, any>): string {
    return `Special offer for ${data.name}. Free shipping on orders over $50!`;
  }
}