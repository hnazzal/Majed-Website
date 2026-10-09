import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";
import { Logo } from "@/components/Logo";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { footer } = t;

  return (
    <footer className="bg-surface">
      <div className="h-[3px] bg-gold" aria-hidden />

      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-[320px] lg:shrink-0">
            <Logo locale={locale} />
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink-muted">
              {t.description}
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3">
            {footer.linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-navy">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold text-navy">{footer.contactHeading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold"
                  >
                    <Mail size={16} className="shrink-0 text-gold" />
                    <span dir="ltr">{footer.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold"
                  >
                    <Phone size={16} className="shrink-0 text-gold" />
                    <span dir="ltr">{footer.contact.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-ink-muted">
                  <MapPin size={16} className="shrink-0 text-gold" />
                  {footer.contact.city}
                </li>
                <li>
                  <a
                    href={footer.contact.linkedin}
                    className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold"
                  >
                    <ExternalLink size={16} className="shrink-0 text-gold" />
                    {footer.linkedinLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-ink-muted">
            © 2026 {t.companyName}. {footer.copyrightSuffix}
          </p>
          <div className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
