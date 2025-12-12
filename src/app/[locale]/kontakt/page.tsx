import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import ContactPageContent from "@/components/pages/ContactPageContent";

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
    sk: "Kontakt",
    cs: "Kontakt",
    en: "Contact",
  };

  const descriptions: Record<string, string> = {
    sk: "Kontaktujte nás pre nezáväznú konzultáciu ohľadom nabíjacej infraštruktúry. ELEXIM SK, Dunajská 8, Bratislava.",
    cs: "Kontaktujte nás pro nezávaznou konzultaci ohledně nabíjecí infrastruktury. ELEXIM SK, Dunajská 8, Bratislava.",
    en: "Contact us for a free consultation about charging infrastructure. ELEXIM SK, Dunajská 8, Bratislava.",
  };

  return {
    title: titles[locale] || titles[defaultLocale],
    description: descriptions[locale] || descriptions[defaultLocale],
    alternates: {
      canonical: `/${locale}/kontakt`,
      languages: {
        sk: "/sk/kontakt",
        cs: "/cs/kontakt",
        en: "/en/kontakt",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageContent />;
}
