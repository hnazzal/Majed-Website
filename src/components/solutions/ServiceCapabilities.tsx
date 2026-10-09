import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/types";

type ServiceCapabilitiesContent = {
  capabilitiesHeading: string;
  capabilities: { title: string; description: string }[];
};

export function ServiceCapabilities({
  locale,
  content,
}: {
  locale: Locale;
  content: ServiceCapabilitiesContent;
}) {
  void locale;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
          {content.capabilitiesHeading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.capabilities.map((capability) => (
            <div
              key={capability.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(16,39,67,0.04)] transition-colors duration-200 hover:bg-gold-soft/20"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft">
                <CheckCircle2 size={22} className="text-navy" />
              </span>
              <h3 className="text-base font-semibold text-navy">
                {capability.title}
              </h3>
              <p className="text-sm leading-6 text-ink-muted">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
