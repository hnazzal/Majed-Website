// أنواع طلب الاستشارة. المعرّفات ثابتة وغير مترجمة؛ النصوص المعروضة للمستخدم
// موجودة في src/messages/{ar,en}.ts ضمن consultationRequest.

import type { Locale } from "@/i18n/types";

export const SERVICE_IDS = [
  "technology-consulting",
  "artificial-intelligence",
  "development-customization",
  "data-business-intelligence",
  "cybersecurity",
  "infrastructure-cloud",
  "implementation-integration",
  "project-management-qa",
  "other",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const PROJECT_STAGE_IDS = [
  "initial-idea",
  "planning",
  "in-progress",
  "existing-system",
  "not-sure",
] as const;
export type ProjectStageId = (typeof PROJECT_STAGE_IDS)[number];

export const START_TIMING_IDS = [
  "asap",
  "within-1-month",
  "within-1-3-months",
  "within-3-6-months",
  "not-decided",
] as const;
export type StartTimingId = (typeof START_TIMING_IDS)[number];

export const BUDGET_IDS = [
  "under-5k",
  "5k-15k",
  "15k-50k",
  "above-50k",
  "prefer-to-discuss",
] as const;
export type BudgetId = (typeof BUDGET_IDS)[number];

export const CONTACT_METHOD_IDS = ["email", "phone", "either"] as const;
export type ContactMethodId = (typeof CONTACT_METHOD_IDS)[number];

// حالة النموذج أثناء التعبئة (تبقى في React state فقط).
export type ConsultationFormState = {
  services: ServiceId[];
  otherDescription: string;
  goal: string;
  stage: ProjectStageId | "";
  startTiming: StartTimingId | "";
  budget: BudgetId | "";
  fullName: string;
  company: string;
  email: string;
  phoneCode: string;
  phone: string;
  contactMethod: ContactMethodId | "";
  notes: string;
  consent: boolean;
};

// الحمولة التي ستُرسل لاحقاً إلى نقطة نهاية الخادم (Resend).
export type ConsultationPayload = {
  fullName: string;
  company: string | null;
  email: string;
  phone: string | null;
  preferredContactMethod: ContactMethodId | null;

  services: ServiceId[];
  otherServiceDescription: string | null;
  projectDescription: string;
  projectStage: ProjectStageId;
  expectedStart: StartTimingId | null;
  estimatedBudget: BudgetId | null;
  additionalNotes: string | null;

  submissionLanguage: Locale;
  // ISO 8601
  submittedAt: string;
};

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "failed" };
