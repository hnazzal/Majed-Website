import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultationForm } from "@/components/consultation/ConsultationForm";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: `${t.consultationRequest.metaTitle} | ${t.companyName}`,
    description: t.consultationRequest.intro.description,
  };
}

export default async function ConsultationPage() {
  const locale = await getLocale();
  const { consultationRequest: content } = getDictionary(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1 bg-surface">
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-full"
            aria-hidden
          >
            <div className="absolute -top-24 left-[-10%] h-[360px] w-[360px] rounded-full bg-navy-soft blur-3xl" />
            <div className="absolute top-24 right-[-8%] h-[260px] w-[260px] rounded-full bg-gold-soft blur-3xl" />
          </div>

          <div className="container-page relative py-16 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold tracking-wide text-gold">
                {content.intro.eyebrow}
              </span>
              <h1 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight text-navy sm:text-4xl lg:text-5xl">
                {content.intro.heading}
              </h1>
              <p className="mt-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                {content.intro.description}
              </p>
            </div>

            <div className="mt-12">
              <ConsultationForm content={content} locale={locale} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
