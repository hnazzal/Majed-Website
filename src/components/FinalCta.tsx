import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

function BackgroundPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cta-grid)" opacity="0.06" />
      <g opacity="0.25" stroke="#ffffff" strokeWidth="1">
        <line x1="6%" y1="20%" x2="16%" y2="38%" />
        <line x1="16%" y1="38%" x2="10%" y2="62%" />
        <line x1="92%" y1="24%" x2="82%" y2="44%" />
        <line x1="82%" y1="44%" x2="90%" y2="68%" />
      </g>
      <g fill="var(--color-gold)">
        <circle cx="6%" cy="20%" r="3" opacity="0.6" />
        <circle cx="16%" cy="38%" r="2.5" opacity="0.45" />
        <circle cx="10%" cy="62%" r="2.5" opacity="0.45" />
        <circle cx="92%" cy="24%" r="3" opacity="0.6" />
        <circle cx="82%" cy="44%" r="2.5" opacity="0.45" />
        <circle cx="90%" cy="68%" r="2.5" opacity="0.45" />
      </g>
    </svg>
  );
}

export function FinalCta({ locale }: { locale: Locale }) {
  const { finalCta: cta } = getDictionary(locale);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy">
      <BackgroundPattern />
      <div className="container-page relative py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {cta.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={cta.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {cta.primaryCta.label}
            </a>
            <a
              href={cta.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {cta.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
