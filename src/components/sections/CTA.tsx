"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-primary-600">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-50 transition-all duration-300"
          >
            {t("button")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
