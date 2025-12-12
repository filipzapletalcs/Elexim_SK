import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    sk: "Služby",
    cs: "Služby",
    en: "Services",
  };

  const descriptions: Record<string, string> = {
    sk: "Kompletné služby v oblasti elektromobility - poradenstvo, projektovanie, dodávka a inštalácia nabíjacích staníc, servis a údržba.",
    cs: "Kompletní služby v oblasti elektromobility - poradenství, projektování, dodávka a instalace nabíjecích stanic, servis a údržba.",
    en: "Complete e-mobility services - consulting, design, delivery and installation of charging stations, service and maintenance.",
  };

  return {
    title: titles[locale] || titles[defaultLocale],
    description: descriptions[locale] || descriptions[defaultLocale],
    alternates: {
      canonical: `/${locale}/sluzby`,
      languages: {
        sk: "/sk/sluzby",
        cs: "/cs/sluzby",
        en: "/en/sluzby",
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageContent />;
}
