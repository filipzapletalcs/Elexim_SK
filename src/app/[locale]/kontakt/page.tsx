import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";
import ContactPageContent from "@/components/pages/ContactPageContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
