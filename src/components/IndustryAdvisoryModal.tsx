"use client";

import { useEffect, useId, useRef, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { IndustryAdvisory } from "@/i18n/types";

// نافذة حوارية أصلية (<dialog>): تتكفل بحبس التركيز وإغلاق Escape وإعادة
// التركيز إلى الزر الذي فتحها. نضيف عليها إغلاق النقر على الخلفية ومنع تمرير
// الصفحة خلفها.
export function IndustryAdvisoryModal({
  advisory,
  open,
  onClose,
}: {
  advisory: IndustryAdvisory;
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();

  // Escape (أو أي إغلاق أصلي) يطلق حدث close؛ نزامن به حالة الأب.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Escape يطلق cancel بشكل متزامن: نمنع الإغلاق الأصلي ونترك الأب يغلق عبر الحالة.
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", onClose);
    };
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // منع تمرير الصفحة الخلفية أثناء فتح النافذة.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    // الـ dialog بلا حشوة: النقر على الخلفية يكون هدفه عنصر الـ dialog نفسه.
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClick={handleBackdropClick}
      className="m-auto w-[calc(100%-1.5rem)] max-w-[1000px] overflow-hidden rounded-2xl border border-border bg-surface p-0 text-ink shadow-[0_30px_80px_-20px_rgba(16,39,67,0.45)] backdrop:bg-navy/50 backdrop:backdrop-blur-[2px] sm:w-[calc(100%-3rem)]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={advisory.closeLabel}
        className="absolute end-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-navy shadow-sm transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 sm:end-4 sm:top-4"
      >
        <X size={18} aria-hidden />
      </button>

      <div className="max-h-[90vh] overflow-y-auto overscroll-contain">
        <div className="px-6 pb-10 pt-8 sm:px-10 sm:pt-10 lg:px-14">
          {/* المقدمة */}
          <header className="max-w-3xl">
            <span className="text-sm font-semibold tracking-wide text-gold">
              {advisory.eyebrow}
            </span>
            <h2
              id={titleId}
              className="mt-3 text-2xl font-bold leading-[1.35] tracking-tight text-navy sm:text-3xl"
            >
              {advisory.heading}
            </h2>
            <p id={descId} className="mt-4 text-base leading-7 text-ink-muted">
              {advisory.description}
            </p>
          </header>

          <div className="my-10 h-px w-full bg-gradient-to-r from-gold/70 via-gold/25 to-transparent rtl:bg-gradient-to-l" aria-hidden />

          {/* قسم الامتثال */}
          <section aria-labelledby={`${titleId}-section`}>
            <span className="text-sm font-semibold tracking-wide text-gold">
              {advisory.sectionEyebrow}
            </span>
            <h3
              id={`${titleId}-section`}
              className="mt-2 max-w-3xl text-xl font-bold leading-snug text-navy sm:text-2xl"
            >
              {advisory.sectionHeading}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-muted sm:text-base">
              {advisory.sectionDescription}
            </p>

            <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
              {advisory.items.map((item, index) => (
                <li key={item.title} className="border-t border-border py-6">
                  <span className="text-sm font-bold tabular-nums text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-base font-semibold leading-snug text-navy">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* دعوة للإجراء */}
          <div className="mt-6 flex flex-col gap-5 rounded-xl border border-border bg-surface-muted px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="max-w-xl text-base font-semibold leading-7 text-navy">
              {advisory.cta.heading}
            </p>
            <a
              href={advisory.cta.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2"
            >
              {advisory.cta.label}
              <ArrowRight size={16} className="rtl:hidden" aria-hidden />
              <ArrowLeft size={16} className="hidden rtl:block" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
