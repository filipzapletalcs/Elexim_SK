import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import ProductsPageContent from "@/components/pages/ProductsPageContent";

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
    sk: "Produkty",
    cs: "Produkty",
    en: "Products",
  };

  const descriptions: Record<string, string> = {
    sk: "Wallboxy a nabíjacie stanice pre elektromobily. MyBox, OCPP stanice, AC a DC nabíjačky pre domácnosti aj firmy.",
    cs: "Wallboxy a nabíjecí stanice pro elektromobily. MyBox, OCPP stanice, AC a DC nabíječky pro domácnosti i firmy.",
    en: "Wallboxes and charging stations for electric vehicles. MyBox, OCPP stations, AC and DC chargers for homes and businesses.",
  };

  return {
    title: titles[locale] || titles[defaultLocale],
    description: descriptions[locale] || descriptions[defaultLocale],
    alternates: {
      canonical: `/${locale}/produkty`,
      languages: {
        sk: "/sk/produkty",
        cs: "/cs/produkty",
        en: "/en/produkty",
      },
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductsPageContent />;
}
