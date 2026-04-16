"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Send,
  CheckCircle,
  User,
  Mail,
  Briefcase,
  Sparkles,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

/* ─── animation variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

/* ─── bilingual helper ─── */

function useLang() {
  const { locale } = useI18n();
  return (fr: string, en: string) => (locale === "fr" ? fr : en);
}

/* ─── shared input styles ─── */

const inputBase =
  "w-full rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary/50";

const inputStyle = {
  background: "rgba(15, 23, 42, 0.8)",
  border: "1px solid rgba(90, 138, 154, 0.18)",
};

/* ─── field section wrapper ─── */

function FieldLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-white/70">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function InscriptionPage() {
  const l = useLang();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    profession: "",
    niveauIA: "",
    objectif: "",
    paiement: "",
    comment: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const professions = [
    { value: "adjointe-virtuelle", fr: "Adjointe virtuelle", en: "Virtual assistant" },
    { value: "technicienne-comptable", fr: "Technicienne comptable", en: "Accounting technician" },
    { value: "travailleuse-autonome", fr: "Travailleuse autonome / Freelance", en: "Freelancer / Self-employed" },
    { value: "entrepreneure", fr: "Entrepreneure", en: "Entrepreneur" },
    { value: "gestionnaire", fr: "Gestionnaire / Manager", en: "Manager" },
    { value: "autre", fr: "Autre", en: "Other" },
  ];

  const niveaux = [
    { value: "debutante", fr: "Débutante — je n'ai jamais utilisé l'IA", en: "Beginner — never used AI" },
    { value: "quelques-notions", fr: "Quelques notions — j'ai essayé ChatGPT", en: "Some basics — I've tried ChatGPT" },
    { value: "occasionnelle", fr: "Utilisatrice occasionnelle — j'explore", en: "Occasional user — still exploring" },
    { value: "reguliere", fr: "Utilisatrice régulière — je veux aller plus loin", en: "Regular user — I want to go further" },
  ];

  const objectifs = [
    { value: "gagner-temps", fr: "Gagner du temps au quotidien", en: "Save time in my daily work" },
    { value: "automatiser", fr: "Automatiser mes tâches répétitives", en: "Automate my repetitive tasks" },
    { value: "meilleur-service", fr: "Offrir un meilleur service à mes clients", en: "Offer better service to my clients" },
    { value: "contenu", fr: "Créer du contenu plus rapidement", en: "Create content faster" },
    { value: "explorer", fr: "Explorer ce que l'IA peut faire pour moi", en: "Explore what AI can do for me" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ═══════════ HERO HEADER ═══════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#1a3a4a] py-24 lg:py-32">
          {/* Background orbs */}
          <motion.div
            className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-primary/6 blur-[100px]"
            animate={{ y: [0, -6, 0], x: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-grid" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                href="/autonomie-ia"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-primary-light"
              >
                <ArrowLeft className="h-4 w-4" />
                {l("Retour au programme", "Back to program")}
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wide text-primary-light backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                {l("Programme Autonomie IA — 4 semaines", "Autonomie IA Program — 4 weeks")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">
                {l("Réservez votre place", "Reserve your spot")}
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/70 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {l(
                "Remplissez ce formulaire pour vous inscrire. Les places sont limitées — votre appel individuel de 30 minutes sera planifié après confirmation.",
                "Fill out this form to register. Spots are limited — your individual 30-minute call will be scheduled after confirmation."
              )}
            </motion.p>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F172A] to-transparent" />
        </section>

        {/* ═══════════ FORM ═══════════ */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ─── SUCCESS STATE ─── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center rounded-3xl border border-white/5 bg-card p-12 text-center"
                >
                  <div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ background: "rgba(90, 138, 154, 0.15)" }}
                  >
                    <CheckCircle className="h-10 w-10 text-primary-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {l("Inscription reçue !", "Registration received!")}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                    {l(
                      "Merci ! Je vous contacterai dans les 24-48 h pour confirmer votre place et planifier votre appel individuel de 30 minutes.",
                      "Thank you! I'll reach out within 24-48 h to confirm your spot and schedule your individual 30-minute call."
                    )}
                  </p>
                  <Link
                    href="/autonomie-ia"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary-light transition-all duration-300 hover:bg-primary/20 hover:border-primary/50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {l("Retour au programme", "Back to program")}
                  </Link>
                </motion.div>
              ) : (
                /* ─── FORM ─── */
                <motion.div
                  key="form"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                  <div
                    className="overflow-hidden rounded-3xl"
                    style={{
                      background: "rgba(30, 41, 59, 0.5)",
                      border: "1px solid rgba(90, 138, 154, 0.12)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-7 p-8 sm:p-10 lg:p-12">

                      {/* ── Section: Identité ── */}
                      <motion.div variants={fadeUp} custom={0}>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {l("01 — Vos coordonnées", "01 — Your details")}
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <FieldLabel icon={User} label={l("Prénom", "First name")} />
                            <input
                              type="text"
                              required
                              placeholder={l("Ex : Marie", "e.g. Sarah")}
                              value={formData.prenom}
                              onChange={set("prenom")}
                              className={inputBase}
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <FieldLabel icon={User} label={l("Nom", "Last name")} />
                            <input
                              type="text"
                              required
                              placeholder={l("Ex : Tremblay", "e.g. Johnson")}
                              value={formData.nom}
                              onChange={set("nom")}
                              className={inputBase}
                              style={inputStyle}
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* ── Email ── */}
                      <motion.div variants={fadeUp} custom={1}>
                        <FieldLabel icon={Mail} label={l("Adresse courriel", "Email address")} />
                        <input
                          type="email"
                          required
                          placeholder={l("vous@exemple.com", "you@example.com")}
                          value={formData.email}
                          onChange={set("email")}
                          className={inputBase}
                          style={inputStyle}
                        />
                      </motion.div>

                      <div
                        className="h-px w-full"
                        style={{ background: "rgba(90, 138, 154, 0.1)" }}
                      />

                      {/* ── Section: Profil ── */}
                      <motion.div variants={fadeUp} custom={2}>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {l("02 — Votre profil", "02 — Your profile")}
                        </p>

                        {/* Profession */}
                        <div className="mb-4">
                          <FieldLabel icon={Briefcase} label={l("Votre rôle principal", "Your main role")} />
                          <div className="relative">
                            <select
                              required
                              value={formData.profession}
                              onChange={set("profession")}
                              className={`${inputBase} appearance-none cursor-pointer ${
                                formData.profession === "" ? "text-slate-500" : "text-white"
                              }`}
                              style={inputStyle}
                            >
                              <option value="" disabled>
                                {l("Choisir votre rôle…", "Choose your role…")}
                              </option>
                              {professions.map((p) => (
                                <option key={p.value} value={p.value}>
                                  {l(p.fr, p.en)}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Niveau IA */}
                        <div>
                          <FieldLabel icon={Sparkles} label={l("Votre niveau avec l'IA", "Your AI experience level")} />
                          <div className="relative">
                            <select
                              required
                              value={formData.niveauIA}
                              onChange={set("niveauIA")}
                              className={`${inputBase} appearance-none cursor-pointer ${
                                formData.niveauIA === "" ? "text-slate-500" : "text-white"
                              }`}
                              style={inputStyle}
                            >
                              <option value="" disabled>
                                {l("Choisir votre niveau…", "Choose your level…")}
                              </option>
                              {niveaux.map((n) => (
                                <option key={n.value} value={n.value}>
                                  {l(n.fr, n.en)}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div
                        className="h-px w-full"
                        style={{ background: "rgba(90, 138, 154, 0.1)" }}
                      />

                      {/* ── Section: Objectif ── */}
                      <motion.div variants={fadeUp} custom={3}>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {l("03 — Votre objectif", "03 — Your goal")}
                        </p>

                        <div>
                          <FieldLabel icon={Sparkles} label={l("Ce que vous voulez accomplir en priorité", "What you most want to accomplish")} />
                          <div className="relative">
                            <select
                              required
                              value={formData.objectif}
                              onChange={set("objectif")}
                              className={`${inputBase} appearance-none cursor-pointer ${
                                formData.objectif === "" ? "text-slate-500" : "text-white"
                              }`}
                              style={inputStyle}
                            >
                              <option value="" disabled>
                                {l("Choisir votre objectif principal…", "Choose your main goal…")}
                              </option>
                              {objectifs.map((o) => (
                                <option key={o.value} value={o.value}>
                                  {l(o.fr, o.en)}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Free text: anything to tell me */}
                        <div className="mt-4">
                          <FieldLabel icon={MessageSquare} label={l("Quelque chose à me préciser ? (optionnel)", "Anything else to tell me? (optional)")} />
                          <textarea
                            rows={3}
                            placeholder={l(
                              "Ex : situation particulière, contraintes d'horaire, questions…",
                              "e.g. specific situation, schedule constraints, questions…"
                            )}
                            value={formData.comment}
                            onChange={set("comment")}
                            className={`${inputBase} resize-none`}
                            style={inputStyle}
                          />
                        </div>
                      </motion.div>

                      <div
                        className="h-px w-full"
                        style={{ background: "rgba(90, 138, 154, 0.1)" }}
                      />

                      {/* ── Section: Paiement ── */}
                      <motion.div variants={fadeUp} custom={4}>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          {l("04 — Mode de paiement préféré", "04 — Preferred payment option")}
                        </p>

                        <FieldLabel icon={CreditCard} label={l("Comment préférez-vous payer ?", "How would you prefer to pay?")} />

                        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {/* Option 1: versement unique */}
                          <label
                            className={`group relative flex cursor-pointer flex-col rounded-2xl border p-5 transition-all duration-300 ${
                              formData.paiement === "full"
                                ? "border-primary/50 bg-primary/10"
                                : "border-white/8 bg-white/2 hover:border-primary/30 hover:bg-primary/5"
                            }`}
                          >
                            <input
                              type="radio"
                              name="paiement"
                              value="full"
                              required
                              checked={formData.paiement === "full"}
                              onChange={set("paiement")}
                              className="sr-only"
                            />
                            <span className="text-2xl font-bold text-white">397$</span>
                            <span className="mt-1 text-sm font-medium text-primary-light">
                              {l("Versement unique", "Single payment")}
                            </span>
                            {formData.paiement === "full" && (
                              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                                <CheckCircle className="h-3 w-3" />
                              </span>
                            )}
                          </label>

                          {/* Option 2: 3 versements */}
                          <label
                            className={`group relative flex cursor-pointer flex-col rounded-2xl border p-5 transition-all duration-300 ${
                              formData.paiement === "3x"
                                ? "border-primary/50 bg-primary/10"
                                : "border-white/8 bg-white/2 hover:border-primary/30 hover:bg-primary/5"
                            }`}
                          >
                            <input
                              type="radio"
                              name="paiement"
                              value="3x"
                              checked={formData.paiement === "3x"}
                              onChange={set("paiement")}
                              className="sr-only"
                            />
                            <span className="text-2xl font-bold text-white">3 × 142$</span>
                            <span className="mt-1 text-sm font-medium text-white/50">
                              {l("3 versements de 142$", "3 payments of 142$")}
                            </span>
                            {formData.paiement === "3x" && (
                              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                                <CheckCircle className="h-3 w-3" />
                              </span>
                            )}
                          </label>
                        </div>
                      </motion.div>

                      {/* ── Submit ── */}
                      <motion.div variants={fadeUp} custom={5}>
                        <button
                          type="submit"
                          className="group relative w-full overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                        >
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative">
                            {l("Envoyer mon inscription", "Submit my registration")}
                          </span>
                          <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <p className="mt-4 text-center text-xs leading-relaxed text-white/30">
                          {l(
                            "Aucun paiement requis maintenant. Je vous contacterai pour confirmer les détails.",
                            "No payment required now. I'll reach out to confirm the details."
                          )}
                        </p>
                      </motion.div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
