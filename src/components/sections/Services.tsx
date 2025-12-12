"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Truck,
  Wrench,
  Settings,
  Cloud,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  { key: "consulting", icon: Lightbulb },
  { key: "delivery", icon: Truck },
  { key: "installation", icon: Wrench },
  { key: "service", icon: Settings },
  { key: "integration", icon: Cloud },
  { key: "support", icon: Headphones },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="sluzby" className="py-24 lg:py-32 bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50/40 dark:from-primary-950/40 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="h-1 w-16 bg-primary-500 mb-6" />
          <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-secondary-100 mb-5">
            {t("title")}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link href="/sluzby" className="group block h-full">
                  <div className="h-full bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-7 hover:bg-primary-600 transition-all duration-500 border border-secondary-100 dark:border-secondary-700 hover:border-primary-600 relative overflow-hidden">
                    <div className="relative">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-500">
                        <Icon size={24} className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold text-secondary-900 dark:text-secondary-100 group-hover:text-white mb-2 transition-colors duration-500">
                        {t(`${service.key}.title`)}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-500">
                        {t(`${service.key}.description`)}
                      </p>

                      {/* Arrow indicator */}
                      <div className="mt-5 flex items-center gap-2 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500">
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          {t("cta.button")}
                        </span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/sluzby"
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-3 text-secondary-900 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-center sm:text-left"
          >
            <span className="text-base sm:text-lg font-semibold max-w-xs sm:max-w-none">{t("description")}</span>
            <div className="w-10 h-10 rounded-full bg-primary-600 group-hover:bg-primary-700 flex items-center justify-center transition-colors flex-shrink-0">
              <ArrowRight size={18} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
