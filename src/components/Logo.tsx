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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.png" alt="" className="h-9 w-auto" aria-hidden />
      {t.companyName}
    </span>
  );
}
