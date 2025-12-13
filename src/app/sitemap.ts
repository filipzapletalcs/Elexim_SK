import { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { pathnames, type Pathname } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elexim.sk";

// Helper to get localized path
function getLocalizedPath(pathname: Pathname, locale: Locale): string {
  const path = pathnames[pathname];
  if (typeof path === "string") {
    return path;
  }
  return path[locale];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: Pathname; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/sluzby", priority: 0.9, changeFrequency: "monthly" },
    { path: "/produkty", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Generate URLs for all locales and pages
  for (const locale of locales) {
    for (const page of pages) {
      const localizedPath = getLocalizedPath(page.path, locale);
      const isRoot = page.path === "/";

      routes.push({
        url: `${siteUrl}/${locale}${isRoot ? "" : localizedPath}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => {
              const lPath = getLocalizedPath(page.path, l);
              return [l, `${siteUrl}/${l}${isRoot ? "" : lPath}`];
            })
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
