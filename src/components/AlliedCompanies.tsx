import { Mail, MapPin, Phone } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function AlliedCompanies({ locale }: { locale: Locale }) {
  const { alliedCompanies: allies } = getDictionary(locale);

  return (
    <section id="partners" className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-gold">
            {allies.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl">
            {allies.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-muted">
            {allies.description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {allies.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[0_1px_2px_rgba(16,39,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,39,67,0.12)]"
            >
              <div className="flex aspect-[900/560] items-center justify-center bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 border-t border-border p-6">
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy">
                    {item.name}
                  </h3>
                  <p className="text-sm text-ink-muted">{item.tagline}</p>
                </div>

                <ul className="space-y-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span>{item.address}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span className="flex flex-col" dir="ltr">
                      {item.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="hover:text-navy"
                        >
                          {phone}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                    <a href={`mailto:${item.email}`} className="hover:text-navy">
                      {item.email}
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
