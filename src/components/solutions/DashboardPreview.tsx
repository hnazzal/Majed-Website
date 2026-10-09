import { LineChart, PieChart } from "lucide-react";
import type { Locale } from "@/i18n/types";

type DashboardPreviewContent = {
  dashboardPreview: {
    heading: string;
    kpis: { label: string; value: string }[];
    lineChartLabel: string;
    donutChartLabel: string;
  };
};

export function DashboardPreview({
  locale,
  content,
}: {
  locale: Locale;
  content: DashboardPreviewContent;
}) {
  void locale;
  const { dashboardPreview } = content;

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-page">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
          {dashboardPreview.heading}
        </h2>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-surface p-6 shadow-[0_16px_32px_rgba(16,39,67,0.08)] lg:p-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {dashboardPreview.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl bg-navy-soft p-5 text-center"
              >
                <span className="block text-2xl font-bold text-navy">
                  {kpi.value}
                </span>
                <span className="mt-1 block text-xs font-medium text-ink-muted">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border border-border p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                <LineChart size={22} className="text-navy" />
              </span>
              <span className="text-sm font-semibold text-navy">
                {dashboardPreview.lineChartLabel}
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                <PieChart size={22} className="text-navy" />
              </span>
              <span className="text-sm font-semibold text-navy">
                {dashboardPreview.donutChartLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
