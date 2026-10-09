import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function Logo({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  if (t.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={t.logoSrc} alt={t.companyName} className="h-9 w-auto" />;
  }

  return (
    <span className="flex items-center gap-2 text-xl font-semibold tracking-tight text-navy">
      <span className="inline-block h-6 w-1.5 rounded-sm bg-gold" aria-hidden />
      {t.companyName}
    </span>
  );
}
