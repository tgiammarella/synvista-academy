"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Neurodivergence() {
  const { tr } = useI18n();

  return (
    <section
      id="neurodivergence"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "#162033" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5A8A9A]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5A8A9A]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#5A8A9A]/30 bg-gradient-to-br from-[#1E293B] to-[#162033] p-8 sm:p-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#5A8A9A]/10 blur-[120px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5A8A9A]/30 bg-[#5A8A9A]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7AB8C9]">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              {tr("neuro.eyebrow")}
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {tr("neuro.title")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {tr("neuro.body")}
            </p>

            <div className="mt-8">
              <Link
                href="/neurodivergence"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5A8A9A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7AB0C0] hover:-translate-y-0.5"
              >
                {tr("neuro.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
