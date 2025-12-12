"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
  isMobile?: boolean;
}

export default function LanguageSwitcher({ isScrolled = true, isMobile = false }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Mobile: show inline buttons
  if (isMobile) {
    return (
      <div className="flex items-center gap-2">
        <Globe size={16} className="text-secondary-500" />
        <div className="flex gap-1">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                locale === loc
                  ? "text-primary-600 bg-primary-50"
                  : "text-secondary-600 hover:text-primary-600 hover:bg-secondary-100"
              }`}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: show dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
          isScrolled
            ? "text-secondary-600 hover:text-primary-600 hover:bg-secondary-100"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <Globe size={16} />
        <span className="uppercase">{locale}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-secondary-100 py-2 z-50 overflow-hidden"
          >
            {locales.map((loc, index) => (
              <motion.button
                key={loc}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                  locale === loc
                    ? "text-primary-600 font-medium bg-primary-50"
                    : "text-secondary-700 hover:bg-secondary-50"
                }`}
              >
                <span>{localeNames[loc]}</span>
                <span className="text-xs text-secondary-400 uppercase">{loc}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
