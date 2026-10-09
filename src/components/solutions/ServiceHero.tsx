import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/types";

type ServiceHeroContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
  };
};

export function ServiceHero({
  locale,
  content,
  icon: Icon,
}: {
  locale: Locale;
  content: ServiceHeroContent;
  icon: LucideIcon;
}) {
  const { hero } = content;
  void locale;

  return (
    <section className="bg-navy">
      <div className="container-page flex flex-col items-start gap-6 py-20 lg:py-28">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
          <Icon size={26} className="text-gold" />
        </span>
        <span className="text-sm font-semibold tracking-wide text-gold">
          {hero.eyebrow}
        </span>
        <h1 className="max-w-3xl text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {hero.heading}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-white/70">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
