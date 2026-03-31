"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Cog,
  Code2,
  BrainCircuit,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "n8n",
  "Zapier",
  "Vercel",
  "PostgreSQL",
];

export default function EntreprisePage() {
  const { tr } = useI18n();

  const serviceIcons = [Cog, Code2, BrainCircuit, Target];
  const services = [
    {
      title: tr("funnel.enterprise.services.item1.title"),
      desc: tr("funnel.enterprise.services.item1.desc"),
    },
    {
      title: tr("funnel.enterprise.services.item2.title"),
      desc: tr("funnel.enterprise.services.item2.desc"),
    },
    {
      title: tr("funnel.enterprise.services.item3.title"),
      desc: tr("funnel.enterprise.services.item3.desc"),
    },
    {
      title: tr("funnel.enterprise.services.item4.title"),
      desc: tr("funnel.enterprise.services.item4.desc"),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-primary-light mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {tr("funnel.back")}
              </Link>
            </motion.div>

            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary-light"
              >
                <Building className="h-4 w-4" />
                {tr("nav.enterprise")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                <span className="gradient-text">{tr("funnel.enterprise.hero.title")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg leading-relaxed text-white/60 sm:text-xl"
              >
                {tr("funnel.enterprise.hero.subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10"
              >
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  {tr("funnel.cta")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {tr("funnel.enterprise.services.title")}
              </motion.h2>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {services.map((service, i) => {
                  const Icon = serviceIcons[i];
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 1}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:bg-card-hover hover:shadow-xl hover:shadow-primary/5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        {/* Number badge */}
                        <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary-light">
                          {i + 1}
                        </div>

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary-light transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/50">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {tr("funnel.enterprise.stack.title")}
              </motion.h2>

              <div className="mt-12 flex flex-wrap gap-4">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    variants={fadeUp}
                    custom={i + 1}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-card px-6 py-4 transition-all duration-500 hover:border-primary/30 hover:bg-card-hover hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative text-sm font-semibold tracking-wide text-white/70 transition-colors duration-300 group-hover:text-primary-light">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 sm:p-12 lg:p-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />

                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {tr("funnel.ready")}
                  </h2>
                  <div className="mt-8">
                    <a
                      href="/#contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                      {tr("funnel.cta")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
