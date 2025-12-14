import { TemplateService } from "../services/template.service";
import { AlertTemplate } from "./alert.template";
import { PromoTemplate } from "./promo.template";

export const templates = new TemplateService([new AlertTemplate(), new PromoTemplate()]);