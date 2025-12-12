import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";
import ProductsPageContent from "@/components/pages/ProductsPageContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
