import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
