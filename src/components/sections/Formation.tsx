"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Formation() {
  const { locale } = useI18n();
  const l = (fr: string, en: string) => (locale === "fr" ? fr : en);

  return (
    <section id="formation" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-card"
        >
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide text-primary-light backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  {l("Nouveau", "New")}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                <span className="gradient-text">
                  {l("Programme Autonomie IA", "AI Autonomy Program")}
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
              >
                {l(
                  "4 semaines pour maîtriser l'intelligence artificielle dans votre quotidien professionnel. Formation de groupe en direct, accompagnement personnalisé, résultats concrets.",
                  "4 weeks to master artificial intelligence in your professional life. Live group training, personalized support, concrete results."
                )}
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-10"
              >
                <Link
                  href="/autonomie-ia"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">
                    {l("En savoir plus", "Learn more")}
                  </span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
