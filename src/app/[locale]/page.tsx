import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProductsPreview from "@/components/sections/ProductsPreview";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

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
    sk: "ELEXIM SK - Nabíjacia infraštruktúra pre elektromobily",
    cs: "ELEXIM SK - Nabíjecí infrastruktura pro elektromobily",
    en: "ELEXIM SK - EV Charging Infrastructure",
  };

  const descriptions: Record<string, string> = {
    sk: "Komplexné riešenia nabíjacej infraštruktúry pre elektromobily. Wallboxy, nabíjacie stanice, poradenstvo a inštalácia na Slovensku.",
    cs: "Komplexní řešení nabíjecí infrastruktury pro elektromobily. Wallboxy, nabíjecí stanice, poradenství a instalace.",
    en: "Complete EV charging infrastructure solutions. Wallboxes, charging stations, consulting and installation services.",
  };

  return {
    title: titles[locale] || titles[defaultLocale],
    description: descriptions[locale] || descriptions[defaultLocale],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        sk: "/sk",
        cs: "/cs",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <ProductsPreview />
      <WhyUs />
      <CTA />
    </>
  );
}
