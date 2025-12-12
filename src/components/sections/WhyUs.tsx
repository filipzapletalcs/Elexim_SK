"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const clients = ["Škoda Auto", "ČEZ", "PRE", "ABB", "Schneider Electric"];

const highlights = [
  "Založené v roku 1999 so 100% českým vlastníctvom",
  "Sídlo v Kroměříži, pobočky na Slovensku a v Maďarsku",
  "Tri divízie: Elektrotechnika, Špeciálne aplikácie, eMobilita",
  "Oficiálny distribútor ABB (od 2000) a Schneider Electric (od 2006)",
  "Certifikácia ISO 9001 od roku 2011",
];

// Counter animation component
function CountUp({
  end,
  duration = 2000,
  suffix = "",
  isInView
}: {
  end: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <>{count}{suffix}</>;
}

export default function WhyUs() {
  const t = useTranslations("whyUs");
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 1999, label: "Rok založenia", accent: false, suffix: "" },
    { value: 25, label: "Rokov skúseností", accent: true, suffix: "+" },
    { value: 3, label: "Divízie spoločnosti", accent: true, suffix: "" },
    { value: 2017, label: "Vznik značky MyBox", accent: false, suffix: "" },
  ];

  return (
    <section id="o-nas" className="py-24 lg:py-32 bg-secondary-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-16 bg-primary-500 mb-6" />
            <h2 className="font-[family-name:var(--font-inter)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Sme súčasťou českej spoločnosti ELEXIM a.s. so sídlom v Kroměříži.
              Od roku 1999 budujeme povesť spoľahlivého partnera v oblasti elektrotechniky,
              špeciálnych aplikácií a elektromobility. Naše nabíjacie stanice MyBox
              sú vyvíjané a vyrábané v Česku.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-secondary-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trusted by */}
            <div>
              <p className="text-sm text-secondary-500 mb-4">Dôverujú nám:</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {clients.map((client) => (
                  <span key={client} className="text-secondary-900 font-semibold">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-2xl ${
                    stat.accent
                      ? "bg-primary-600 text-white"
                      : "bg-white border border-secondary-200"
                  }`}
                >
                  <div className={`text-4xl lg:text-5xl font-bold font-[family-name:var(--font-inter)] mb-2 ${
                    stat.accent ? "text-white" : "text-secondary-900"
                  }`}>
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                      duration={stat.value > 100 ? 2000 : 1500}
                    />
                  </div>
                  <div className={`text-sm ${
                    stat.accent ? "text-white/80" : "text-secondary-600"
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ISO Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6 p-5 bg-white rounded-2xl border border-secondary-200 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">ISO</span>
              </div>
              <div>
                <div className="font-semibold text-secondary-900">ISO 9001:2015</div>
                <div className="text-sm text-secondary-600">Certifikovaný systém riadenia kvality od roku 2011</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
