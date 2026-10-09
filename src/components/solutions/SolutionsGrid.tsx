import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Brain,
  Settings,
  Database,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  ClipboardList,
  CheckCircle,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

const icons: LucideIcon[] = [
  Layers,
  Brain,
  Settings,
  Database,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  ClipboardList,
  CheckCircle,
  Server,
  ShieldCheck,
];

export function SolutionsGrid({ locale }: { locale: Locale }) {
  const { solutionsPage } = getDictionary(locale);
  const { items, cardCta } = solutionsPage;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Layers;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(16,39,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,39,67,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-right scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-soft">
                  <Icon size={22} className="text-gold" />
                </span>
                <h2 className="text-lg font-semibold leading-7 text-navy">
                  {item.title}
                </h2>
                <p className="flex-1 text-sm leading-6 text-ink-muted">
                  {item.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                  {cardCta}
                  <ArrowLeft size={16} className="hidden rtl:block" />
                  <ArrowRight size={16} className="rtl:hidden" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
