"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Users, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

interface AcademyCard {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  featureKeys: string[];
  ctaKey: string;
  href: string;
}

const cards: AcademyCard[] = [
  {
    icon: User,
    titleKey: "academy.individual.title",
    descKey: "academy.individual.desc",
    featureKeys: [
      "academy.individual.feature1",
      "academy.individual.feature2",
      "academy.individual.feature3",
      "academy.individual.feature4",
      "academy.individual.feature5",
    ],
    ctaKey: "academy.individual.cta",
    href: "/services/individuel",
  },
  {
    icon: Users,
    titleKey: "academy.group.title",
    descKey: "academy.group.desc",
    featureKeys: [
      "academy.group.feature1",
      "academy.group.feature2",
      "academy.group.feature3",
      "academy.group.feature4",
      "academy.group.feature5",
    ],
    ctaKey: "academy.group.cta",
    href: "/services/groupe",
  },
];

const sectionHeader = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Academy() {
  const { tr } = useI18n();

  return (
    <section
      id="academy"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #162033 100%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#5A8A9A]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#7AB8C9]">
            {tr("academy.tagline")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {tr("academy.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {tr("academy.subtitle")}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.titleKey}
                className="group relative flex flex-col rounded-2xl border border-slate-700/50 bg-[#1E293B] p-8 transition-all duration-500 hover:border-[#5A8A9A]/50 hover:shadow-xl hover:shadow-[#5A8A9A]/5 hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5A8A9A]/15 text-[#7AB8C9] ring-1 ring-[#5A8A9A]/30 transition-all duration-300 group-hover:bg-[#5A8A9A]/25">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {tr(card.titleKey)}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {tr(card.descKey)}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {card.featureKeys.map((featureKey) => (
                    <li
                      key={featureKey}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5A8A9A]" />
                      <span>{tr(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#5A8A9A] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7AB0C0] hover:-translate-y-0.5"
                  >
                    {tr(card.ctaKey)}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
