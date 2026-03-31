"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const stats = [
  { number: "about.stat1.number", label: "about.stat1.label" },
  { number: "about.stat2.number", label: "about.stat2.label" },
  { number: "about.stat3.number", label: "about.stat3.label" },
];

export default function About() {
  const { tr } = useI18n();

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #162033 50%, #0F172A 100%)" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #5A8A9A 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeInUp}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
                style={{
                  background: "linear-gradient(135deg, #5A8A9A 0%, #3d6b7a 100%)",
                }}
              />
              {/* Teal border frame */}
              <div
                className="relative rounded-2xl p-[2px] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #5A8A9A 0%, rgba(90,138,154,0.3) 50%, #5A8A9A 100%)",
                }}
              >
                <div className="rounded-2xl overflow-hidden bg-[#0F172A]">
                  <Image
                    src="/images/ai-twin.png"
                    alt={tr("about.name")}
                    width={520}
                    height={620}
                    className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] h-auto object-cover mx-auto"
                    priority={false}
                  />
                </div>
              </div>
              {/* Decorative corner accents */}
              <div
                className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 rounded-tl-xl opacity-60"
                style={{ borderColor: "#5A8A9A" }}
              />
              <div
                className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 rounded-br-xl opacity-60"
                style={{ borderColor: "#5A8A9A" }}
              />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeInUp}
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#5A8A9A" }}
            >
              {tr("about.tagline")}
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
            >
              {tr("about.name")}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeInUp}
              className="text-lg font-medium mb-8"
              style={{ color: "#5A8A9A" }}
            >
              {tr("about.role")}
            </motion.p>

            {/* Bio paragraphs */}
            {(["about.bio1", "about.bio2", "about.bio3"] as const).map((key, i) => (
              <motion.p
                key={key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={3 + i}
                variants={fadeInUp}
                className="text-base md:text-lg leading-relaxed text-slate-300/90 mb-5 last:mb-0"
              >
                {tr(key)}
              </motion.p>
            ))}

            {/* Stats row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={6}
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={7 + i}
                  variants={fadeInUp}
                  className="relative group rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(30, 41, 59, 0.7)",
                    border: "1px solid rgba(90, 138, 154, 0.2)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(90,138,154,0.1) 0%, transparent 100%)",
                    }}
                  />
                  <p
                    className="relative text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: "#5A8A9A" }}
                  >
                    {tr(stat.number)}
                  </p>
                  <p className="relative text-xs md:text-sm text-slate-400 leading-tight">
                    {tr(stat.label)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
