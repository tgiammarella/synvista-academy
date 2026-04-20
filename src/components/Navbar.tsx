"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const subServices = [
    { label: tr("nav.individual"), href: "/services/individuel" },
    { label: tr("nav.group"), href: "/autonomie-ia" },
    { label: tr("nav.enterprise"), href: "/services/entreprise" },
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
                alt="Synvista Academie IA"
                width={160}
                height={40}
                priority
                className="h-auto w-[140px] sm:w-[160px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`group flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    servicesOpen
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tr("nav.services")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#0F172A]/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      {subServices.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/70 transition-all duration-200 hover:bg-[#5A8A9A]/20 hover:text-white"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#5A8A9A] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <a
                href="#about"
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {tr("nav.about")}
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {tr("nav.contact")}
              </a>

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
              {/* Services Accordion */}
              <div className="w-full max-w-sm">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-6 py-4 text-xl font-medium text-white transition-colors hover:bg-white/5"
                >
                  {tr("nav.services")}
                  <ChevronDown
                    className={`h-5 w-5 text-[#5A8A9A] transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-2 pl-6">
                        {subServices.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-6 py-3 text-base text-white/60 transition-colors hover:text-white"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#5A8A9A]" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="w-full max-w-sm rounded-xl px-6 py-4 text-center text-xl font-medium text-white transition-colors hover:bg-white/5"
              >
                {tr("nav.about")}
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full max-w-sm rounded-xl px-6 py-4 text-center text-xl font-medium text-white transition-colors hover:bg-white/5"
              >
                {tr("nav.contact")}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
