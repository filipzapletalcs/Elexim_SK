import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProductsPreview from "@/components/sections/ProductsPreview";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

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
