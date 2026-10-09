// خدمة إرسال طلب الاستشارة — معزولة عمداً لتسهيل ربط البريد لاحقاً.
//
// للتفعيل لاحقاً:
//  1. إنشاء مسار خادم (مثل src/app/api/consultation/route.ts) يستخدم Resend
//     ويرسل إلى CONSULTATION_RECIPIENT بموضوع buildConsultationEmailSubject.
//  2. وضع SUBMISSIONS_ENABLED = true وإرسال الحمولة بـ fetch إلى ذلك المسار.
// لا تسجّل البيانات الشخصية في الـ console ولا تخزّنها في المتصفح.

import type { Locale } from "@/i18n/types";
import type {
  ConsultationFormState,
  ConsultationPayload,
  SubmitResult,
} from "@/lib/consultation/types";

export const SUBMISSIONS_ENABLED = false;

const emptyToNull = (value: string): string | null => {
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
};

export function buildConsultationPayload(
  form: ConsultationFormState,
  locale: Locale,
): ConsultationPayload {
  const phoneNumber = emptyToNull(form.phone);

  return {
    fullName: form.fullName.trim(),
    company: emptyToNull(form.company),
    email: form.email.trim(),
    phone: phoneNumber ? `${form.phoneCode} ${phoneNumber}` : null,
    preferredContactMethod: form.contactMethod || null,

    services: form.services,
    otherServiceDescription: form.services.includes("other")
      ? emptyToNull(form.otherDescription)
      : null,
    projectDescription: form.goal.trim(),
    // تُتحقق من وجودها قبل الإرسال في خطوة التحقق.
    projectStage: form.stage as ConsultationPayload["projectStage"],
    expectedStart: form.startTiming || null,
    estimatedBudget: form.budget || null,
    additionalNotes: emptyToNull(form.notes),

    submissionLanguage: locale,
    submittedAt: new Date().toISOString(),
  };
}

export async function submitConsultationRequest(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _payload: ConsultationPayload,
): Promise<SubmitResult> {
  if (!SUBMISSIONS_ENABLED) {
    return { ok: false, reason: "not-configured" };
  }
  // TODO: fetch("/api/consultation", { method: "POST", body: JSON.stringify(_payload) })
  return { ok: false, reason: "not-configured" };
}
