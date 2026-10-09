import {
  Layers,
  Workflow,
  BadgeCheck,
  LineChart,
  History,
  Users,
  ThumbsUp,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

const strengthIcons: LucideIcon[] = [Layers, Workflow, BadgeCheck, LineChart];
const trustIcons: LucideIcon[] = [History, Users, ThumbsUp, TrendingUp];

export function WhyUs({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { whyUs } = t;

  return (
    <section id="why-us" className="bg-surface-muted">
      <div className="container-page py-20 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:w-[320px] lg:shrink-0">
            <span className="text-sm font-semibold tracking-wide text-gold">
              {whyUs.eyebrowPrefix} {t.companyName}
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
              {whyUs.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              {whyUs.description}
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
            {whyUs.strengths.map((item, index) => {
              const Icon = strengthIcons[index];
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-2xl bg-surface p-6 transition-colors duration-200 hover:bg-gold-soft/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft">
                    <Icon size={22} className="text-navy" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-navy">
        <div className="container-page">
          <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0 lg:divide-x lg:rtl:divide-x-reverse">
            {whyUs.trustStats.map((stat, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-3 px-4 py-10 text-center lg:py-12"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <Icon size={22} className="text-gold" />
                  </span>
                  <span className="text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm leading-6 text-white/65">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
