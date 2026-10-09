// تنسيق البريد المستقبلي لطلبات الاستشارة. لا يرسل شيئاً — يُستخدم لاحقاً من
// نقطة نهاية الخادم عند ربط Resend.

import type { ConsultationPayload } from "@/lib/consultation/types";

// عنوان المستلم (وليس المُرسِل).
export const CONSULTATION_RECIPIENT = "M.khader@mjc-jo.com";

export function buildConsultationEmailSubject(
  payload: Pick<ConsultationPayload, "company" | "fullName">,
): string {
  return `New Consultation Request — ${payload.company ?? payload.fullName}`;
}
