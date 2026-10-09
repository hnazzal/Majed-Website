import { Landmark, Users, ThumbsUp, TrendingUp } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";
import type { ComponentType } from "react";

const icons: ComponentType<{ size?: number; className?: string }>[] = [
  Landmark,
  Users,
  ThumbsUp,
  TrendingUp,
];

export function StatsBar({ locale }: { locale: Locale }) {
  const { stats } = getDictionary(locale);

  return (
    <section className="bg-navy">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0 lg:divide-x lg:rtl:divide-x-reverse">
          {stats.map((stat, index) => {
            const Icon = icons[index];
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
    </section>
  );
}
