"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Lightbulb,
  Truck,
  Wrench,
  Settings,
  Cloud,
  Headphones,
  ArrowRight,
  Check,
  ChevronDown,
  MessageSquare,
  FileSearch,
  PenTool,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  { key: "contact", icon: MessageSquare },
  { key: "analysis", icon: FileSearch },
  { key: "design", icon: PenTool },
  { key: "deliveryStep", icon: Truck },
  { key: "installationStep", icon: Wrench },
  { key: "handover", icon: CheckCircle2 },
];

const services = [
  { key: "consulting", icon: Lightbulb, image: "/mybox-profi_office-cam-2_3k_final.jpg" },
  { key: "delivery", icon: Truck, image: "/mybox_plus_radovka_cam_1_3k_final.jpg" },
  { key: "installation", icon: Wrench, image: "/mybox_profi_podzemni_garaz_cam-8_3k_final.jpg" },
  { key: "service", icon: Settings, image: "/mybox-profi_office-cam-6_3k_final.jpg" },
  { key: "integration", icon: Cloud, image: "/MacBook Pro 16 Mockup (Community)@2x.webp" },
  { key: "support", icon: Headphones, image: "/mybox_vila_home_cam_7_3k_final-2.jpg" },
];

export default function ServicesPageContent() {
  const t = useTranslations("services");

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
            <source src="/post-360-web-final.mp4" type="video/mp4" />
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

      {/* Process Section - "Ako to funguje" */}
      <section className="py-20 lg:py-28 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="h-1 w-16 bg-primary-500 mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-secondary-100 mb-5">
              {t("process.title")}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              {t("process.subtitle")}
            </p>
          </motion.div>

          {/* Timeline - Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-secondary-200 dark:bg-secondary-700" />
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-white dark:bg-secondary-800 border-2 border-primary-200 dark:border-secondary-700 flex items-center justify-center shadow-sm hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-md transition-all duration-300">
                      <Icon size={24} className="text-primary-600 dark:text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                      {t(`process.steps.${step.key}.title`)}
                    </h4>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                      {t(`process.steps.${step.key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline - Mobile */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-secondary-800 border-2 border-primary-200 dark:border-secondary-700 flex items-center justify-center shadow-sm">
                      <Icon size={20} className="text-primary-600 dark:text-white" />
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-primary-200 dark:bg-secondary-700 my-2" />}
                  </div>
                  <div className={`flex-1 ${isLast ? "" : "pb-6"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{String(index + 1).padStart(2, "0")}</span>
                      <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">{t(`process.steps.${step.key}.title`)}</h4>
                    </div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">{t(`process.steps.${step.key}.description`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8 lg:p-10 border border-secondary-100 dark:border-secondary-700 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-secondary-900 dark:text-secondary-100">{t("process.cta.title")}</p>
                  <p className="text-secondary-600 dark:text-secondary-400">{t("process.cta.subtitle")}</p>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
              >
                {t("cta.button")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${service.key === "integration" ? "bg-secondary-100 dark:bg-secondary-800" : "shadow-2xl"}`}>
                      <Image
                        src={service.image}
                        alt={t(`${service.key}.title`)}
                        fill
                        className={service.key === "integration" ? "object-contain p-4" : "object-cover"}
                      />
                      {service.key !== "integration" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/40 to-transparent" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="inline-flex p-3 rounded-2xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-white mb-6">
                      <Icon size={28} />
                    </div>
                    <h2 className="font-[family-name:var(--font-inter)] text-3xl lg:text-4xl font-bold text-primary-600 dark:text-secondary-100 mb-4">
                      {t(`${service.key}.title`)}
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed mb-8">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                      {(t.raw(`${service.key}.features`) as string[]).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                            <Check size={12} className="text-primary-600 dark:text-white" />
                          </div>
                          <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-primary-600">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="services-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
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
