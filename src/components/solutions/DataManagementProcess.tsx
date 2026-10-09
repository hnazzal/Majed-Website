import type { Locale } from "@/i18n/types";

type DataManagementProcessContent = {
  process: {
    heading: string;
    stages: string[];
  };
};

export function DataManagementProcess({
  locale,
  content,
}: {
  locale: Locale;
  content: DataManagementProcessContent;
}) {
  void locale;
  const { process } = content;

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-page">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
          {process.heading}
        </h2>

        <ol className="mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-4">
          {process.stages.map((stage, index) => {
            const isLast = index === process.stages.length - 1;
            return (
              <li
                key={stage}
                className="flex flex-1 items-center gap-4 sm:min-w-[200px]"
              >
                <div className="flex flex-1 items-center gap-4 rounded-2xl bg-surface p-6 shadow-[0_1px_2px_rgba(16,39,67,0.04)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                    {index + 1}
                  </span>
                  <span className="text-base font-semibold text-navy">
                    {stage}
                  </span>
                </div>
                {!isLast && (
                  <span
                    className="hidden h-px w-6 shrink-0 bg-border sm:block"
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
