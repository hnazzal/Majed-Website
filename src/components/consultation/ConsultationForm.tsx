"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Check,
  ChartColumn,
  ClipboardCheck,
  Cloud,
  CodeXml,
  Compass,
  Ellipsis,
  Info,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ConsultationRequestContent, Locale } from "@/i18n/types";
import {
  type ConsultationFormState,
  type ServiceId,
} from "@/lib/consultation/types";
import {
  SUBMISSIONS_ENABLED,
  buildConsultationPayload,
  submitConsultationRequest,
} from "@/lib/consultation/submit";

const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  "technology-consulting": Compass,
  "artificial-intelligence": BrainCircuit,
  "development-customization": CodeXml,
  "data-business-intelligence": ChartColumn,
  cybersecurity: ShieldCheck,
  "infrastructure-cloud": Cloud,
  "implementation-integration": Workflow,
  "project-management-qa": ClipboardCheck,
  other: Ellipsis,
};

const GOAL_MIN = 20;
const GOAL_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const INITIAL_STATE: ConsultationFormState = {
  services: [],
  otherDescription: "",
  goal: "",
  stage: "",
  startTiming: "",
  budget: "",
  fullName: "",
  company: "",
  email: "",
  phoneCode: "+962",
  phone: "",
  contactMethod: "",
  notes: "",
  consent: false,
};

type Errors = Partial<Record<string, string>>;
type Step = 0 | 1 | 2;

function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === "") return true; // اختياري
  if (!/^[\d\s\-()]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "").length;
  return digits >= 6 && digits <= 14;
}

function validateStep(
  step: Step,
  form: ConsultationFormState,
  c: ConsultationRequestContent,
): Errors {
  const errors: Errors = {};

  if (step === 0) {
    if (form.services.length === 0) errors.services = c.step1.errors.required;
  }

  if (step === 1) {
    const goal = form.goal.trim();
    if (goal.length === 0) errors.goal = c.step2.goal.errors.required;
    else if (goal.length < GOAL_MIN) errors.goal = c.step2.goal.errors.min;
    else if (form.goal.length > GOAL_MAX) errors.goal = c.step2.goal.errors.max;
    if (form.stage === "") errors.stage = c.step2.stage.error;
  }

  if (step === 2) {
    if (form.fullName.trim() === "") errors.fullName = c.step3.fullName.error;
    const email = form.email.trim();
    if (email === "") errors.email = c.step3.email.errors.required;
    else if (!EMAIL_PATTERN.test(email)) errors.email = c.step3.email.errors.invalid;
    if (!isValidPhone(form.phone)) errors.phone = c.step3.phone.error;
    if (!form.consent) errors.consent = c.step3.consent.error;
  }

  return errors;
}

// ---------------------------------------------------------------------------
// عناصر مساعدة
// ---------------------------------------------------------------------------

const inputClass =
  "block w-full rounded-lg border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:border-gold aria-[invalid=true]:border-red-600";

function Field({
  id,
  label,
  optional,
  optionalLabel,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  optionalLabel: string;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-navy">
          {label}
        </label>
        {optional && (
          <span className="text-xs text-ink-muted">{optionalLabel}</span>
        )}
      </div>
      {children}
      <div className="mt-1.5 flex items-start justify-between gap-3 text-xs">
        <p
          id={`${id}-error`}
          className={error ? "text-red-700" : "sr-only"}
        >
          {error}
        </p>
        {hint}
      </div>
    </div>
  );
}

function ChoiceGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
  optional,
  optionalLabel,
  error,
  groupId,
}: {
  name: string;
  legend: string;
  options: { id: T; label: string }[];
  value: T | "";
  onChange: (next: T) => void;
  optional?: boolean;
  optionalLabel: string;
  error?: string;
  groupId: string;
}) {
  return (
    <fieldset
      aria-describedby={error ? `${groupId}-error` : undefined}
      aria-invalid={error ? true : undefined}
    >
      <legend className="mb-3 flex w-full items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-navy">{legend}</span>
        {optional && <span className="text-xs text-ink-muted">{optionalLabel}</span>}
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const checked = value === option.id;
          return (
            <label key={option.id} className="relative cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={checked}
                onChange={() => onChange(option.id)}
                className="peer sr-only"
              />
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold/50 ${
                  checked
                    ? "border-gold bg-gold-soft font-medium text-navy"
                    : "border-border bg-surface text-ink-muted hover:border-navy/30"
                }`}
              >
                {checked && <Check size={14} className="text-gold" aria-hidden />}
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
      <p id={`${groupId}-error`} className={error ? "mt-2 text-xs text-red-700" : "sr-only"}>
        {error}
      </p>
    </fieldset>
  );
}

// ---------------------------------------------------------------------------
// النموذج
// ---------------------------------------------------------------------------

export function ConsultationForm({
  content: c,
  locale,
}: {
  content: ConsultationRequestContent;
  locale: Locale;
}) {
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<ConsultationFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [submitNotice, setSubmitNotice] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);

  // نقل التركيز إلى عنوان الخطوة عند التنقل (لقارئات الشاشة ولوحة المفاتيح).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const update = <K extends keyof ConsultationFormState>(
    key: K,
    value: ConsultationFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // إزالة رسالة الخطأ الخاصة بالحقل عند التعديل.
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  };

  const toggleService = (id: ServiceId) => {
    update(
      "services",
      form.services.includes(id)
        ? form.services.filter((s) => s !== id)
        : [...form.services, id],
    );
  };

  const focusFirstError = (found: Errors) => {
    const order = ["services", "goal", "stage", "fullName", "email", "phone", "consent"];
    const first = order.find((key) => found[key]);
    if (!first) return;
    requestAnimationFrame(() => {
      const el =
        document.getElementById(`consultation-${first}`) ??
        document.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
    });
  };

  // التحقق الفوري عند مغادرة حقل في الخطوة الأخيرة (زر الإرسال معطّل حالياً).
  const validateOnBlur = (key: string) => {
    const message = validateStep(2, form, c)[key];
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[key] = message;
      else delete next[key];
      return next;
    });
  };

  const goNext = () => {
    const found = validateStep(step, form, c);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError(found);
      return;
    }
    setStep((s) => (s < 2 ? ((s + 1) as Step) : s));
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => (s > 0 ? ((s - 1) as Step) : s));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 2) {
      goNext();
      return;
    }

    // الخطوة الأخيرة: التحقق الكامل ثم الإرسال عبر الخدمة المعزولة.
    // (الزر معطّل حالياً حتى تفعيل خدمة البريد، فلا يصل التنفيذ إلى هنا فعلياً.)
    const allErrors = {
      ...validateStep(0, form, c),
      ...validateStep(1, form, c),
      ...validateStep(2, form, c),
    };
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) {
      focusFirstError(allErrors);
      return;
    }
    const result = await submitConsultationRequest(
      buildConsultationPayload(form, locale),
    );
    if (!result.ok) setSubmitNotice(true);
  };

  const Next = locale === "ar" ? ArrowLeft : ArrowRight;
  const Prev = locale === "ar" ? ArrowRight : ArrowLeft;
  const statusText = c.stepStatus
    .replace("{current}", String(step + 1))
    .replace("{total}", String(c.steps.length));

  const showOther = form.services.includes("other");
  const err = (key: string) => errors[key];
  const describedBy = (key: string) => (err(key) ? `consultation-${key}-error` : undefined);

  return (
    <div className="mx-auto w-full max-w-[880px]">
      {/* مؤشر التقدم */}
      <nav aria-label={c.progressLabel} className="mb-8">
        <ol className="grid grid-cols-3 gap-2 sm:gap-4">
          {c.steps.map((label, index) => {
            const state = index < step ? "done" : index === step ? "active" : "todo";
            return (
              <li
                key={label}
                aria-current={state === "active" ? "step" : undefined}
                className="min-w-0"
              >
                <div
                  className={`h-1 rounded-full ${
                    state === "active"
                      ? "bg-gold"
                      : state === "done"
                        ? "bg-navy"
                        : "bg-border"
                  }`}
                  aria-hidden
                />
                <div className="mt-3 flex items-start gap-2">
                  <span
                    className={`text-sm font-bold tabular-nums ${
                      state === "active"
                        ? "text-gold"
                        : state === "done"
                          ? "text-navy"
                          : "text-ink-muted/60"
                    }`}
                  >
                    {state === "done" ? (
                      <Check size={16} className="mt-0.5" aria-hidden />
                    ) : (
                      `0${index + 1}`
                    )}
                  </span>
                  <span
                    className={`text-xs leading-5 sm:text-sm ${
                      state === "todo" ? "text-ink-muted" : "font-medium text-navy"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="sr-only" aria-live="polite">
          {statusText}: {c.steps[step]}
        </p>
      </nav>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(16,39,67,0.04)] sm:p-10"
      >
        {/* الخطوة 1 */}
        {step === 0 && (
          <section>
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-bold tracking-tight text-navy focus:outline-none"
            >
              {c.step1.heading}
            </h2>
            <p className="mt-2 text-base leading-7 text-ink-muted">
              {c.step1.description}
            </p>

            <fieldset
              id="consultation-services"
              tabIndex={-1}
              aria-describedby={describedBy("services")}
              aria-invalid={err("services") ? true : undefined}
              className="mt-8 focus:outline-none"
            >
              <legend className="sr-only">{c.step1.heading}</legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {c.step1.options.map((option) => {
                  const checked = form.services.includes(option.id);
                  const Icon = SERVICE_ICONS[option.id];
                  return (
                    <label key={option.id} className="relative block cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value={option.id}
                        checked={checked}
                        onChange={() => toggleService(option.id)}
                        className="peer sr-only"
                      />
                      <span
                        className={`flex h-full min-h-[92px] flex-col items-start gap-3 rounded-xl border p-4 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold/50 ${
                          checked
                            ? "border-gold bg-gold-soft text-navy"
                            : "border-border bg-surface text-navy hover:border-navy/30"
                        }`}
                      >
                        <span className="flex w-full items-start justify-between">
                          <Icon
                            size={22}
                            strokeWidth={1.6}
                            className={checked ? "text-gold" : "text-navy/70"}
                            aria-hidden
                          />
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                              checked
                                ? "border-gold bg-gold text-white"
                                : "border-border text-transparent"
                            }`}
                            aria-hidden
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </span>
                        <span className="text-sm font-semibold leading-snug">
                          {option.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <p
                id="consultation-services-error"
                className={err("services") ? "mt-3 text-sm text-red-700" : "sr-only"}
              >
                {err("services")}
              </p>
            </fieldset>

            {showOther && (
              <div className="mt-6">
                <Field
                  id="consultation-otherDescription"
                  label={c.step1.otherLabel}
                  optional
                  optionalLabel={c.optionalLabel}
                >
                  <input
                    id="consultation-otherDescription"
                    name="otherDescription"
                    type="text"
                    value={form.otherDescription}
                    onChange={(e) => update("otherDescription", e.target.value)}
                    placeholder={c.step1.otherPlaceholder}
                    maxLength={200}
                    className={`${inputClass} border-border`}
                  />
                </Field>
              </div>
            )}
          </section>
        )}

        {/* الخطوة 2 */}
        {step === 1 && (
          <section className="space-y-8">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-bold tracking-tight text-navy focus:outline-none"
            >
              {c.step2.heading}
            </h2>

            <Field
              id="consultation-goal"
              label={c.step2.goal.label}
              optionalLabel={c.optionalLabel}
              error={err("goal")}
              hint={
                <span
                  className={`shrink-0 tabular-nums ${
                    form.goal.length > GOAL_MAX ? "text-red-700" : "text-ink-muted"
                  }`}
                  dir="ltr"
                >
                  {form.goal.length} / {GOAL_MAX}
                </span>
              }
            >
              <textarea
                id="consultation-goal"
                name="goal"
                rows={6}
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
                placeholder={c.step2.goal.placeholder}
                aria-required="true"
                aria-invalid={err("goal") ? true : undefined}
                aria-describedby={describedBy("goal")}
                className={`${inputClass} resize-y ${err("goal") ? "border-red-600" : "border-border"}`}
              />
            </Field>

            <ChoiceGroup
              name="stage"
              groupId="consultation-stage"
              legend={c.step2.stage.label}
              options={c.step2.stage.options}
              value={form.stage}
              onChange={(v) => update("stage", v)}
              optionalLabel={c.optionalLabel}
              error={err("stage")}
            />

            <ChoiceGroup
              name="startTiming"
              groupId="consultation-startTiming"
              legend={c.step2.startTiming.label}
              options={c.step2.startTiming.options}
              value={form.startTiming}
              onChange={(v) => update("startTiming", v)}
              optional
              optionalLabel={c.optionalLabel}
            />

            <ChoiceGroup
              name="budget"
              groupId="consultation-budget"
              legend={c.step2.budget.label}
              options={c.step2.budget.options}
              value={form.budget}
              onChange={(v) => update("budget", v)}
              optional
              optionalLabel={c.optionalLabel}
            />
          </section>
        )}

        {/* الخطوة 3 */}
        {step === 2 && (
          <section className="space-y-6">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-bold tracking-tight text-navy focus:outline-none"
            >
              {c.step3.heading}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                id="consultation-fullName"
                label={c.step3.fullName.label}
                optionalLabel={c.optionalLabel}
                error={err("fullName")}
              >
                <input
                  id="consultation-fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  onBlur={() => validateOnBlur("fullName")}
                  aria-required="true"
                  aria-invalid={err("fullName") ? true : undefined}
                  aria-describedby={describedBy("fullName")}
                  className={`${inputClass} ${err("fullName") ? "border-red-600" : "border-border"}`}
                />
              </Field>

              <Field
                id="consultation-company"
                label={c.step3.company.label}
                optional
                optionalLabel={c.optionalLabel}
              >
                <input
                  id="consultation-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={`${inputClass} border-border`}
                />
              </Field>

              <Field
                id="consultation-email"
                label={c.step3.email.label}
                optionalLabel={c.optionalLabel}
                error={err("email")}
              >
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  dir="ltr"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => validateOnBlur("email")}
                  placeholder={c.step3.email.placeholder}
                  aria-required="true"
                  aria-invalid={err("email") ? true : undefined}
                  aria-describedby={describedBy("email")}
                  className={`${inputClass} text-start ${err("email") ? "border-red-600" : "border-border"}`}
                />
              </Field>

              <Field
                id="consultation-phone"
                label={c.step3.phone.label}
                optional
                optionalLabel={c.optionalLabel}
                error={err("phone")}
              >
                <div className="flex gap-2" dir="ltr">
                  <select
                    aria-label={c.step3.phone.codeLabel}
                    name="phoneCode"
                    value={form.phoneCode}
                    onChange={(e) => update("phoneCode", e.target.value)}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    style={{ width: "9.5rem" }}
                    className={`${inputClass} shrink-0 border-border px-2`}
                  >
                    {c.step3.phone.countries.map((country) => (
                      <option key={`${country.code}-${country.label}`} value={country.code}>
                        {country.label} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    id="consultation-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    onBlur={() => validateOnBlur("phone")}
                    placeholder={c.step3.phone.placeholder}
                    aria-invalid={err("phone") ? true : undefined}
                    aria-describedby={describedBy("phone")}
                    className={`${inputClass} min-w-0 flex-1 ${err("phone") ? "border-red-600" : "border-border"}`}
                  />
                </div>
              </Field>
            </div>

            <ChoiceGroup
              name="contactMethod"
              groupId="consultation-contactMethod"
              legend={c.step3.contactMethod.label}
              options={c.step3.contactMethod.options}
              value={form.contactMethod}
              onChange={(v) => update("contactMethod", v)}
              optional
              optionalLabel={c.optionalLabel}
            />

            <Field
              id="consultation-notes"
              label={c.step3.notes.label}
              optional
              optionalLabel={c.optionalLabel}
            >
              <textarea
                id="consultation-notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                maxLength={1000}
                className={`${inputClass} resize-y border-border`}
              />
            </Field>

            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  id="consultation-consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => {
                    update("consent", e.target.checked);
                    if (!e.target.checked) {
                      setErrors((prev) => ({ ...prev, consent: c.step3.consent.error }));
                    }
                  }}
                  aria-required="true"
                  aria-invalid={err("consent") ? true : undefined}
                  aria-describedby={describedBy("consent")}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[var(--color-navy)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                />
                <span className="text-sm leading-6 text-ink-muted">
                  {c.step3.consent.label}
                </span>
              </label>
              <p
                id="consultation-consent-error"
                className={err("consent") ? "mt-1.5 text-xs text-red-700" : "sr-only"}
              >
                {err("consent")}
              </p>
            </div>

            {!SUBMISSIONS_ENABLED && (
              <div
                className="flex items-start gap-3 rounded-xl border border-gold/30 bg-gold-soft px-4 py-3.5 text-sm leading-6 text-navy"
                role="note"
              >
                <Info size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <p>{c.notice}</p>
              </div>
            )}
            {submitNotice && SUBMISSIONS_ENABLED && (
              <p className="text-sm text-red-700" role="alert">
                {c.notice}
              </p>
            )}
          </section>
        )}

        {/* التنقل */}
        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-base font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-navy-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              <Prev size={18} aria-hidden />
              {c.nav.back}
            </button>
          ) : (
            <span aria-hidden />
          )}

          {step < 2 ? (
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2"
            >
              {c.nav.next}
              <Next size={18} aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!SUBMISSIONS_ENABLED}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-border disabled:text-ink-muted disabled:shadow-none"
            >
              {c.nav.submit}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
