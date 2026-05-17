"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const steps = [
  { num: "1", titleKey: "process.step1.title", descKey: "process.step1.desc" },
  { num: "2", titleKey: "process.step2.title", descKey: "process.step2.desc" },
  { num: "3", titleKey: "process.step3.title", descKey: "process.step3.desc" },
];

const sectionHeader = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Process() {
  const { tr } = useI18n();

  return (
    <section className="relative bg-[#0F172A] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7AB8C9]">
            {tr("process.tagline")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {tr("process.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {tr("process.subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="text-center"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg shadow-[#5A8A9A]/25"
                style={{
                  background: "linear-gradient(135deg, #5A8A9A 0%, #7AB8C9 100%)",
                }}
              >
                {step.num}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {tr(step.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {tr(step.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
