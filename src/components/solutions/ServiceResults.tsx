import type { Locale } from "@/i18n/types";

type ServiceResultsContent = {
  results: {
    heading: string;
    items: { value: string; label: string }[];
  };
};

export function ServiceResults({
  locale,
  content,
}: {
  locale: Locale;
  content: ServiceResultsContent;
}) {
  void locale;
  const { results } = content;

  return (
    <section className="bg-navy">
      <div className="container-page py-20 text-center lg:py-28">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl">
          {results.heading}
        </h2>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:rtl:divide-x-reverse">
          {results.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 px-4 py-8 text-center"
            >
              <span className="text-3xl font-bold text-gold sm:text-4xl">
                {item.value}
              </span>
              <span className="text-sm leading-6 text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
