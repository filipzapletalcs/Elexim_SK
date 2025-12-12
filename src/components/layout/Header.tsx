"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/sluzby", label: t("services") },
    { href: "/produkty", label: t("products") },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-secondary-900/90 backdrop-blur-lg shadow-sm dark:shadow-secondary-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src="/logo-elexim.png"
              alt="ELEXIM"
              width={140}
              height={40}
              className={`h-8 md:h-10 w-auto transition-all duration-300 ${
                !isScrolled ? "brightness-0 invert" : "dark:brightness-0 dark:invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isScrolled
                    ? "text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                } ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-white"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle isScrolled={isScrolled} />
            <LanguageSwitcher isScrolled={isScrolled} />
            <Link
              href="/kontakt"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25 dark:bg-white dark:text-primary-600 dark:hover:bg-white/90 dark:hover:shadow-white/10"
                  : "bg-white text-primary-600 hover:bg-white/90"
              }`}
            >
              {t("contact")}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-100 dark:border-secondary-700 overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 text-base font-medium rounded-xl transition-colors ${
                      pathname === item.href
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50"
                        : "text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-secondary-100 dark:border-secondary-700 flex items-center justify-between"
              >
                <LanguageSwitcher isScrolled={true} isMobile={true} />
                <ThemeToggle isScrolled={true} showLabel />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
