"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Mail,
  Repeat,
  Target,
  Video,
  PlayCircle,
  MessageCircle,
  UserCheck,
  ChevronDown,
  Check,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── animation variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── bilingual content helpers ─── */

function useLang() {
  const { locale } = useI18n();
  return (fr: string, en: string) => (locale === "fr" ? fr : en);
}

/* ─── FAQ accordion item ─── */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={0}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-white transition-colors hover:text-primary-light sm:text-lg"
      >
        {question}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-white/60 sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── pricing CTA buttons (reused in Pricing + Final CTA) ─── */

function PricingButtons({ l }: { l: (fr: string, en: string) => string }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
      {/* Full payment */}
      <button
        type="button"
        onClick={(e) => e.preventDefault()}
        className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 px-8 py-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 sm:min-w-[260px] cursor-default"
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative text-3xl font-bold text-white">397$</span>
        <span className="relative mt-2 text-sm font-semibold text-primary-light">
          {l("Payer en un versement", "Pay in full")}
        </span>
      </button>

      {/* Payment plan */}
      <button
        type="button"
        onClick={(e) => e.preventDefault()}
        className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-card px-8 py-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-card-hover hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 sm:min-w-[260px] cursor-default"
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative text-3xl font-bold text-white">
          3 × 142$
        </span>
        <span className="relative mt-2 text-sm font-semibold text-white/60">
          {l("3 versements de 142$", "3 payments of 142$")}
        </span>
      </button>
    </div>
  );
}

/* ─── Hero CTA with "coming soon" feedback ─── */

