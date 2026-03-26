"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatAnimationSlow = {
  y: [0, -8, 0],
  x: [0, 6, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Hero() {
  const { tr } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1a3a4a]">
      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] h-72 w-72 rounded-full bg-[#5A8A9A]/10 blur-[100px]"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute bottom-[20%] right-[5%] h-96 w-96 rounded-full bg-[#5A8A9A]/8 blur-[120px]"
        animate={floatAnimationSlow}
      />
      <motion.div
        className="absolute top-[60%] left-[50%] h-48 w-48 rounded-full bg-[#5A8A9A]/6 blur-[80px]"
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            {/* Tagline badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5A8A9A]/30 bg-[#5A8A9A]/10 px-4 py-1.5 text-sm font-medium tracking-wide text-[#7AB8C9] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5A8A9A] animate-pulse" />
                {tr("hero.tagline")}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              {tr("hero.title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="max-w-lg text-lg leading-relaxed text-slate-300/80 sm:text-xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {tr("hero.subtitle")}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <Link
                href="#services"
                className="group relative inline-flex h-13 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#5A8A9A] px-8 text-base font-semibold text-white shadow-lg shadow-[#5A8A9A]/25 transition-all duration-300 hover:bg-[#4A7A8A] hover:shadow-xl hover:shadow-[#5A8A9A]/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10">{tr("hero.cta_primary")}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-slate-500/30 px-8 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-[#5A8A9A]/50 hover:bg-white/5 hover:text-white hover:-translate-y-0.5"
              >
                {tr("hero.cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right side - Hero image */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[80%] w-[80%] rounded-full bg-[#5A8A9A]/15 blur-[60px]" />
            </div>

            <div className="relative">
              {/* Outer ring glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#5A8A9A]/20 to-transparent blur-2xl" />

              <Image
                src="/images/hero-ai.png"
                alt="AI-powered learning"
                width={580}
                height={580}
                priority
                className="relative z-10 h-auto w-full max-w-[580px] drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
