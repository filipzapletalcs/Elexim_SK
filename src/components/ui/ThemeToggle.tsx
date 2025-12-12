"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  isScrolled?: boolean;
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({
  isScrolled = true,
  showLabel = false,
  className = "",
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg ${
          isScrolled
            ? "text-secondary-600 bg-secondary-100"
            : "text-white/60 bg-white/10"
        } ${className}`}
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
        isScrolled
          ? "text-secondary-600 hover:text-primary-600 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-secondary-800"
          : "text-white/80 hover:text-white hover:bg-white/10"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: -10, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
      {showLabel && (
        <span className="text-sm font-medium">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
