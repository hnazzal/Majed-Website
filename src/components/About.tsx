import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function About({ locale }: { locale: Locale }) {
  const { about } = getDictionary(locale);

  return (
    <section id="about" className="bg-surface-muted pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container-page">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="lg:max-w-xl">
            <span className="text-sm font-semibold tracking-wide text-gold">
              {about.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
              {about.heading}
            </h2>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={about.cta.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              {about.cta.label}
              <span className="inline-flex transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:rtl:group-hover:-translate-x-1">
                <ArrowRight size={16} className="rtl:hidden" />
                <ArrowLeft size={16} className="hidden rtl:block" />
              </span>
            </a>
          </div>

          <div className="lg:w-[380px] lg:shrink-0">
            <ol className="flex flex-col">
              {about.process.map((step, index) => {
                const isLast = index === about.process.length - 1;
                return (
                  <li key={step.index} className="group relative flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-surface-muted text-[11px] font-bold text-gold transition-colors duration-200 group-hover:border-gold">
                        {step.index}
                      </span>
                      {!isLast && (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
                      )}
                    </div>
                    <div className={isLast ? "pb-0" : "pb-10"}>
                      <h3 className="text-base font-semibold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-ink-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
