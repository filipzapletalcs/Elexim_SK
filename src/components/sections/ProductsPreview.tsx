"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Battery, Zap } from "lucide-react";

const featuredProducts = [
  { key: "home", image: "/home_studio_web_cam_4-0000.png", type: "ac" },
  { key: "plus", image: "/plus_studio_web_cam_4-0000.png", type: "ac" },
  { key: "profi", image: "/profi_studio_web_cam_4-0000.png", type: "ac" },
  { key: "post", image: "/post_studio_web_cam_4-0000.png", type: "ac" },
];

export default function ProductsPreview() {
  const t = useTranslations("products");

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary-50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100">
                  <Battery size={20} className="text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                  MyBox
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl">
                {t("description")}
              </p>
            </div>

            <Link
              href="/produkty"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 self-start lg:self-auto"
            >
              {t("viewAll")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href="/produkty" className="group block">
                <div className="bg-gradient-to-b from-secondary-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500">
                  {/* Product Image */}
                  <div className="relative aspect-square p-3 sm:p-6">
                    <Image
                      src={product.image}
                      alt={t(`${product.key}.name`)}
                      fill
                      className="object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-5 border-t border-secondary-100 bg-white">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-inter)] text-sm sm:text-base font-bold text-secondary-900 group-hover:text-primary-600 transition-colors truncate">
                          {t(`${product.key}.name`)}
                        </h3>
                        <p className="text-xs sm:text-sm text-secondary-500">
                          {t(`${product.key}.power`)}
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-100 group-hover:bg-primary-100 flex items-center justify-center transition-colors flex-shrink-0">
                        <ArrowRight size={16} className="sm:hidden text-secondary-500 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                        <ArrowRight size={18} className="hidden sm:block text-secondary-500 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* DC Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Link href="/produkty" className="group block">
            <div className="relative bg-primary-600 rounded-3xl overflow-hidden p-8 lg:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.07]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="dc-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dc-grid)" />
                </svg>
              </div>
              {/* Glow behind charger */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/15 rounded-full blur-[100px]" />

              <div className="relative flex flex-col lg:flex-row items-center gap-8">
                {/* DC Image */}
                <div className="relative w-48 h-64 lg:w-64 lg:h-80 flex-shrink-0">
                  <Image
                    src="/hyc_200_bok-png.webp"
                    alt="Alpitronic HYC"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                    <div className="p-2.5 rounded-xl bg-amber-500/20">
                      <Zap size={20} className="text-amber-400" />
                    </div>
                    <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">
                      {t("dc.subtitle")}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-inter)] text-2xl lg:text-3xl font-bold text-white mb-3">
                    {t("dc.title")}
                  </h3>
                  <p className="text-secondary-300 mb-6 max-w-lg">
                    {t("dc.description")}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-primary-400 transition-colors">
                    {t("viewAll")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
