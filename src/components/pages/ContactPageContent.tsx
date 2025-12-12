"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPageContent() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-secondary-900 to-secondary-950" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/mybox_post_venkovni_parkoviste_cam_7_3k_final.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="h-1 w-20 bg-white mb-8" />
            <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex"
            >
              <div className="bg-secondary-50 rounded-2xl p-8 lg:p-10 flex flex-col w-full">
                <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-secondary-900 mb-8">
                  {t("info.title")}
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500 mb-1">{t("info.address")}</div>
                      <div className="text-secondary-900 font-medium">{t("info.addressValue")}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500 mb-1">{t("info.phone")}</div>
                      <a href="tel:+420573335009" className="text-secondary-900 font-medium hover:text-primary-600 transition-colors">
                        +420 573 335 009
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500 mb-1">{t("info.email")}</div>
                      <a href="mailto:info@elexim.sk" className="text-secondary-900 font-medium hover:text-primary-600 transition-colors">
                        info@elexim.sk
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500 mb-1">{t("info.hours")}</div>
                      <div className="text-secondary-900 font-medium">{t("info.hoursValue")}</div>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="mt-auto pt-8 border-t border-secondary-200">
                  <h3 className="font-semibold text-secondary-900 mb-4">ELEXIM SK, s.r.o.</h3>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-secondary-500 mb-1">{t("info.ico")}</div>
                      <div className="text-secondary-900 font-medium">51 818 612</div>
                    </div>
                    <div>
                      <div className="text-secondary-500 mb-1">{t("info.dic")}</div>
                      <div className="text-secondary-900 font-medium">SK2120801155</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex"
            >
              <div className="bg-secondary-50 rounded-2xl p-8 lg:p-10 flex flex-col w-full">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {t("form.success")}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      Ozveme sa vám čo najskôr.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.name")} *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.email")} *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.phone")}
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.company")}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.customerType")}
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all">
                          <option value="individual">{t("form.customerTypes.individual")}</option>
                          <option value="company">{t("form.customerTypes.company")}</option>
                          <option value="public">{t("form.customerTypes.public")}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          {t("form.subject")}
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all">
                          <option value="consulting">{t("form.subjects.consulting")}</option>
                          <option value="delivery">{t("form.subjects.delivery")}</option>
                          <option value="installation">{t("form.subjects.installation")}</option>
                          <option value="service">{t("form.subjects.service")}</option>
                          <option value="other">{t("form.subjects.other")}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        {t("form.message")} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        id="gdpr"
                        className="mt-1 w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="gdpr" className="text-sm text-secondary-600">
                        {t("form.gdpr")} *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Odosielam...
                        </>
                      ) : (
                        <>
                          {t("form.submit")}
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8393!2d17.1077!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sDunajsk%C3%A1%208%2C%20811%2008%20Star%C3%A9%20Mesto%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
