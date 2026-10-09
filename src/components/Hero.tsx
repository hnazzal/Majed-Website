import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";
import { DashboardMockup } from "@/components/DashboardMockup";

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale);

  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      {/* زخرفة خلفية هادئة */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
        aria-hidden
      >
        <div className="absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-navy-soft blur-3xl" />
        <div className="absolute top-40 right-[-8%] h-[320px] w-[320px] rounded-full bg-gold-soft blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-sm font-medium text-gold">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.3] tracking-tight text-navy sm:text-5xl sm:leading-[1.25]">
            {hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-ink-muted">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-navy-light"
            >
              {hero.primaryCta.label}
              <ArrowRight size={18} className="rtl:hidden" />
              <ArrowLeft size={18} className="hidden rtl:block" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:border-navy/30 hover:bg-navy-soft"
            >
              <PlayCircle size={20} className="text-gold" />
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div>
          <DashboardMockup locale={locale} />
        </div>
      </div>
    </section>
  );
}
