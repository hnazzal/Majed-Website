"use client";

import { useRef, useState, type ComponentType, type KeyboardEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Landmark,
  Building2,
  RadioTower,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

const icons: ComponentType<{ size?: number; className?: string }>[] = [
  Landmark,
  Building2,
  RadioTower,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
];

function CtaArrow() {
  return (
    <>
      <ArrowRight size={16} className="rtl:hidden" />
      <ArrowLeft size={16} className="hidden rtl:block" />
    </>
  );
}

export function Industries({ locale }: { locale: Locale }) {
  const { industries } = getDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = industries.items[activeIndex];
  const count = industries.items.length;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowDown") next = (index + 1) % count;
    else if (event.key === "ArrowUp") next = (index - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;

    if (next !== null) {
      event.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="sectors" className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-gold">
            {industries.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
            {industries.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-muted">
            {industries.description}
          </p>
        </div>

        {/* محدد القطاعات التفاعلي — سطح المكتب */}
        <div className="mt-14 hidden lg:flex lg:items-start lg:gap-14">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={industries.heading}
            className="w-[340px] shrink-0 border-t border-t-border"
          >
            {industries.items.map((item, index) => {
              const Icon = icons[index];
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`industry-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="industry-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`group relative flex w-full items-center gap-4 border-b border-b-border border-s-[3px] py-5 text-start transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                    isActive
                      ? "border-s-gold bg-gold-soft/40"
                      : "border-s-transparent hover:bg-navy-soft/40"
                  }`}
                >
                  <span
                    className={`text-xs font-bold tabular-nums ${
                      isActive ? "text-gold" : "text-ink-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={20} className={isActive ? "text-gold" : "text-ink-muted"} />
                  <span className="flex-1 text-base font-semibold text-navy">
                    {item.title}
                  </span>
                  <ChevronRight size={16} className="shrink-0 text-ink-muted rtl:hidden" />
                  <ChevronLeft
                    size={16}
                    className="hidden shrink-0 text-ink-muted rtl:block"
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="industry-panel"
            aria-labelledby={`industry-tab-${activeIndex}`}
            key={activeIndex}
            className="fade-in-up relative flex min-h-[480px] flex-1 flex-col overflow-hidden rounded-2xl bg-navy p-10 lg:p-12"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 end-8 text-[160px] font-bold leading-none text-white/5 select-none"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="relative">
              {active.shortLabel && (
                <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                  {active.shortLabel}
                </span>
              )}
              <div className="mt-3 h-px w-10 bg-gold/50" aria-hidden />
              <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                {active.description}
              </p>

              <span className="mt-8 block text-sm font-semibold tracking-wide text-gold">
                {industries.capabilitiesLabel}
              </span>
              <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {active.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    <span className="text-sm leading-6 text-white/85">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={industries.cta.href}
              className="group/cta relative mt-10 inline-flex w-fit items-center gap-2 rounded-sm text-sm font-semibold text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              {industries.cta.label}
              <span className="inline-flex transition-transform duration-200 motion-safe:group-hover/cta:translate-x-1 motion-safe:rtl:group-hover/cta:-translate-x-1">
                <CtaArrow />
              </span>
            </a>
          </div>
        </div>

        {/* قائمة أكورديون — الجوال واللوحي */}
        <div className="mt-10 border-t border-t-border lg:hidden">
          {industries.items.map((item, index) => {
            const Icon = icons[index];
            const isOpen = index === activeIndex;
            const panelId = `industry-accordion-panel-${index}`;
            return (
              <div key={item.title} className="border-b border-b-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(index)}
                    className="flex w-full items-center gap-4 rounded-sm py-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                  >
                    <Icon size={20} className={isOpen ? "text-gold" : "text-ink-muted"} />
                    <span className="flex-1 text-base font-semibold text-navy">
                      {item.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-ink-muted transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      <p className="text-sm leading-7 text-ink-muted">
                        {item.description}
                      </p>
                      <span className="mt-5 block text-xs font-semibold tracking-wide text-gold">
                        {industries.capabilitiesLabel}
                      </span>
                      <div className="mt-3 flex flex-col gap-2.5">
                        {item.capabilities.map((capability) => (
                          <div key={capability} className="flex items-start gap-2.5">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                              aria-hidden
                            />
                            <span className="text-sm leading-6 text-ink-muted">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={industries.cta.href}
                        className="group/cta mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                      >
                        {industries.cta.label}
                        <span className="inline-flex transition-transform duration-200 motion-safe:group-hover/cta:translate-x-1 motion-safe:rtl:group-hover/cta:-translate-x-1">
                          <CtaArrow />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
