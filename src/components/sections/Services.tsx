"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Users, Building2, Globe, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  featureKeys: string[];
  ctaKey: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    icon: User,
    titleKey: "service.individual.title",
    descKey: "service.individual.desc",
    featureKeys: [
      "service.individual.feature1",
      "service.individual.feature2",
      "service.individual.feature3",
      "service.individual.feature4",
    ],
    ctaKey: "service.individual.cta",
    href: "/services/individuel",
  },
  {
    icon: Users,
    titleKey: "service.group.title",
    descKey: "service.group.desc",
    featureKeys: [
      "service.group.feature1",
      "service.group.feature2",
      "service.group.feature3",
      "service.group.feature4",
    ],
    ctaKey: "service.group.cta",
    href: "/services/groupe",
  },
  {
    icon: Building2,
    titleKey: "service.enterprise.title",
    descKey: "service.enterprise.desc",
    featureKeys: [
      "service.enterprise.feature1",
      "service.enterprise.feature2",
      "service.enterprise.feature3",
      "service.enterprise.feature4",
    ],
    ctaKey: "service.enterprise.cta",
    href: "/services/entreprise",
  },
  {
    icon: Globe,
    titleKey: "service.digital.title",
    descKey: "service.digital.desc",
    featureKeys: [
      "service.digital.feature1",
      "service.digital.feature2",
      "service.digital.feature3",
      "service.digital.feature4",
    ],
    ctaKey: "service.digital.cta",
    href: "#contact",
  },
];

const sectionHeader = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function Services() {
  const { tr } = useI18n();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0F172A] py-24 sm:py-32"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#5A8A9A]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5A8A9A]/30 bg-[#5A8A9A]/10 px-4 py-1.5 text-sm font-medium tracking-wide text-[#7AB8C9] backdrop-blur-sm">
            {tr("services.tagline")}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {tr("services.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            {tr("services.subtitle")}
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.titleKey}
                className="group relative flex flex-col rounded-2xl border border-slate-700/50 bg-[#1E293B] p-6 sm:p-8 transition-all duration-500 hover:border-[#5A8A9A]/40 hover:shadow-xl hover:shadow-[#5A8A9A]/5"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5A8A9A]/0 to-transparent transition-all duration-500 group-hover:via-[#5A8A9A]/60" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A8A9A]/10 text-[#5A8A9A] ring-1 ring-[#5A8A9A]/20 transition-all duration-300 group-hover:bg-[#5A8A9A]/15 group-hover:ring-[#5A8A9A]/40">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {tr(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {tr(service.descKey)}
                </p>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-3">
                  {service.featureKeys.map((featureKey) => (
                    <li
                      key={featureKey}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#5A8A9A]"
                        strokeWidth={2}
                      />
                      <span>{tr(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center rounded-lg bg-[#5A8A9A] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7AB0C0] hover:-translate-y-0.5"
                  >
                    {tr(service.ctaKey)}
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
