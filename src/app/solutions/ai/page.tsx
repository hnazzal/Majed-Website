import type { Metadata } from "next";
import { Brain } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/solutions/ServiceHero";
import { ServiceCapabilities } from "@/components/solutions/ServiceCapabilities";
import { ServiceProcess } from "@/components/solutions/ServiceProcess";
import { ServiceResults } from "@/components/solutions/ServiceResults";
import { ServiceCta } from "@/components/solutions/ServiceCta";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: `${t.aiPage.hero.heading} | ${t.companyName}`,
    description: t.aiPage.hero.description,
  };
}

export default async function AiPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const content = t.aiPage;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <ServiceHero locale={locale} content={content} icon={Brain} />
        <ServiceCapabilities locale={locale} content={content} />
        <ServiceProcess locale={locale} content={content} />
        <ServiceResults locale={locale} content={content} />
        <ServiceCta locale={locale} content={content} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
