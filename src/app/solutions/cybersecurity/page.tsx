import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/solutions/ServiceHero";
import { ServiceCapabilities } from "@/components/solutions/ServiceCapabilities";
import { ServiceProcess } from "@/components/solutions/ServiceProcess";
import { ServiceTrust } from "@/components/solutions/ServiceTrust";
import { ServiceCta } from "@/components/solutions/ServiceCta";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: `${t.cybersecurityPage.hero.heading} | ${t.companyName}`,
    description: t.cybersecurityPage.hero.description,
  };
}

export default async function CybersecurityPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const content = t.cybersecurityPage;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <ServiceHero locale={locale} content={content} icon={ShieldCheck} />
        <ServiceCapabilities locale={locale} content={content} />
        <ServiceProcess locale={locale} content={content} />
        <ServiceTrust locale={locale} content={content} />
        <ServiceCta locale={locale} content={content} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
