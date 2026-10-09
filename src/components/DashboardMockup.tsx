import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function DashboardMockup({ locale }: { locale: Locale }) {
  const { mockup } = getDictionary(locale).hero;

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* خلفية أفق المدينة — زخرفة خفيفة جداً */}
      <svg
        viewBox="0 0 640 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-x-0 -top-10 h-auto w-full opacity-[0.07]"
        aria-hidden
      >
        <g fill="var(--color-navy)">
          <rect x="10" y="190" width="38" height="140" />
          <rect x="56" y="150" width="30" height="180" />
          <rect x="94" y="210" width="26" height="120" />
          <rect x="128" y="120" width="34" height="210" />
          <rect x="170" y="170" width="28" height="160" />
          <rect x="470" y="160" width="30" height="170" />
          <rect x="508" y="200" width="26" height="130" />
          <rect x="542" y="130" width="34" height="200" />
          <rect x="584" y="175" width="30" height="155" />
          <rect x="146" y="95" width="10" height="30" />
          <rect x="556" y="100" width="10" height="35" />
        </g>
      </svg>

      {/* إطار الحاسوب المحمول */}
      <svg
        viewBox="0 0 640 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(16,39,67,0.18)]"
        style={{ direction: "ltr" }}
        role="img"
        aria-label={mockup.ariaLabel}
      >
        {/* إطار الشاشة */}
        <rect x="28" y="16" width="584" height="352" rx="18" fill="var(--color-navy)" />
        <rect x="44" y="32" width="552" height="306" rx="6" fill="#ffffff" />

        {/* قاعدة الحاسوب */}
        <path d="M0 384 L640 384 L598 416 Q596 420 592 420 L48 420 Q44 420 42 416 Z" fill="var(--color-navy-light)" />
        <rect x="270" y="384" width="100" height="6" rx="3" fill="var(--color-navy)" opacity="0.5" />

        {/* الشريط العلوي لنافذة التطبيق */}
        <rect x="44" y="32" width="552" height="34" fill="var(--color-navy-soft)" />
        <circle cx="64" cy="49" r="4" fill="var(--color-gold)" />
        <circle cx="80" cy="49" r="4" fill="#c7cfd8" />
        <circle cx="96" cy="49" r="4" fill="#c7cfd8" />
        <rect x="430" y="43" width="150" height="12" rx="6" fill="#ffffff" />

        {/* الشريط الجانبي (يمين) */}
        <rect x="508" y="66" width="88" height="272" fill="var(--color-navy)" />
        <rect x="532" y="92" width="40" height="8" rx="4" fill="var(--color-gold)" opacity="0.9" />
        <rect x="532" y="130" width="40" height="8" rx="4" fill="#ffffff" opacity="0.35" />
        <rect x="532" y="168" width="40" height="8" rx="4" fill="#ffffff" opacity="0.35" />
        <rect x="532" y="206" width="40" height="8" rx="4" fill="#ffffff" opacity="0.35" />
        <rect x="532" y="244" width="40" height="8" rx="4" fill="#ffffff" opacity="0.35" />

        {/* بطاقات المؤشرات */}
        {mockup.kpis.map((card, index) => {
          const x = [60, 206, 352][index];
          return (
            <g key={card.label}>
              <rect x={x} y={78} width={132} height={78} rx={8} fill="var(--color-surface-muted)" stroke="var(--color-border)" />
              <rect x={x + 14} y={92} width={28} height={5} rx={2.5} fill="var(--color-gold)" />
              <text
                x={x + 14}
                y={128}
                fontSize="19"
                fontWeight={700}
                fill="var(--color-navy)"
                fontFamily="var(--font-ibm-plex-arabic), sans-serif"
              >
                {card.value}
              </text>
              <text
                x={x + 14}
                y={144}
                fontSize="9.5"
                fill="var(--color-ink-muted)"
                fontFamily="var(--font-ibm-plex-arabic), sans-serif"
              >
                {card.label}
              </text>
            </g>
          );
        })}

        {/* بطاقة الرسم البياني الخطي */}
        <rect x="60" y="172" width="236" height="150" rx="8" fill="var(--color-surface-muted)" stroke="var(--color-border)" />
        <text x="76" y="196" fontSize="11" fontWeight={600} fill="var(--color-navy)" fontFamily="var(--font-ibm-plex-arabic), sans-serif">
          {mockup.lineChartTitle}
        </text>
        <g stroke="var(--color-border)" strokeWidth="1">
          <line x1="76" y1="212" x2="280" y2="212" />
          <line x1="76" y1="240" x2="280" y2="240" />
          <line x1="76" y1="268" x2="280" y2="268" />
          <line x1="76" y1="296" x2="280" y2="296" />
        </g>
        <polyline
          points="76,276 110,256 144,264 178,228 212,238 246,204 280,214"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="76,296 110,286 144,290 178,270 212,274 246,252 280,258"
          fill="none"
          stroke="var(--color-navy)"
          strokeWidth="2"
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* بطاقة الرسم الشريطي */}
        <rect x="312" y="172" width="172" height="150" rx="8" fill="var(--color-surface-muted)" stroke="var(--color-border)" />
        <text x="328" y="196" fontSize="11" fontWeight={600} fill="var(--color-navy)" fontFamily="var(--font-ibm-plex-arabic), sans-serif">
          {mockup.barChartTitle}
        </text>
        <g>
          {[36, 58, 44, 70, 52, 30].map((h, i) => (
            <rect
              key={i}
              x={328 + i * 24}
              y={302 - h}
              width="14"
              height={h}
              rx="3"
              fill={i === 3 ? "var(--color-gold)" : "var(--color-navy)"}
              opacity={i === 3 ? 1 : 0.55}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
