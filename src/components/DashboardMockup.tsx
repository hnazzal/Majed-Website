import { Gauge, Smile, Sparkles, TrendingUp } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

const KPI_ICONS = [TrendingUp, Gauge, Smile];
const KPI_SPARKS = [
  "0,22 12,18 24,20 36,12 48,14 60,6",
  "0,20 12,22 24,14 36,16 48,8 60,10",
  "0,16 12,14 24,18 36,10 48,12 60,4",
];
const BARS = [38, 62, 46, 78, 54, 34, 66];

export function DashboardMockup({ locale }: { locale: Locale }) {
  const { mockup } = getDictionary(locale).hero;

  return (
    <div
      className="relative mx-auto w-full max-w-[580px] py-8"
      role="img"
      aria-label={mockup.ariaLabel}
    >
      {/* هالة ضوئية خلف اللوحة */}
      <div
        className="absolute inset-0 -z-10 m-auto h-[85%] w-[90%] rounded-full bg-gradient-to-tr from-navy/20 via-gold/25 to-transparent blur-3xl"
        aria-hidden
      />

      {/* اللوحة الرئيسية */}
      <div
        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-navy via-[#14315a] to-navy-light p-4 shadow-[0_40px_80px_-20px_rgba(16,39,67,0.55)] sm:p-5"
        style={{ direction: "ltr" }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
          aria-hidden
        />

        {/* شريط النافذة */}
        <div className="relative flex items-center gap-1.5 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="ms-auto h-2 w-24 rounded-full bg-white/10" />
        </div>

        {/* بطاقات المؤشرات */}
        <div className="relative grid grid-cols-3 gap-3">
          {mockup.kpis.map((kpi, i) => {
            const Icon = KPI_ICONS[i];
            return (
              <div
                key={kpi.label}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/20 text-gold-light">
                    <Icon size={15} />
                  </span>
                  <svg viewBox="0 0 60 26" className="h-5 w-12" aria-hidden>
                    <polyline
                      points={KPI_SPARKS[i]}
                      fill="none"
                      stroke="var(--color-gold-light)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-xl font-bold text-white">{kpi.value}</div>
                <div className="mt-0.5 truncate text-[10.5px] text-white/60">
                  {kpi.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* الرسوم */}
        <div className="relative mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
            <div className="text-xs font-semibold text-white/90">
              {mockup.lineChartTitle}
            </div>
            <svg viewBox="0 0 240 110" className="mt-2 h-auto w-full" aria-hidden>
              <defs>
                <linearGradient id="dm-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 55, 85].map((y) => (
                <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="#fff" strokeOpacity="0.08" />
              ))}
              <path
                d="M0 88 C30 80 40 70 65 72 S110 50 135 54 S190 22 240 14 L240 110 L0 110 Z"
                fill="url(#dm-area)"
              />
              <path
                d="M0 88 C30 80 40 70 65 72 S110 50 135 54 S190 22 240 14"
                fill="none"
                stroke="var(--color-gold-light)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0 100 C40 96 70 92 100 88 S170 80 240 66"
                fill="none"
                stroke="#fff"
                strokeOpacity="0.35"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="4 5"
              />
              <circle cx="240" cy="14" r="4.5" fill="var(--color-gold-light)" />
              <circle cx="240" cy="14" r="9" fill="var(--color-gold-light)" opacity="0.25" />
            </svg>
          </div>

          <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
            <div className="text-xs font-semibold text-white/90">
              {mockup.barChartTitle}
            </div>
            <div className="mt-3 flex h-[88px] items-end justify-between gap-1.5">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className={
                    i === 3
                      ? "w-full rounded-t-md bg-gradient-to-t from-gold to-gold-light"
                      : "w-full rounded-t-md bg-white/20"
                  }
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* بطاقة عائمة — ذكاء اصطناعي */}
      <div
        className="absolute -bottom-1 start-[-4%] flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-[0_20px_40px_-12px_rgba(16,39,67,0.35)] backdrop-blur sm:start-[-8%]"
        aria-hidden
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
          <Sparkles size={20} />
        </span>
        <div>
          <div className="text-lg font-bold leading-tight text-navy">
            {mockup.kpis[1].value}
          </div>
          <div className="text-[11px] text-ink-muted">{mockup.kpis[1].label}</div>
        </div>
      </div>

      {/* شارة عائمة — نمو */}
      <div
        className="absolute -top-0 end-[-3%] flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-white shadow-[0_16px_32px_-10px_rgba(180,138,74,0.7)] sm:end-[-6%]"
        style={{ direction: "ltr" }}
        aria-hidden
      >
        <TrendingUp size={16} />
        {mockup.kpis[0].value}
      </div>
    </div>
  );
}
