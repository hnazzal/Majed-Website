import type { Locale } from "@/i18n/types";

type ServiceCtaContent = {
  cta: {
    heading: string;
    button: { label: string; href: string };
  };
};

export function ServiceCta({
  locale,
  content,
}: {
  locale: Locale;
  content: ServiceCtaContent;
}) {
  void locale;
  const { cta } = content;

  return (
    <section className="bg-navy-soft">
      <div className="container-page flex flex-col items-center gap-8 py-20 text-center lg:py-24">
        <h2 className="max-w-2xl text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
          {cta.heading}
        </h2>
        <a
          href={cta.button.href}
          className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy"
        >
          {cta.button.label}
        </a>
      </div>
    </section>
  );
}
