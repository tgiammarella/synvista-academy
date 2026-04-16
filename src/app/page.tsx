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
  BookOpen,
  Library,
  Gift,
  ChevronDown,
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
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""
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

/* ─── pricing CTA buttons (single payment + 3-payment plan) ─── */

function PricingButton({ l }: { l: (fr: string, en: string) => string }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Primary: full payment */}
      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          <span className="relative z-10">
            {l("Réserver ma place — 397$", "Reserve my spot — $397")}
          </span>
          <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Secondary: 3-payment plan */}
      <button
        type="button"
        onClick={() => setShowMessage(true)}
        className="text-sm font-medium text-white/40 underline underline-offset-4 transition-colors hover:text-white/70"
      >
        {l(
          "ou 3 versements de 139$ (417$ au total)",
          "or 3 payments of $139 ($417 total)"
        )}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function AutonomieIAPage() {
  const l = useLang();

  const weeklyCards = [
    {
      icon: Lightbulb,
      title: l("Semaine 1 : Les fondations", "Week 1: The Foundations"),
      desc: l(
        "Comprendre ce que l'IA peut (et ne peut pas) faire pour votre business. Choisir les 2 ou 3 outils qui comptent vraiment pour vous. On élimine le bruit.",
        "Understand what AI can (and can't) do for your business. Choose the 2 or 3 tools that actually matter for you. We cut through the noise."
      ),
    },
    {
      icon: Mail,
      title: l(
        "Semaine 2 : Automatiser vos communications",
        "Week 2: Automate Your Communications"
      ),
      desc: l(
        "Courriels clients, suivis, réponses répétitives. On construit vos templates ensemble et on les branche à vos outils existants.",
        "Client emails, follow-ups, repetitive replies. We build your templates together and connect them to your existing tools."
      ),
    },
    {
      icon: Repeat,
      title: l(
        "Semaine 3 : Créer du contenu sans y passer vos fins de semaine",
        "Week 3: Create Content Without Losing Your Weekends"
      ),
      desc: l(
        "Publications, infolettres, descriptions. On met en place un système qui produit du contenu dans votre voix, pas celle d'un robot générique.",
        "Posts, newsletters, descriptions. We set up a system that produces content in your voice, not a generic robot's."
      ),
    },
    {
      icon: Target,
      title: l(
        "Semaine 4 : Systèmes et prochaines étapes",
        "Week 4: Systems and Next Steps"
      ),
      desc: l(
        "On assemble tout. Vous repartez avec un plan d'implémentation personnalisé et des automatisations qui roulent déjà.",
        "We put it all together. You leave with a personalized implementation plan and automations already running."
      ),
    },
  ];

  const includedItems = [
    {
      icon: Video,
      title: l(
        "4 sessions de groupe en direct (90 minutes chacune)",
        "4 live group sessions (90 minutes each)"
      ),
      desc: l(
        "Sur Zoom, en français, avec démonstrations en direct et période de questions.",
        "On Zoom, in French, with live demos and a Q&A period."
      ),
    },
    {
      icon: PlayCircle,
      title: l("Rediffusions de toutes les sessions", "Replays of all sessions"),
      desc: l(
        "Vous manquez une session? Vous voulez revoir une démo? Tout est archivé.",
        "Miss a session? Want to rewatch a demo? Everything is archived."
      ),
    },
    {
      icon: BookOpen,
      title: l(
        "Guide d'implémentation bilingue",
        "Bilingual implementation guide"
      ),
      desc: l(
        "Un document de référence à garder. Pas un PDF de 80 pages que vous ne lirez jamais.",
        "A reference document you'll actually keep. Not an 80-page PDF you'll never read."
      ),
    },
    {
      icon: Library,
      title: l(
        "Bibliothèque de prompts et de templates",
        "Prompt and template library"
      ),
      desc: l(
        "Prompts testés pour la rédaction, le service client, la gestion de courriels, la création de contenu. Prêts à copier-coller.",
        "Tested prompts for writing, client service, email management, content creation. Ready to copy and paste."
      ),
    },
    {
      icon: Gift,
      title: l("Bonus : Trousse de démarrage IA", "Bonus: AI Starter Kit"),
      desc: l(
        "Checklist d'audit, plan d'implémentation de 30 jours, liste des outils essentiels selon votre budget.",
        "Audit checklist, 30-day implementation plan, list of essential tools by budget."
      ),
    },
  ];

  const faqs = [
    {
      q: l(
        "Et si je n'ai aucune expérience avec l'IA\u00A0?",
        "What if I have zero experience with AI?"
      ),
      a: l(
        "Parfait. Le programme est conçu pour partir de zéro.",
        "Perfect. The program is designed to start from scratch."
      ),
    },
    {
      q: l(
        "Les sessions sont-elles enregistrées\u00A0?",
        "Are the sessions recorded?"
      ),
      a: l(
        "Oui, toutes. Vous gardez l'accès à vie.",
        "Yes, all of them. You keep lifetime access."
      ),
    },
    {
      q: l(
        "Quel matériel me faut-il\u00A0?",
        "What equipment do I need?"
      ),
      a: l(
        "Un ordinateur, une connexion internet, et un compte ChatGPT (gratuit ou payant, on en parle en Semaine 1).",
        "A computer, an internet connection, and a ChatGPT account (free or paid — we cover this in Week 1)."
      ),
    },
    {
      q: l(
        "Puis-je poser des questions pendant les sessions\u00A0?",
        "Can I ask questions during sessions?"
      ),
      a: l(
        "Oui. Chaque session inclut une période de questions-réponses.",
        "Yes. Every session includes a Q&A period."
      ),
    },
    {
      q: l(
        "Et pour le remboursement\u00A0?",
        "What about refunds?"
      ),
      a: l(
        "Si après la première session vous sentez que ce n'est pas pour vous, je rembourse. Sans question.",
        "If after the first session you feel it's not for you, I'll refund you. No questions asked."
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
                {l("Programme Autonomie IA", "Autonomy AI Program")}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-xl font-semibold leading-snug text-white/90 sm:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {l(
                "4 semaines pour automatiser votre business sans engager une agence, sans apprendre à coder, sans vous perdre dans 40 outils.",
                "4 weeks to automate your business — no agency, no coding, no drowning in 40 tools."
              )}
            </motion.p>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300/70 sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {l(
                "Vous savez que l'IA peut vous faire gagner du temps. Mais entre votre quotidien et le bruit sur LinkedIn, vous n'avez jamais pris le temps de vous y mettre vraiment. Ce programme est fait pour ça.",
                "You know AI can save you time. But between your day-to-day and the noise on LinkedIn, you've never actually made the time. This program is made for that."
              )}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <PricingButton l={l} />
            </motion.div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent" />
        </section>

        {/* ═══════════ POUR QUI ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                {l("C'est pour vous?", "Is this for you?")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("À qui s'adresse ce programme", "Who is this program for")}
              </motion.h2>

              <div className="mt-12 mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
                {/* Pour qui */}
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="rounded-2xl border border-primary/20 bg-card p-8"
                >
                  <h3 className="text-lg font-semibold text-primary-light mb-5">
                    {l("Pour qui", "For who")}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      l(
                        "Entrepreneurs solos et petites équipes (1 à 5 personnes)",
                        "Solo entrepreneurs and small teams (1 to 5 people)"
                      ),
                      l(
                        "Propriétaires de commerce, consultants, professionnels de services",
                        "Business owners, consultants, service professionals"
                      ),
                      l(
                        "Gens qui ont essayé ChatGPT une fois et laissé tomber",
                        "People who tried ChatGPT once and gave up"
                      ),
                      l(
                        "Gens qui savent que l'IA peut les aider mais qui n'ont pas le temps d'apprendre seuls",
                        "People who know AI can help them but don't have time to learn alone"
                      ),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Pas pour */}
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="rounded-2xl border border-white/5 bg-card p-8"
                >
                  <h3 className="text-lg font-semibold text-white/50 mb-5">
                    {l("Pas pour", "Not for")}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      l(
                        "Les agences qui veulent revendre de l'IA",
                        "Agencies looking to resell AI"
                      ),
                      l(
                        "Les entreprises de 20+ employés avec un département TI",
                        "Companies with 20+ employees and an IT department"
                      ),
                      l(
                        "Les curieux qui veulent explorer sans implémenter",
                        "The curious who want to explore without implementing"
                      ),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/40 sm:text-base"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CE QUE VOUS OBTENEZ ═══════════ */}
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
                {l("Ce que vous obtenez", "What you get")}
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
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:bg-card-hover"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="pt-1">
                          <p className="text-base font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ LE PROGRAMME (weekly curriculum) ═══════════ */}
        <section className="relative py-20 lg:py-28">
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
                {l("Le programme", "The program")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l(
                  "4 semaines pour transformer votre façon de travailler",
                  "4 weeks to transform the way you work"
                )}
              </motion.h2>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {weeklyCards.map((card, i) => {
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
                        <h3 className="text-base font-semibold text-white">
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
                  {l("Qui je suis", "Who I am")}
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
                  {l(
                    "Formatrice IA, entrepreneure, fondatrice de Synvista",
                    "AI trainer, entrepreneur, founder of Synvista"
                  )}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={3}
                  className="mt-6 text-base leading-relaxed text-slate-300/80 sm:text-lg"
                >
                  {l(
                    "Ancienne fonctionnaire fédérale reconvertie. J'enseigne l'IA aux entrepreneurs québécois depuis plus d'un an, parce que j'ai moi-même utilisé ces outils pour bâtir deux entreprises en parallèle sans équipe.",
                    "Former federal civil servant, turned entrepreneur. I've been teaching AI to Quebec entrepreneurs for over a year, because I used these tools myself to build two businesses in parallel — without a team."
                  )}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={4}
                  className="mt-4 text-base leading-relaxed text-slate-300/70 sm:text-lg"
                >
                  {l(
                    "Mon approche\u00A0: pragmatique, concrète, sans jargon. Vous repartez avec des systèmes qui fonctionnent, pas avec une liste d'outils à explorer plus tard.",
                    "My approach: pragmatic, concrete, no jargon. You leave with systems that work, not a list of tools to explore later."
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
                {l("Investissement", "Investment")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("Rejoignez le programme", "Join the program")}
              </motion.h2>

              <motion.div variants={fadeUp} custom={2} className="mt-14">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  {/* Full payment */}
                  <div className="flex-1 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-7 text-center sm:max-w-[220px]">
                    <span className="block text-4xl font-bold text-white">397$</span>
                    <span className="mt-2 block text-sm font-semibold text-primary-light">
                      {l("CAD — Paiement unique", "CAD — One-time payment")}
                    </span>
                    <span className="mt-1 block text-xs text-white/40">
                      {l("Accès à vie aux matériaux", "Lifetime access to all materials")}
                    </span>
                  </div>
                  {/* 3-payment plan */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-card px-8 py-7 text-center sm:max-w-[220px]">
                    <span className="block text-4xl font-bold text-white">3 × 139$</span>
                    <span className="mt-2 block text-sm font-semibold text-white/50">
                      {l("3 versements mensuels", "3 monthly payments")}
                    </span>
                    <span className="mt-1 block text-xs text-white/30">
                      {l("Total : 417$ CAD", "Total: $417 CAD")}
                    </span>
                  </div>
                </div>

                <p className="mt-8 text-sm font-medium text-primary-light/70">
                  {l(
                    "Prochaine cohorte\u00A0: date à confirmer",
                    "Next cohort: date to be confirmed"
                  )}
                </p>

                <div className="mt-8">
                  <PricingButton l={l} />
                </div>
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
                      "Prête à automatiser votre business\u00A0?",
                      "Ready to automate your business?"
                    )}
                  </h2>

                  <div className="mt-10">
                    <PricingButton l={l} />

                    <p className="mt-6 text-sm font-medium text-primary-light/70">
                      {l(
                        "Prochaine cohorte\u00A0: date à confirmer",
                        "Next cohort: date to be confirmed"
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
  BookOpen,
  Library,
  Gift,
  ChevronDown,
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
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""
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

/* ─── pricing CTA buttons (single payment + 3-payment plan) ─── */

function PricingButton({ l }: { l: (fr: string, en: string) => string }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Primary: full payment */}
      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          <span className="relative z-10">
            {l("Réserver ma place — 397$", "Reserve my spot — $397")}
          </span>
          <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Secondary: 3-payment plan */}
      <button
        type="button"
        onClick={() => setShowMessage(true)}
        className="text-sm font-medium text-white/40 underline underline-offset-4 transition-colors hover:text-white/70"
      >
        {l(
          "ou 3 versements de 139$ (417$ au total)",
          "or 3 payments of $139 ($417 total)"
        )}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function AutonomieIAPage() {
  const l = useLang();

  const weeklyCards = [
    {
      icon: Lightbulb,
      title: l("Semaine 1 : Les fondations", "Week 1: The Foundations"),
      desc: l(
        "Comprendre ce que l'IA peut (et ne peut pas) faire pour votre business. Choisir les 2 ou 3 outils qui comptent vraiment pour vous. On élimine le bruit.",
        "Understand what AI can (and can't) do for your business. Choose the 2 or 3 tools that actually matter for you. We cut through the noise."
      ),
    },
    {
      icon: Mail,
      title: l(
        "Semaine 2 : Automatiser vos communications",
        "Week 2: Automate Your Communications"
      ),
      desc: l(
        "Courriels clients, suivis, réponses répétitives. On construit vos templates ensemble et on les branche à vos outils existants.",
        "Client emails, follow-ups, repetitive replies. We build your templates together and connect them to your existing tools."
      ),
    },
    {
      icon: Repeat,
      title: l(
        "Semaine 3 : Créer du contenu sans y passer vos fins de semaine",
        "Week 3: Create Content Without Losing Your Weekends"
      ),
      desc: l(
        "Publications, infolettres, descriptions. On met en place un système qui produit du contenu dans votre voix, pas celle d'un robot générique.",
        "Posts, newsletters, descriptions. We set up a system that produces content in your voice, not a generic robot's."
      ),
    },
    {
      icon: Target,
      title: l(
        "Semaine 4 : Systèmes et prochaines étapes",
        "Week 4: Systems and Next Steps"
      ),
      desc: l(
        "On assemble tout. Vous repartez avec un plan d'implémentation personnalisé et des automatisations qui roulent déjà.",
        "We put it all together. You leave with a personalized implementation plan and automations already running."
      ),
    },
  ];

  const includedItems = [
    {
      icon: Video,
      title: l(
        "4 sessions de groupe en direct (90 minutes chacune)",
        "4 live group sessions (90 minutes each)"
      ),
      desc: l(
        "Sur Zoom, en français, avec démonstrations en direct et période de questions.",
        "On Zoom, in French, with live demos and a Q&A period."
      ),
    },
    {
      icon: PlayCircle,
      title: l("Rediffusions de toutes les sessions", "Replays of all sessions"),
      desc: l(
        "Vous manquez une session? Vous voulez revoir une démo? Tout est archivé.",
        "Miss a session? Want to rewatch a demo? Everything is archived."
      ),
    },
    {
      icon: BookOpen,
      title: l(
        "Guide d'implémentation bilingue",
        "Bilingual implementation guide"
      ),
      desc: l(
        "Un document de référence à garder. Pas un PDF de 80 pages que vous ne lirez jamais.",
        "A reference document you'll actually keep. Not an 80-page PDF you'll never read."
      ),
    },
    {
      icon: Library,
      title: l(
        "Bibliothèque de prompts et de templates",
        "Prompt and template library"
      ),
      desc: l(
        "Prompts testés pour la rédaction, le service client, la gestion de courriels, la création de contenu. Prêts à copier-coller.",
        "Tested prompts for writing, client service, email management, content creation. Ready to copy and paste."
      ),
    },
    {
      icon: Gift,
      title: l("Bonus : Trousse de démarrage IA", "Bonus: AI Starter Kit"),
      desc: l(
        "Checklist d'audit, plan d'implémentation de 30 jours, liste des outils essentiels selon votre budget.",
        "Audit checklist, 30-day implementation plan, list of essential tools by budget."
      ),
    },
  ];

  const faqs = [
    {
      q: l(
        "Et si je n'ai aucune expérience avec l'IA\u00A0?",
        "What if I have zero experience with AI?"
      ),
      a: l(
        "Parfait. Le programme est conçu pour partir de zéro.",
        "Perfect. The program is designed to start from scratch."
      ),
    },
    {
      q: l(
        "Les sessions sont-elles enregistrées\u00A0?",
        "Are the sessions recorded?"
      ),
      a: l(
        "Oui, toutes. Vous gardez l'accès à vie.",
        "Yes, all of them. You keep lifetime access."
      ),
    },
    {
      q: l(
        "Quel matériel me faut-il\u00A0?",
        "What equipment do I need?"
      ),
      a: l(
        "Un ordinateur, une connexion internet, et un compte ChatGPT (gratuit ou payant, on en parle en Semaine 1).",
        "A computer, an internet connection, and a ChatGPT account (free or paid — we cover this in Week 1)."
      ),
    },
    {
      q: l(
        "Puis-je poser des questions pendant les sessions\u00A0?",
        "Can I ask questions during sessions?"
      ),
      a: l(
        "Oui. Chaque session inclut une période de questions-réponses.",
        "Yes. Every session includes a Q&A period."
      ),
    },
    {
      q: l(
        "Et pour le remboursement\u00A0?",
        "What about refunds?"
      ),
      a: l(
        "Si après la première session vous sentez que ce n'est pas pour vous, je rembourse. Sans question.",
        "If after the first session you feel it's not for you, I'll refund you. No questions asked."
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
                {l("Programme Autonomie IA", "Autonomy AI Program")}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-xl font-semibold leading-snug text-white/90 sm:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {l(
                "4 semaines pour automatiser votre business sans engager une agence, sans apprendre à coder, sans vous perdre dans 40 outils.",
                "4 weeks to automate your business — no agency, no coding, no drowning in 40 tools."
              )}
            </motion.p>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300/70 sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {l(
                "Vous savez que l'IA peut vous faire gagner du temps. Mais entre votre quotidien et le bruit sur LinkedIn, vous n'avez jamais pris le temps de vous y mettre vraiment. Ce programme est fait pour ça.",
                "You know AI can save you time. But between your day-to-day and the noise on LinkedIn, you've never actually made the time. This program is made for that."
              )}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <PricingButton l={l} />
            </motion.div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent" />
        </section>

        {/* ═══════════ POUR QUI ═══════════ */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                {l("C'est pour vous?", "Is this for you?")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("À qui s'adresse ce programme", "Who is this program for")}
              </motion.h2>

              <div className="mt-12 mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
                {/* Pour qui */}
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="rounded-2xl border border-primary/20 bg-card p-8"
                >
                  <h3 className="text-lg font-semibold text-primary-light mb-5">
                    {l("Pour qui", "For who")}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      l(
                        "Entrepreneurs solos et petites équipes (1 à 5 personnes)",
                        "Solo entrepreneurs and small teams (1 to 5 people)"
                      ),
                      l(
                        "Propriétaires de commerce, consultants, professionnels de services",
                        "Business owners, consultants, service professionals"
                      ),
                      l(
                        "Gens qui ont essayé ChatGPT une fois et laissé tomber",
                        "People who tried ChatGPT once and gave up"
                      ),
                      l(
                        "Gens qui savent que l'IA peut les aider mais qui n'ont pas le temps d'apprendre seuls",
                        "People who know AI can help them but don't have time to learn alone"
                      ),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Pas pour */}
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="rounded-2xl border border-white/5 bg-card p-8"
                >
                  <h3 className="text-lg font-semibold text-white/50 mb-5">
                    {l("Pas pour", "Not for")}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      l(
                        "Les agences qui veulent revendre de l'IA",
                        "Agencies looking to resell AI"
                      ),
                      l(
                        "Les entreprises de 20+ employés avec un département TI",
                        "Companies with 20+ employees and an IT department"
                      ),
                      l(
                        "Les curieux qui veulent explorer sans implémenter",
                        "The curious who want to explore without implementing"
                      ),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/40 sm:text-base"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CE QUE VOUS OBTENEZ ═══════════ */}
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
                {l("Ce que vous obtenez", "What you get")}
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
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:bg-card-hover"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="pt-1">
                          <p className="text-base font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ LE PROGRAMME (weekly curriculum) ═══════════ */}
        <section className="relative py-20 lg:py-28">
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
                {l("Le programme", "The program")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l(
                  "4 semaines pour transformer votre façon de travailler",
                  "4 weeks to transform the way you work"
                )}
              </motion.h2>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {weeklyCards.map((card, i) => {
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
                        <h3 className="text-base font-semibold text-white">
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
                  {l("Qui je suis", "Who I am")}
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
                  {l(
                    "Formatrice IA, entrepreneure, fondatrice de Synvista",
                    "AI trainer, entrepreneur, founder of Synvista"
                  )}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={3}
                  className="mt-6 text-base leading-relaxed text-slate-300/80 sm:text-lg"
                >
                  {l(
                    "Ancienne fonctionnaire fédérale reconvertie. J'enseigne l'IA aux entrepreneurs québécois depuis plus d'un an, parce que j'ai moi-même utilisé ces outils pour bâtir deux entreprises en parallèle sans équipe.",
                    "Former federal civil servant, turned entrepreneur. I've been teaching AI to Quebec entrepreneurs for over a year, because I used these tools myself to build two businesses in parallel — without a team."
                  )}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={4}
                  className="mt-4 text-base leading-relaxed text-slate-300/70 sm:text-lg"
                >
                  {l(
                    "Mon approche\u00A0: pragmatique, concrète, sans jargon. Vous repartez avec des systèmes qui fonctionnent, pas avec une liste d'outils à explorer plus tard.",
                    "My approach: pragmatic, concrete, no jargon. You leave with systems that work, not a list of tools to explore later."
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
                {l("Investissement", "Investment")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {l("Rejoignez le programme", "Join the program")}
              </motion.h2>

              <motion.div variants={fadeUp} custom={2} className="mt-14">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  {/* Full payment */}
                  <div className="flex-1 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-7 text-center sm:max-w-[220px]">
                    <span className="block text-4xl font-bold text-white">397$</span>
                    <span className="mt-2 block text-sm font-semibold text-primary-light">
                      {l("CAD — Paiement unique", "CAD — One-time payment")}
                    </span>
                    <span className="mt-1 block text-xs text-white/40">
                      {l("Accès à vie aux matériaux", "Lifetime access to all materials")}
                    </span>
                  </div>
                  {/* 3-payment plan */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-card px-8 py-7 text-center sm:max-w-[220px]">
                    <span className="block text-4xl font-bold text-white">3 × 139$</span>
                    <span className="mt-2 block text-sm font-semibold text-white/50">
                      {l("3 versements mensuels", "3 monthly payments")}
                    </span>
                    <span className="mt-1 block text-xs text-white/30">
                      {l("Total : 417$ CAD", "Total: $417 CAD")}
                    </span>
                  </div>
                </div>

                <p className="mt-8 text-sm font-medium text-primary-light/70">
                  {l(
                    "Prochaine cohorte\u00A0: date à confirmer",
                    "Next cohort: date to be confirmed"
                  )}
                </p>

                <div className="mt-8">
                  <PricingButton l={l} />
                </div>
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
                      "Prête à automatiser votre business\u00A0?",
                      "Ready to automate your business?"
                    )}
                  </h2>

                  <div className="mt-10">
                    <PricingButton l={l} />

                    <p className="mt-6 text-sm font-medium text-primary-light/70">
                      {l(
                        "Prochaine cohorte\u00A0: date à confirmer",
                        "Next cohort: date to be confirmed"
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
