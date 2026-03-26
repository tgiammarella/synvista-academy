"use client";

import { useI18n, Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 text-sm font-medium transition-all duration-200 hover:bg-white/10"
      aria-label={locale === "fr" ? "Switch to English" : "Passer au français"}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}
