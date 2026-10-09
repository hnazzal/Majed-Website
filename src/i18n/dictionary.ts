import ar from "@/messages/ar";
import en from "@/messages/en";
import type { Dictionary, Locale } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
