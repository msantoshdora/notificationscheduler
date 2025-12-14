export interface BaseTemplate {
  supports(templateId: string): boolean;
  render(data: Record<string, any>): string;
}