function HeroCta({ l }: { l: (fr: string, en: string) => string }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setShowMessage(true)}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      >
        <span className="relative z-10">
          {l("Je m'inscris", "Sign me up")}
        </span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
      <AnimatePresence>
        {showMessage && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium text-primary-light"
          >
            {l("Inscriptions bientôt ouvertes", "Registration opening soon")}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function AutonomieIAPage() {
  const l = useLang();

  const learnCards = [
    {
      icon: Lightbulb,
      title: l("Les fondations de l'IA", "AI Foundations"),
      desc: l(
        "Comprendre les outils et choisir les bons pour votre situation",
        "Understand the tools and choose the right ones for your situation"
      ),
    },
    {
      icon: Mail,
      title: l("L'IA pour votre travail client", "AI for Client Work"),
      desc: l(
        "Courriels, documents, communications\u00A0: laissez l'IA vous aider concrètement",
        "Emails, documents, communications: let AI help you concretely"
      ),
    },
    {
      icon: Repeat,
      title: l("Automatiser le répétitif", "Automate the Repetitive"),
      desc: l(
        "Réseaux sociaux, contenu, admin\u00A0: arrêtez de tout faire manuellement",
        "Social media, content, admin: stop doing everything manually"
      ),
    },
    {
      icon: Target,
      title: l("Votre plan d'action personnel", "Your Personal Action Plan"),
      desc: l(
        "Repartez avec une feuille de route concrète adaptée à VOTRE entreprise",
        "Leave with a concrete roadmap adapted to YOUR business"
      ),
    },
  ];

  const includedItems = [
    {
      icon: Video,
      text: l(
        "4 sessions de groupe hebdomadaires (60 min chacune, en direct sur Zoom)",
        "4 weekly group sessions (60 min each, live on Zoom)"
      ),
    },
    {
      icon: PlayCircle,
      text: l(
        "Accès aux rediffusions de toutes les sessions",
        "Replay access for all sessions"
      ),
    },
    {
      icon: MessageCircle,
      text: l(
        "Groupe privé de discussion pour du soutien entre les sessions",
        "Private group chat for support between sessions"
      ),
    },
    {
      icon: UserCheck,
      text: l(
        "1 appel individuel de 30 minutes pour personnaliser votre expérience",
        "1 individual 30-minute audit call to personalize your experience"
      ),
    },
  ];

  const faqs = [
    {
      q: l(
        "Je n'ai aucune connaissance en IA, est-ce pour moi\u00A0?",
        "I have zero AI knowledge, is this for me?"
      ),
      a: l(
        "Absolument. Le programme est conçu pour les débutants. On part de zéro.",
        "Absolutely. The program is designed for beginners. We start from zero."
      ),
    },
    {
      q: l(
        "C'est en direct ou préenregistré\u00A0?",
        "Is it live or pre-recorded?"
      ),
      a: l(
        "En direct sur Zoom, avec accès aux rediffusions si vous manquez une session.",
        "Live on Zoom, with replay access if you miss a session."
      ),
    },
    {
      q: l(
        "Est-ce que je peux poser des questions pendant les sessions\u00A0?",
        "Can I ask questions during sessions?"
      ),
      a: l(
        "Oui, c'est interactif. Vous pouvez poser vos questions en direct et on travaille ensemble.",
        "Yes, it's interactive. You can ask your questions live and we work together."
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1a3a4a]">
          {/* Decorative orbs */}
          <motion.div
            className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] right-[5%] h-96 w-96 rounded-full bg-primary/8 blur-[120px]"
            animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-grid" />

          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center sm:px-8 lg:py-40">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide text-primary-light backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                {l("Programme 4 semaines", "4-week program")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gradient-text">
                {l(
                  "Devenez autonome avec l'intelligence artificielle",
                  "Become autonomous with artificial intelligence"
                )}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/80 sm:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {l(
                "Un programme pratique de 4 semaines pour intégrer l'IA dans votre quotidien professionnel. Pas de théorie inutile. Vous repartez en sachant faire.",
                "A practical 4-week program to integrate AI into your professional life. No useless theory. You leave knowing how to do it."
              )}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <HeroCta l={l} />
            </motion.div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent" />
        </section>

        {/* ═══════════ WHAT YOU'LL LEARN ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {l("Ce que vous apprendrez", "What you'll learn")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("4 semaines pour transformer votre façon de travailler", "4 weeks to transform the way you work")}
              </motion.h2>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {learnCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 2}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-7 transition-all duration-500 hover:border-primary/20 hover:bg-card-hover hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      {/* Week badge */}
                      <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary-light">
                        {i + 1}
                      </div>
                      <div className="relative">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/50">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHO IS THIS FOR ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {l("C'est pour vous?", "Is this for you?")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("À qui s'adresse ce programme", "Who is this program for")}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="mt-10 rounded-2xl border border-white/5 bg-card p-8 text-left sm:p-10"
              >
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  {l(
                    "Ce programme est pour vous si vous êtes adjointe virtuelle, technicienne comptable, travailleuse autonome ou entrepreneure et que vous voulez utiliser l'IA pour gagner du temps, automatiser vos tâches et offrir un meilleur service à vos clients.",
                    "This program is for you if you're a virtual assistant, accounting technician, freelancer or entrepreneur and you want to use AI to save time, automate your tasks, and offer better service to your clients."
                  )}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {l("Ce qui est inclus", "What's included")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("Tout pour réussir", "Everything to succeed")}
              </motion.h2>

              <div className="mx-auto mt-14 grid max-w-3xl gap-5">
                {includedItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 2}
                      className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:bg-card-hover"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="relative pt-2.5 text-base leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ YOUR INSTRUCTOR ═══════════ */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04] pointer-events-none"
            style={{ background: "radial-gradient(circle, #5A8A9A 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              {/* Photo */}
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
                    style={{ background: "linear-gradient(135deg, #5A8A9A 0%, #3d6b7a 100%)" }}
                  />
                  <div
                    className="relative overflow-hidden rounded-2xl p-[2px]"
                    style={{
                      background:
                        "linear-gradient(135deg, #5A8A9A 0%, rgba(90,138,154,0.3) 50%, #5A8A9A 100%)",
                    }}
                  >
                    <div className="overflow-hidden rounded-2xl bg-[#0F172A]">
                      <Image
                        src="/images/ai-twin.png"
                        alt="Tina Giammarella"
                        width={420}
                        height={500}
                        className="mx-auto h-auto w-full max-w-[300px] object-cover sm:max-w-[360px] lg:max-w-[420px]"
                      />
                    </div>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-xl border-l-2 border-t-2 border-primary opacity-60" />
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-xl border-b-2 border-r-2 border-primary opacity-60" />
                </div>
              </motion.div>

              {/* Bio */}
              <div>
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
                >
                  {l("Votre formatrice", "Your instructor")}
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Tina Giammarella
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-2 text-lg font-medium text-primary"
                >
                  {l("Fondatrice de Synvista", "Founder of Synvista")}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={3}
                  className="mt-6 text-base leading-relaxed text-slate-300/80 sm:text-lg"
                >
                  {l(
                    "Je ne suis pas une formatrice traditionnelle. J'ai appris l'IA en bâtissant de vraies applications et en automatisant de vrais business. Aujourd'hui, j'enseigne aux gens à faire la même chose, à leur rythme, sans jargon.",
                    "I'm not a traditional instructor. I learned AI by building real applications and automating real businesses. Today, I teach people to do the same thing, at their own pace, without jargon."
                  )}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <section id="pricing" className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {l("Tarifs", "Pricing")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("Investissez dans votre autonomie", "Invest in your autonomy")}
              </motion.h2>

              <motion.div variants={fadeUp} custom={2} className="mt-14">
                <PricingButtons l={l} />

                <p className="mt-6 text-sm font-medium text-primary-light/70">
                  {l(
                    "Les inscriptions ouvrent bientôt. Restez à l'affût\u00A0!",
                    "Registration opening soon. Stay tuned!"
                  )}
                </p>

                <p className="mt-4 text-sm text-white/40">
                  {l(
                    "Vous préférez un accompagnement individuel\u00A0? J'offre aussi des sessions individuelles à 97$/heure.",
                    "Prefer individual coaching? I also offer 1-on-1 sessions at $97/hour."
                  )}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mx-auto max-w-2xl"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                FAQ
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("Questions fréquentes", "Frequently asked questions")}
              </motion.h2>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="mt-12 rounded-2xl border border-white/5 bg-card px-6 sm:px-8"
              >
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 sm:p-12 lg:p-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {l(
                      "Prête à devenir autonome avec l'IA\u00A0?",
                      "Ready to become autonomous with AI?"
                    )}
                  </h2>

                  <div className="mt-10">
                    <PricingButtons l={l} />

                    <p className="mt-6 text-sm font-medium text-primary-light/70">
                      {l(
                        "Les inscriptions ouvrent bientôt. Restez à l'affût\u00A0!",
                        "Registration opening soon. Stay tuned!"
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
