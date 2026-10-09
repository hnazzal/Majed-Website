import type { Locale } from "@/i18n/types";

type ServiceProcessContent = {
  process: {
    heading: string;
    stages: { index: string; title: string }[];
  };
};

export function ServiceProcess({
  locale,
  content,
}: {
  locale: Locale;
  content: ServiceProcessContent;
}) {
  void locale;
  const { process } = content;

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-page">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
          {process.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.stages.map((stage) => (
            <div
              key={stage.index}
              className="flex flex-col gap-4 rounded-2xl bg-surface p-7 shadow-[0_1px_2px_rgba(16,39,67,0.04)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/40 text-sm font-bold text-gold">
                {stage.index}
              </span>
              <h3 className="text-base font-semibold text-navy">
                {stage.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
