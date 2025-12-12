import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elexim.sk";

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
    title: {
      default: titles[locale] || titles[defaultLocale],
      template: `%s | ELEXIM SK`,
    },
    description: descriptions[locale] || descriptions[defaultLocale],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        sk: "/sk",
        cs: "/cs",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "sk" ? "sk_SK" : locale === "cs" ? "cs_CZ" : "en_US",
      url: siteUrl,
      siteName: "ELEXIM SK",
      title: titles[locale] || titles[defaultLocale],
      description: descriptions[locale] || descriptions[defaultLocale],
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ELEXIM SK - Nabíjacia infraštruktúra",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles[defaultLocale],
      description: descriptions[locale] || descriptions[defaultLocale],
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/logo-elexim.png",
      apple: "/logo-elexim.png",
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
