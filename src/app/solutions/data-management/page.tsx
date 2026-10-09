import type { Metadata } from "next";
import { Database } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/solutions/ServiceHero";
import { ServiceCapabilities } from "@/components/solutions/ServiceCapabilities";
import { DataManagementProcess } from "@/components/solutions/DataManagementProcess";
import { ServiceTrust } from "@/components/solutions/ServiceTrust";
import { ServiceCta } from "@/components/solutions/ServiceCta";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: `${t.dataManagementPage.hero.heading} | ${t.companyName}`,
    description: t.dataManagementPage.hero.description,
  };
}

export default async function DataManagementPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const content = t.dataManagementPage;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <ServiceHero locale={locale} content={content} icon={Database} />
        <ServiceCapabilities locale={locale} content={content} />
        <DataManagementProcess locale={locale} content={content} />
        <ServiceTrust locale={locale} content={content} />
        <ServiceCta locale={locale} content={content} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
