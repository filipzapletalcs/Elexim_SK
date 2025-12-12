import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elexim.sk";

export const metadata: Metadata = {
  title: {
    default: "ELEXIM SK - Nabíjacia infraštruktúra pre elektromobily",
    template: "%s | ELEXIM SK",
  },
  description: "Komplexné riešenia nabíjacej infraštruktúry pre elektromobily. Wallboxy, nabíjacie stanice, poradenstvo a inštalácia na Slovensku.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo-elexim.png",
    apple: "/logo-elexim.png",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#182262",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
