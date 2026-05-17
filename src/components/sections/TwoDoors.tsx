"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function TwoDoors() {
  const { tr } = useI18n();

  return (
    <section className="relative bg-[#0F172A] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Academy Door */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#5A8A9A]/50"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#5A8A9A] to-[#7AB8C9]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7AB8C9]">
              {tr("doors.academy.label")}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              {tr("doors.academy.title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {tr("doors.academy.desc")}
            </p>
            <Link
              href="#academy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3"
            >
              {tr("doors.academy.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Agency Door */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B860]/50"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F4B860] to-[#FF8A65]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B860]">
              {tr("doors.agency.label")}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              {tr("doors.agency.title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {tr("doors.agency.desc")}
            </p>
            <Link
              href="#agency"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3"
            >
              {tr("doors.agency.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
