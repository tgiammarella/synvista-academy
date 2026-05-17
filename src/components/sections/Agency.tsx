"use client";

import { motion } from "framer-motion";
import { Zap, Puzzle, Bot, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

interface AgencyCard {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const cards: AgencyCard[] = [
  {
    icon: Zap,
    titleKey: "agency.card1.title",
    descKey: "agency.card1.desc",
  },
  {
    icon: Puzzle,
    titleKey: "agency.card2.title",
    descKey: "agency.card2.desc",
  },
  {
    icon: Bot,
    titleKey: "agency.card3.title",
    descKey: "agency.card3.desc",
  },
  {
    icon: Globe,
    titleKey: "agency.card4.title",
    descKey: "agency.card4.desc",
  },
];

const sectionHeader = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Agency() {
  const { tr } = useI18n();

  return (
    <section
      id="agency"
      className="relative overflow-hidden bg-[#0F172A] py-24 sm:py-32"
    >
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-[#F4B860]/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F4B860]">
            {tr("agency.tagline")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {tr("agency.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {tr("agency.subtitle")}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.titleKey}
                className="group relative rounded-2xl border border-slate-700/50 bg-[#1E293B] p-8 transition-all duration-300 hover:border-[#F4B860]/40 hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4B860]/12 text-[#F4B860] ring-1 ring-[#F4B860]/25">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {tr(card.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {tr(card.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Team note */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-700/50 bg-[#1E293B] p-8 text-center"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h4 className="text-xl font-semibold text-white">
            {tr("agency.note.title")}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {tr("agency.note.desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
