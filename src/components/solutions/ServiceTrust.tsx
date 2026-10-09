import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/types";

type ServiceTrustContent = {
  trust: {
    heading: string;
    points: string[];
  };
};

export function ServiceTrust({
  locale,
  content,
}: {
  locale: Locale;
  content: ServiceTrustContent;
}) {
  void locale;
  const { trust } = content;

  return (
    <section className="bg-navy">
      <div className="container-page py-20 text-center lg:py-28">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl">
          {trust.heading}
        </h2>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {trust.points.map((point) => (
            <li
              key={point}
              className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-6 text-center"
            >
              <CheckCircle2 size={24} className="text-gold" />
              <span className="text-sm leading-6 text-white/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
