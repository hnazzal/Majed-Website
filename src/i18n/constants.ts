import type { Locale } from "@/i18n/types";

export const DEFAULT_LOCALE: Locale = "ar";
export const LOCALES: Locale[] = ["ar", "en"];
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "ar" || value === "en";
}
