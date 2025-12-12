"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const nav = useTranslations("navigation");
  const contact = useTranslations("contact.info");
  const footer = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary-100 dark:bg-primary-950 text-secondary-900 dark:text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/logo-elexim.png"
                alt="ELEXIM"
                width={140}
                height={40}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
            </div>
            <p className="text-secondary-600 dark:text-white/90 text-sm leading-relaxed mb-6 max-w-sm">
              {footer("description")}
            </p>
            <a
              href="https://elexim.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-white hover:text-primary-700 dark:hover:text-white/80 transition-colors text-sm group"
            >
              elexim.net
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">{footer("quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: nav("home") },
                { href: "/sluzby", label: nav("services") },
                { href: "/produkty", label: nav("products") },
                { href: "/kontakt", label: nav("contact") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-600 dark:text-white/90 hover:text-primary-600 dark:hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">{footer("contactInfo")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary-400 dark:text-white/70 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-600 dark:text-white/90 text-sm leading-relaxed">
                  {contact("addressValue")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary-400 dark:text-white/70 flex-shrink-0" />
                <a
                  href="tel:+421000000000"
                  className="text-secondary-600 dark:text-white/90 hover:text-primary-600 dark:hover:text-white transition-colors text-sm"
                >
                  +421 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary-400 dark:text-white/70 flex-shrink-0" />
                <a
                  href="mailto:info@elexim.sk"
                  className="text-secondary-600 dark:text-white/90 hover:text-primary-600 dark:hover:text-white transition-colors text-sm"
                >
                  info@elexim.sk
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">ELEXIM SK, s.r.o.</h3>
            <p className="text-secondary-600 dark:text-white/90 text-sm">IČO: 51818612</p>
            <p className="text-secondary-600 dark:text-white/90 text-sm mb-4">DIČ: SK2120801155</p>
            <p className="text-secondary-500 dark:text-white/70 text-xs leading-relaxed">
              Spoločnosť zapísaná v OR Bratislava I, vložka č. 140527/B
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-200 dark:border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary-500 dark:text-white/70 text-sm">
              &copy; {currentYear} ELEXIM SK, s.r.o. {footer("copyright")}
            </p>
            <span className="text-secondary-500 dark:text-white/70 text-sm">
              Materská spoločnosť{" "}
              <a
                href="https://elexim.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-white hover:text-primary-700 dark:hover:text-white/80 transition-colors"
              >
                ELEXIM a.s.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
