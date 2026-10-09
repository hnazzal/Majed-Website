import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Industries } from "@/components/Industries";
import { SuccessStories } from "@/components/SuccessStories";
import { WhyUs } from "@/components/WhyUs";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { getLocale } from "@/i18n/get-locale";

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <StatsBar locale={locale} />
        <Services locale={locale} />
        <About locale={locale} />
        <Industries locale={locale} />
        <SuccessStories locale={locale} />
        <WhyUs locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
