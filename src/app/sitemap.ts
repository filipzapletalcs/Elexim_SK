import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elexim.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/sluzby", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/produkty", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Generate URLs for all locales and pages
  for (const locale of locales) {
    for (const page of pages) {
      routes.push({
        url: `${siteUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  // Add root URL that redirects to default locale
  routes.push({
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
  });

  return routes;
}
