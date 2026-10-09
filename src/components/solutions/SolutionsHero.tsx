import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function SolutionsHero({ locale }: { locale: Locale }) {
  const { solutionsPage } = getDictionary(locale);
  const { hero } = solutionsPage;

  return (
    <section className="bg-navy">
      <div className="container-page py-20 text-center lg:py-28">
        <span className="text-sm font-semibold tracking-wide text-gold">
          {hero.eyebrow}
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {hero.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
