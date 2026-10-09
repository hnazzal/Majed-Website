import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, isLocale } from "@/i18n/constants";
import type { Locale } from "@/i18n/types";

// يقرأ اللغة الحالية من كوكي الطلب (Server Components فقط). يُستخدم في كل
// صفحة/تخطيط لتحديد لغة العرض دون الحاجة لتغيير مسار الصفحة.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE_NAME)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
