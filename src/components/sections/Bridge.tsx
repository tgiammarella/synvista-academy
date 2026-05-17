"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Bridge() {
  const { tr } = useI18n();

  return (
    <section
      className="relative border-y border-white/5 py-20 text-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(90, 138, 154, 0.08) 0%, rgba(244, 184, 96, 0.08) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.25rem]"
        >
          {tr("bridge.title")}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="mt-5 text-base text-slate-300/80 sm:text-lg"
        >
          {tr("bridge.subtitle")}
        </motion.p>
      </div>
    </section>
  );
}
