"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

interface ProductCardProps {
  name: string;
  power: string;
  description: string;
  features: string[];
  image: string;
  variant?: "ac" | "dc";
  index?: number;
  ctaText: string;
  detailUrl: string;
  detailText: string;
}

export default function ProductCard({
  name,
  power,
  description,
  features,
  image,
  variant = "ac",
  index = 0,
  ctaText,
  detailUrl,
  detailText,
}: ProductCardProps) {
  const isAC = variant === "ac";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-secondary-200/60">
        {/* Product Image */}
        <div
          className={`relative aspect-square ${
            isAC
              ? "bg-gradient-to-b from-secondary-100/80 to-secondary-50/50"
              : "bg-[#e8e8e8]"
          }`}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 p-5 pt-4">
          {/* Header: Name + Power Badge */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold text-secondary-900 leading-tight">
              {name}
            </h3>
            <span
              className={`flex-shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                isAC
                  ? "bg-primary-100 text-primary-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {power}
            </span>
          </div>

          {/* Description - fixed height */}
          <p className="text-secondary-500 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
            {description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-secondary-100 mb-4" />

          {/* Features - always 3 items for consistency */}
          <ul className="space-y-2.5 mb-5 flex-1 min-h-[5.5rem]">
            {features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-secondary-600"
              >
                <Check
                  size={14}
                  className={`flex-shrink-0 mt-0.5 ${
                    isAC ? "text-primary-500" : "text-amber-500"
                  }`}
                />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons - always at bottom */}
          <div className="mt-auto flex flex-col gap-2">
            <Link
              href="/kontakt"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 font-medium rounded-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700"
            >
              {ctaText}
              <ArrowRight size={16} />
            </Link>
            <a
              href={detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-sm text-secondary-500 hover:text-primary-600 transition-colors"
            >
              {detailText}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
