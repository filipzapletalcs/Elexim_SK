"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, Battery, Factory, Smartphone, Sparkles, Award, ExternalLink, ChevronDown } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

const acProducts = [
  { key: "home", image: "/home_studio_web_cam_4-0000.png", url: "https://mybox.eco/nabijeci-stanice/ac-nabijeci-stanice/mybox-home/" },
  { key: "plus", image: "/plus_studio_web_cam_4-0000.png", url: "https://mybox.eco/nabijeci-stanice/ac-nabijeci-stanice/mybox-plus/" },
  { key: "profi", image: "/profi_studio_web_cam_4-0000.png", url: "https://mybox.eco/nabijeci-stanice/ac-nabijeci-stanice/mybox-profi/" },
  { key: "post", image: "/post_studio_web_cam_4-0000.png", url: "https://mybox.eco/nabijeci-stanice/ac-nabijeci-stanice/mybox_post/" },
];

const dcProducts = [
  { key: "hyc50", image: "/hyc50_bok-png.webp", url: "https://mybox.eco/nabijeci-stanice/dc-nabijeci-stanice/alpitronic-hyc50/" },
  { key: "hyc200", image: "/hyc_200_bok-png.webp", url: "https://mybox.eco/nabijeci-stanice/dc-nabijeci-stanice/alpitronic-hyc200/" },
  { key: "hyc400", image: "/hyc400_bok-png.webp", url: "https://mybox.eco/nabijeci-stanice/dc-nabijeci-stanice/alpitronic-hyc400/" },
];

export default function ProductsPageContent() {
  const t = useTranslations("products");

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/profi-360.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Animated line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-1 bg-white mb-8"
            />

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              {t("title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10"
            >
              {t("description")}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
              >
                {t("cta.button")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </section>

      {/* MyBox Brand Section */}
      <section className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mybox_vila_home_cam_6_3k_final.jpg"
                  alt="MyBox"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
              </div>
              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:right-8 bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6 border border-secondary-100 dark:border-secondary-700"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-white">2017</div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-300 mt-1">{t("mybox.stats.since")}</div>
                  </div>
                  <div className="text-center border-x border-secondary-100 dark:border-secondary-700 px-4">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-white">500+</div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-300 mt-1">{t("mybox.stats.installations")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-white">5</div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-300 mt-1">{t("mybox.stats.countries")}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8">
                <Image
                  src="/logo-mybox.svg"
                  alt="MyBox"
                  width={200}
                  height={60}
                  className="h-14 w-auto dark:brightness-0 dark:invert"
                />
              </div>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8">
                {t("mybox.description")}
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  { key: "czech", icon: Factory },
                  { key: "smart", icon: Smartphone },
                  { key: "design", icon: Sparkles },
                  { key: "trusted", icon: Award },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.key}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50/70 dark:bg-secondary-800/70 hover:bg-secondary-100/70 dark:hover:bg-secondary-700/70 transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-white flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-1">
                          {t(`mybox.features.${feature.key}.title`)}
                        </h3>
                        <p className="text-sm text-secondary-500 dark:text-secondary-400">
                          {t(`mybox.features.${feature.key}.description`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://mybox.eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-white font-semibold hover:text-primary-700 dark:hover:text-white/80 transition-colors"
              >
                mybox.eco
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AC Charging Stations */}
      <section className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/50">
                <Battery size={20} className="text-primary-600 dark:text-white" />
              </div>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                {t("ac.subtitle")}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl lg:text-4xl font-bold text-primary-600 dark:text-secondary-100 mb-4">
              {t("ac.title")}
            </h2>
            <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl">
              {t("ac.description")}
            </p>
          </motion.div>

          {/* AC Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {acProducts.map((product, index) => (
              <ProductCard
                key={product.key}
                name={t(`${product.key}.name`)}
                power={t(`${product.key}.power`)}
                description={t(`${product.key}.description`)}
                features={t.raw(`${product.key}.features`) as string[]}
                image={product.image}
                variant="ac"
                index={index}
                ctaText={t("getQuote")}
                detailUrl={product.url}
                detailText={t("learnMore")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DC Fast Chargers */}
      <section className="py-20 lg:py-28 bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/50">
                <Zap size={20} className="text-amber-600 dark:text-white" />
              </div>
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                {t("dc.subtitle")}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl lg:text-4xl font-bold text-primary-600 dark:text-secondary-100 mb-4">
              {t("dc.title")}
            </h2>
            <p className="text-lg text-secondary-500 dark:text-secondary-400 max-w-2xl">
              {t("dc.description")}
            </p>
          </motion.div>

          {/* DC Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
            {dcProducts.map((product, index) => (
              <ProductCard
                key={product.key}
                name={t(`${product.key}.name`)}
                power={t(`${product.key}.power`)}
                description={t(`${product.key}.description`)}
                features={t.raw(`${product.key}.features`) as string[]}
                image={product.image}
                variant="dc"
                index={index}
                ctaText={t("getQuote")}
                detailUrl={product.url}
                detailText={t("learnMore")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-primary-600">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="products-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#products-grid)" />
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
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-50 transition-all duration-300"
            >
              {t("cta.button")}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
