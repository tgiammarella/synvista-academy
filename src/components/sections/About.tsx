"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { GraduationCap, MapPin, Languages } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const pillars = [
  {
    icon: GraduationCap,
    labelKey: "about.pillar1.label",
    subKey: "about.pillar1.sub",
  },
  {
    icon: MapPin,
    labelKey: "about.pillar2.label",
    subKey: "about.pillar2.sub",
  },
  {
    icon: Languages,
    labelKey: "about.pillar3.label",
    subKey: "about.pillar3.sub",
  },
];

export default function About() {
  const { tr } = useI18n();

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#162033" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #5A8A9A 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#7AB8C9]"
        >
          {tr("about.tagline")}
        </motion.span>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          className="mt-6 flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-full opacity-50 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #5A8A9A 0%, #7AB8C9 100%)",
              }}
            />
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-[#5A8A9A]/40 sm:h-36 sm:w-36">
              <Image
                src="/images/tina-headshot.png"
                alt={tr("about.name")}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {tr("about.name")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={3}
          className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#7AB8C9]"
        >
          {tr("about.role")}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={4}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
        >
          {tr("about.bio1")}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={5}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300/85 sm:text-lg"
        >
          {tr("about.bio2")}
        </motion.p>

        {/* Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={6}
          className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.labelKey}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={7 + i}
                className="rounded-2xl border border-white/10 bg-[#1E293B] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#5A8A9A]/40"
              >
                <Icon className="mx-auto h-6 w-6 text-[#7AB8C9]" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold text-white">
                  {tr(pillar.labelKey)}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  {tr(pillar.subKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
