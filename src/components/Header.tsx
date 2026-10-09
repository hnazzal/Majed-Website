"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

export function Header({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getDictionary(locale);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container-page flex h-20 items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#home" className="shrink-0">
          <Logo locale={locale} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href={t.cta.href}
            className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy"
          >
            {t.cta.label}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy"
            aria-label={isMenuOpen ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-navy-soft hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href={t.cta.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white"
            >
              {t.cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
