import { ArrowLeft, ArrowRight, Target, Cloud, BrainCircuit, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

const icons: ComponentType<{ size?: number; className?: string }>[] = [
  Target,
  Cloud,
  BrainCircuit,
  ShieldCheck,
];

export function Services({ locale }: { locale: Locale }) {
  const { services } = getDictionary(locale);

  return (
    <section id="solutions" className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:w-[320px] lg:shrink-0">
            <span className="text-sm font-semibold tracking-wide text-gold">
              {services.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              {services.description}
            </p>
            <a
              href={services.link.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-sm"
            >
              {services.link.label}
              <ArrowLeft size={16} className="hidden rtl:block" />
              <ArrowRight size={16} className="rtl:hidden" />
            </a>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(16,39,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,39,67,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-right scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-soft">
                    <Icon size={22} className="text-gold" />
                  </span>
                  <span className="text-base font-semibold leading-6 text-navy">
                    {item.title}
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">
                    {item.description}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
