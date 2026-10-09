"use client";

import { useTransition } from "react";
import { setLocaleAction } from "@/i18n/actions";
import type { Locale } from "@/i18n/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [isPending, startTransition] = useTransition();
  const nextLocale: Locale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "EN" : "العربية";

  return (
    <button
      type="button"
      onClick={() => startTransition(() => setLocaleAction(nextLocale))}
      disabled={isPending}
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      lang={nextLocale}
      dir={nextLocale === "ar" ? "rtl" : "ltr"}
      className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm font-semibold text-navy transition-colors hover:border-gold/40 hover:text-gold disabled:opacity-60"
    >
      {label}
    </button>
  );
}
