import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: `${t.solutionsPage.hero.heading} | ${t.companyName}`,
    description: t.solutionsPage.hero.description,
  };
}

export default async function SolutionsPage() {
  const locale = await getLocale();

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <SolutionsHero locale={locale} />
        <SolutionsGrid locale={locale} />
        <SolutionsCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
