"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: tr("nav.academy"), href: "/#academy" },
    { label: tr("nav.agency"), href: "/#agency" },
    { label: tr("nav.about"), href: "/#about" },
    { label: tr("nav.contact"), href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0F172A]/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative shrink-0">
              <Image
                src="/images/logo-white.png"
                alt="Synvista — Académie + Agence IA"
                width={160}
                height={40}
                priority
                className="h-auto w-[140px] sm:w-[160px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="mx-2 h-6 w-px bg-white/10" />

              {/* Language Toggle */}
              <LanguageToggle />
            </div>

            {/* Mobile: Language Toggle + Hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F172A]/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-2 px-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full max-w-sm rounded-xl px-6 py-4 text-center text-xl font-medium text-white transition-colors hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
