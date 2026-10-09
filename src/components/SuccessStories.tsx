import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

function CaseStudyVisual({ variant }: { variant: 0 | 1 | 2 }) {
  const skyId = `ss-sky-${variant}`;
  const glassId = `ss-glass-${variant}`;

  if (variant === 0) {
    // مبنى حكومي/مؤسسي متناظر
    return (
      <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-surface-muted)" />
            <stop offset="100%" stopColor="var(--color-gold-soft)" />
          </linearGradient>
        </defs>
        <rect width="480" height="360" fill={`url(#${skyId})`} />
        <rect x="0" y="312" width="480" height="48" fill="var(--color-navy-soft)" />
        <polygon points="130,150 240,96 350,150" fill="var(--color-navy-light)" />
        <rect x="140" y="150" width="200" height="162" fill="var(--color-surface)" stroke="var(--color-border)" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x={156 + i * 29}
            y={168}
            width={14}
            height={128}
            fill="var(--color-navy-soft)"
          />
        ))}
        <rect x="100" y="222" width="40" height="90" fill="var(--color-navy-soft)" />
        <rect x="340" y="222" width="40" height="90" fill="var(--color-navy-soft)" />
        <polygon points="210,312 270,312 258,288 222,288" fill="var(--color-border)" />
        <rect x="236" y="80" width="4" height="20" fill="var(--color-gold)" />
      </svg>
    );
  }

  if (variant === 1) {
    // برج شركات عصري
    return (
      <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-surface-muted)" />
            <stop offset="100%" stopColor="var(--color-navy-soft)" />
          </linearGradient>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="30%" stopColor="var(--color-gold)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-gold-light)" stopOpacity="0.35" />
            <stop offset="70%" stopColor="var(--color-gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="480" height="360" fill={`url(#${skyId})`} />
        <rect x="0" y="312" width="480" height="48" fill="var(--color-navy-soft)" />
        <rect x="120" y="150" width="80" height="162" fill="var(--color-navy-light)" opacity="0.5" />
        <rect x="190" y="60" width="140" height="252" fill="var(--color-navy)" />
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={200 + col * 24}
              y={76 + row * 26}
              width={16}
              height={16}
              fill="var(--color-surface)"
              opacity={0.12}
            />
          )),
        )}
        <rect x="190" y="60" width="140" height="252" fill={`url(#${glassId})`} />
        <rect x="330" y="200" width="56" height="112" fill="var(--color-navy-light)" opacity="0.35" />
      </svg>
    );
  }

  // منصة بيانات / مجمع أعمال حديث
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-surface-muted)" />
          <stop offset="100%" stopColor="var(--color-gold-soft)" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill={`url(#${skyId})`} />
      <rect x="0" y="312" width="480" height="48" fill="var(--color-navy-soft)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1={i * 90}
          y1="312"
          x2={i * 90 - 40}
          y2="360"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
      ))}
      <rect x="80" y="170" width="320" height="142" fill="var(--color-navy)" />
      <rect x="80" y="156" width="320" height="16" fill="var(--color-navy-light)" />
      <rect x="150" y="136" width="30" height="20" fill="var(--color-navy-light)" />
      <rect x="260" y="136" width="30" height="20" fill="var(--color-navy-light)" />
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          const isAccent = row === 1 && col === 5;
          return (
            <rect
              key={`${row}-${col}`}
              x={96 + col * 37}
              y={186 + row * 38}
              width={30}
              height={30}
              fill={isAccent ? "var(--color-gold)" : "var(--color-surface)"}
              opacity={isAccent ? 0.85 : 0.14}
            />
          );
        }),
      )}
    </svg>
  );
}

export function SuccessStories({ locale }: { locale: Locale }) {
  const { successStories: stories } = getDictionary(locale);

  return (
    <section id="success-stories" className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:w-[320px] lg:shrink-0">
            <span className="text-sm font-semibold tracking-wide text-gold">
              {stories.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
              {stories.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-muted">
              {stories.description}
            </p>
            <a
              href={stories.link.href}
              className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-gold transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              {stories.link.label}
              <ArrowLeft size={16} className="hidden rtl:block" />
              <ArrowRight size={16} className="rtl:hidden" />
            </a>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-3">
            {stories.items.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[0_1px_2px_rgba(16,39,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,39,67,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <CaseStudyVisual variant={index as 0 | 1 | 2} />
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/35"
                    aria-hidden
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {item.description}
                  </p>

                  <div className="mt-5 grid grid-cols-3 divide-x rtl:divide-x-reverse divide-border border-t border-border pt-4">
                    {item.results.map((result) => (
                      <div
                        key={result.label}
                        className="flex flex-col items-center gap-0.5 px-1 text-center"
                      >
                        <span className="text-sm font-bold text-navy">
                          {result.value}
                        </span>
                        <span className="text-[11px] leading-tight text-ink-muted">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.href}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm text-sm font-semibold text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                  >
                    {stories.cardCta}
                    <ArrowLeft size={14} className="hidden rtl:block" />
                    <ArrowRight size={14} className="rtl:hidden" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
