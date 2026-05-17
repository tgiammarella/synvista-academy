"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "fr" | "en";

type Translations = {
  [key: string]: {
    fr: string;
    en: string;
  };
};

export const t: Translations = {
  // Nav
  "nav.academy": { fr: "Académie", en: "Academy" },
  "nav.agency": { fr: "Agence", en: "Agency" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.services": { fr: "Services", en: "Services" },
  "nav.individual": { fr: "Formation individuelle", en: "Individual Training" },
  "nav.group": { fr: "Formation de groupe", en: "Group Training" },
  "nav.enterprise": { fr: "Services entreprise", en: "Enterprise Services" },
  "nav.digital": { fr: "Services numériques", en: "Digital Services" },
  "nav.formation": { fr: "Formation", en: "Training" },

  // Hero
  "hero.tagline": {
    fr: "Académie IA + Agence IA",
    en: "AI Academy + AI Agency",
  },
  "hero.title.line1": {
    fr: "Maîtrisez l'IA avec Tina.",
    en: "Master AI with Tina.",
  },
  "hero.title.line2.prefix": {
    fr: "Ou laissez son ",
    en: "Or let her ",
  },
  "hero.title.line2.accent": {
    fr: "équipe",
    en: "team",
  },
  "hero.title.line2.suffix": {
    fr: " la déployer pour vous.",
    en: " build it for you.",
  },
  "hero.subtitle": {
    fr: "Deux parcours, une seule équipe de confiance. Formez-vous avec Tina à l'Académie Synvista, ou confiez vos projets d'automatisation, de SaaS et d'intégration IA à son équipe à l'Agence Synvista.",
    en: "Two paths, one trusted team. Train with Tina at Synvista Academy, or hand off your automation, SaaS, and AI integration projects to her team at Synvista Agency.",
  },
  "hero.cta_primary": {
    fr: "Explorer l'Académie",
    en: "Explore the Academy",
  },
  "hero.cta_secondary": {
    fr: "Découvrir l'Agence",
    en: "See the Agency",
  },

  // Two doors
  "doors.academy.label": { fr: "Pour apprendre", en: "To learn" },
  "doors.academy.title": { fr: "Académie Synvista", en: "Synvista Academy" },
  "doors.academy.desc": {
    fr: "Tina vous forme directement. Sessions individuelles ou ateliers de groupe, en français ou en anglais, pour bâtir vos compétences en IA.",
    en: "Tina trains you directly. One-on-one sessions or group workshops, in French or English, to build your AI skills.",
  },
  "doors.academy.cta": { fr: "Voir les formations", en: "See the trainings" },
  "doors.agency.label": { fr: "Pour livrer", en: "To deliver" },
  "doors.agency.title": { fr: "Agence Synvista", en: "Synvista Agency" },
  "doors.agency.desc": {
    fr: "L'équipe de Tina prend en charge votre projet. Automatisations, SaaS sur mesure, intégrations IA et services numériques, supervisés par Tina.",
    en: "Tina's team takes on your project. Automations, custom SaaS, AI integrations and digital services, all supervised by Tina.",
  },
  "doors.agency.cta": { fr: "Voir les services", en: "See the services" },

  // Academy section
  "academy.tagline": { fr: "Académie Synvista", en: "Synvista Academy" },
  "academy.title": {
    fr: "Apprenez l'IA directement avec Tina",
    en: "Learn AI directly from Tina",
  },
  "academy.subtitle": {
    fr: "Formations conçues pour les entrepreneurs et équipes du Québec. Tina anime chaque session elle-même. Pas de plateforme préenregistrée, pas d'assistant. Vous apprenez avec la personne qui construit, automatise et déploie l'IA chaque jour.",
    en: "Trainings built for Quebec entrepreneurs and teams. Tina runs every session herself. No pre-recorded platform, no assistant. You learn from the person who builds, automates, and deploys AI every day.",
  },

  // Academy - Individual
  "academy.individual.title": {
    fr: "Formation individuelle",
    en: "Individual training",
  },
  "academy.individual.desc": {
    fr: "Coaching IA un-à-un avec Tina. Programme bâti sur vos objectifs personnels ou professionnels.",
    en: "One-on-one AI coaching with Tina. Program built around your personal or professional goals.",
  },
  "academy.individual.feature1": {
    fr: "Sessions en visioconférence",
    en: "Video call sessions",
  },
  "academy.individual.feature2": {
    fr: "Programme adapté à votre niveau",
    en: "Program adapted to your level",
  },
  "academy.individual.feature3": {
    fr: "Outils IA pratiques et concrets",
    en: "Practical, hands-on AI tools",
  },
  "academy.individual.feature4": {
    fr: "Suivi personnalisé entre les sessions",
    en: "Personal follow-up between sessions",
  },
  "academy.individual.feature5": {
    fr: "Disponible en français ou en anglais",
    en: "Available in French or English",
  },
  "academy.individual.cta": { fr: "En savoir plus", en: "Learn more" },

  // Academy - Group
  "academy.group.title": {
    fr: "Formation de groupe",
    en: "Group training",
  },
  "academy.group.desc": {
    fr: "Webinaires, ateliers et formations sur mesure pour équipes, associations et communautés d'affaires.",
    en: "Webinars, workshops and custom trainings for teams, associations and business communities.",
  },
  "academy.group.feature1": {
    fr: "Webinaires en direct",
    en: "Live webinars",
  },
  "academy.group.feature2": {
    fr: "Ateliers pratiques interactifs",
    en: "Interactive hands-on workshops",
  },
  "academy.group.feature3": {
    fr: "Contenu bilingue FR/EN",
    en: "Bilingual content FR/EN",
  },
  "academy.group.feature4": {
    fr: "Accès aux rediffusions",
    en: "Replay access included",
  },
  "academy.group.feature5": {
    fr: "Programmes sur mesure pour entreprises",
    en: "Custom programs for companies",
  },
  "academy.group.cta": { fr: "En savoir plus", en: "Learn more" },

  // Tina Spotlight (About)
  "about.tagline": { fr: "Derrière Synvista", en: "Behind Synvista" },
  "about.name": { fr: "Tina Giammarella", en: "Tina Giammarella" },
  "about.role": {
    fr: "Développeure full-stack · Formatrice IA",
    en: "Full-Stack Developer · AI Trainer",
  },
  "about.bio1": {
    fr: "Tina est avant tout une développeure full-stack qui bâtit elle-même des systèmes d'automatisation, des applications sur mesure et des intégrations IA. C'est cette pratique quotidienne, du code à la livraison, qui nourrit ce qu'elle enseigne. Ses formations ne viennent pas de la théorie, elles viennent de ce qu'elle construit chaque semaine.",
    en: "Tina is first and foremost a full-stack developer who personally builds automation systems, custom applications and AI integrations. It's this hands-on practice, from code to delivery, that fuels what she teaches. Her trainings don't come from theory, they come from what she ships every week.",
  },
  "about.bio2": {
    fr: "À l'Académie Synvista, elle transmet ce qu'elle bâtit. À l'Agence Synvista, elle reste impliquée personnellement dans la conception et l'architecture de chaque projet, avec une équipe qui prolonge sa capacité de livraison sur les mandats plus larges. Vous ne vous formez pas avec quelqu'un qui ne livre jamais, et vous ne confiez pas vos projets à une équipe coupée de la personne qui enseigne.",
    en: "At Synvista Academy, she teaches what she builds. At Synvista Agency, she stays personally involved in the design and architecture of every project, with a team that extends her delivery capacity on larger mandates. You're not learning from someone who never ships, and you're not handing your project to a team disconnected from the person who teaches it.",
  },
  "about.pillar1.label": {
    fr: "Bâtisseure + Formatrice",
    en: "Builder + Trainer",
  },
  "about.pillar1.sub": { fr: "Agence + Académie", en: "Agency + Academy" },
  "about.pillar2.label": { fr: "Basée au Québec", en: "Based in Quebec" },
  "about.pillar2.sub": { fr: "Montréal", en: "Montreal" },
  "about.pillar3.label": { fr: "Bilingue", en: "Bilingual" },
  "about.pillar3.sub": { fr: "FR · EN", en: "FR · EN" },

  // Agency section
  "agency.tagline": { fr: "Agence Synvista", en: "Synvista Agency" },
  "agency.title": {
    fr: "Quand vous voulez le résultat, pas l'apprentissage",
    en: "When you want the result, not the lesson",
  },
  "agency.subtitle": {
    fr: "Notre équipe livre vos systèmes d'automatisation, applications SaaS, intégrations IA et services numériques. Tina supervise chaque projet personnellement, du devis à la livraison.",
    en: "Our team builds and ships your automation systems, SaaS apps, AI integrations and digital services. Tina personally oversees every project, from quote to delivery.",
  },
  "agency.card1.title": {
    fr: "Automatisation des processus",
    en: "Process automation",
  },
  "agency.card1.desc": {
    fr: "Workflows IA, intégrations no-code, automatisations Shopify, QuickBooks, Gmail et plus.",
    en: "AI workflows, no-code integrations, automations for Shopify, QuickBooks, Gmail and more.",
  },
  "agency.card2.title": {
    fr: "SaaS et applications sur mesure",
    en: "Custom SaaS and apps",
  },
  "agency.card2.desc": {
    fr: "Conception et développement d'applications web et mobiles propulsées par l'IA, du MVP à la production.",
    en: "Design and build of AI-powered web and mobile apps, from MVP to production.",
  },
  "agency.card3.title": {
    fr: "Intégrations IA personnalisées",
    en: "Custom AI integrations",
  },
  "agency.card3.desc": {
    fr: "Chatbots, assistants internes, agents Claude et ChatGPT branchés directement à vos outils existants.",
    en: "Chatbots, internal assistants, Claude and ChatGPT agents plugged directly into your existing tools.",
  },
  "agency.card4.title": {
    fr: "Sites web et services numériques",
    en: "Websites and digital services",
  },
  "agency.card4.desc": {
    fr: "Sites web professionnels, SEO, stratégie de contenu et planification de médias sociaux.",
    en: "Professional websites, SEO, content strategy and social media planning.",
  },
  "agency.note.title": {
    fr: "Une équipe, supervisée par Tina",
    en: "A team, overseen by Tina",
  },
  "agency.note.desc": {
    fr: "L'Agence Synvista regroupe développeurs, designers et spécialistes en automatisation. Vous bénéficiez de la capacité d'une équipe avec la rigueur d'un suivi personnel par Tina.",
    en: "Synvista Agency brings together developers, designers and automation specialists. You get the capacity of a team with the rigor of personal oversight from Tina.",
  },

  // Bridge
  "bridge.title": {
    fr: "La plupart de nos clients commencent par une formation. Et finissent par construire.",
    en: "Most of our clients start with training. And end up building.",
  },
  "bridge.subtitle": {
    fr: "Vous n'avez pas à choisir aujourd'hui. Apprenez d'abord, déléguez ensuite. Ou l'inverse. L'important, c'est d'avancer.",
    en: "You don't have to choose today. Learn first, delegate later. Or the other way around. What matters is moving forward.",
  },

  // Process
  "process.tagline": { fr: "Le processus", en: "The process" },
  "process.title": {
    fr: "Trois étapes, sans engagement initial",
    en: "Three steps, no upfront commitment",
  },
  "process.subtitle": {
    fr: "On commence par une simple conversation. Vous décidez ensuite de la suite.",
    en: "We start with a simple conversation. You decide what comes next.",
  },
  "process.step1.title": { fr: "Vous nous écrivez", en: "You reach out" },
  "process.step1.desc": {
    fr: "Remplissez le formulaire ou envoyez un courriel. Pas besoin de prendre rendez-vous en ligne.",
    en: "Fill the form or send an email. No need to book a slot online.",
  },
  "process.step2.title": { fr: "On en discute", en: "We talk it through" },
  "process.step2.desc": {
    fr: "Courte conversation pour comprendre votre besoin. Tina vous oriente vers l'Académie ou l'Agence.",
    en: "Short call to understand your need. Tina points you toward Academy or Agency.",
  },
  "process.step3.title": { fr: "On avance", en: "We move forward" },
  "process.step3.desc": {
    fr: "Vous apprenez, ou notre équipe livre. Avec la possibilité de combiner les deux quand ça a du sens.",
    en: "You learn, or our team delivers. With the option to combine both when it makes sense.",
  },

  // Contact section
  "contact.tagline": { fr: "Contact", en: "Contact" },
  "contact.title": {
    fr: "Prêt à maîtriser l'IA ou à la déployer dans votre entreprise?",
    en: "Ready to master AI or deploy it in your business?",
  },
  "contact.subtitle": {
    fr: "Écrivez-nous, et on revient vers vous rapidement. Aucune réunion forcée, aucun engagement.",
    en: "Send us a message and we'll get back to you quickly. No forced meetings, no commitment.",
  },
  "contact.form.name": { fr: "Votre nom", en: "Your name" },
  "contact.form.email": { fr: "Votre courriel", en: "Your email" },
  "contact.form.service": { fr: "Service qui vous intéresse", en: "Service you're interested in" },
  "contact.form.service.group.academy": { fr: "Académie", en: "Academy" },
  "contact.form.service.group.agency": { fr: "Agence", en: "Agency" },
  "contact.form.service.individual": { fr: "Formation individuelle", en: "Individual training" },
  "contact.form.service.group": { fr: "Formation de groupe", en: "Group training" },
  "contact.form.service.automation": {
    fr: "Automatisation des processus",
    en: "Process automation",
  },
  "contact.form.service.saas": {
    fr: "SaaS et applications sur mesure",
    en: "Custom SaaS and apps",
  },
  "contact.form.service.ai": {
    fr: "Intégrations IA personnalisées",
    en: "Custom AI integrations",
  },
  "contact.form.service.digital": {
    fr: "Sites web et services numériques",
    en: "Websites and digital services",
  },
  "contact.form.service.other": {
    fr: "Autre / je ne sais pas encore",
    en: "Other / not sure yet",
  },
  "contact.form.message": { fr: "Votre message", en: "Your message" },
  "contact.form.submit": { fr: "Envoyer le message", en: "Send message" },
  "contact.form.success": { fr: "Message envoyé avec succès!", en: "Message sent successfully!" },
  "contact.info.email": { fr: "Courriel", en: "Email" },
  "contact.info.phone": { fr: "Téléphone", en: "Phone" },
  "contact.info.location": { fr: "Localisation", en: "Location" },

  // Footer
  "footer.tagline": {
    fr: "Démocratiser l'IA pour les entrepreneurs et entreprises du Québec, par la formation et par la livraison.",
    en: "Democratizing AI for Quebec entrepreneurs and businesses, through training and through delivery.",
  },
  "footer.col.academy": { fr: "Académie", en: "Academy" },
  "footer.col.agency": { fr: "Agence", en: "Agency" },
  "footer.col.contact": { fr: "Contact", en: "Contact" },
  "footer.link.automation": { fr: "Automatisations", en: "Automations" },
  "footer.link.saas": { fr: "SaaS sur mesure", en: "Custom SaaS" },
  "footer.link.ai": { fr: "Intégrations IA", en: "AI integrations" },
  "footer.link.websites": { fr: "Sites web", en: "Websites" },
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },

  // Funnel pages — preserved from previous version (used by /services/* pages)
  "funnel.back": { fr: "Retour à l'accueil", en: "Back to home" },
  "funnel.cta": { fr: "Nous contacter", en: "Contact us" },
  "funnel.ready": { fr: "Prêt à commencer?", en: "Ready to get started?" },

  "funnel.individual.hero.title": {
    fr: "Formation individuelle en IA",
    en: "Individual AI Training",
  },
  "funnel.individual.hero.subtitle": {
    fr: "Un accompagnement personnalisé pour maîtriser les outils d'intelligence artificielle, que ce soit pour votre vie personnelle ou professionnelle.",
    en: "Personalized guidance to master artificial intelligence tools, whether for your personal or professional life.",
  },
  "funnel.individual.who.title": { fr: "Pour qui?", en: "Who is it for?" },
  "funnel.individual.who.item1": {
    fr: "Entrepreneurs souhaitant intégrer l'IA dans leur quotidien",
    en: "Entrepreneurs looking to integrate AI into their daily workflow",
  },
  "funnel.individual.who.item2": {
    fr: "Professionnels voulant optimiser leur productivité",
    en: "Professionals wanting to optimize their productivity",
  },
  "funnel.individual.who.item3": {
    fr: "Particuliers curieux de découvrir le potentiel de l'IA",
    en: "Individuals curious about AI's potential",
  },
  "funnel.individual.who.item4": {
    fr: "Créateurs de contenu cherchant à accélérer leur production",
    en: "Content creators looking to accelerate their output",
  },
  "funnel.individual.what.title": { fr: "Ce que vous apprendrez", en: "What you'll learn" },
  "funnel.individual.what.item1": {
    fr: "Maîtriser ChatGPT, Claude, Gemini et d'autres outils IA",
    en: "Master ChatGPT, Claude, Gemini, and other AI tools",
  },
  "funnel.individual.what.item2": {
    fr: "Créer des prompts efficaces pour des résultats optimaux",
    en: "Create effective prompts for optimal results",
  },
  "funnel.individual.what.item3": {
    fr: "Automatiser vos tâches répétitives",
    en: "Automate your repetitive tasks",
  },
  "funnel.individual.what.item4": {
    fr: "Générer du contenu visuel et textuel de qualité",
    en: "Generate quality visual and written content",
  },
  "funnel.individual.how.title": { fr: "Comment ça fonctionne", en: "How it works" },
  "funnel.individual.how.step1.title": { fr: "Consultation gratuite", en: "Free consultation" },
  "funnel.individual.how.step1.desc": {
    fr: "On échange sur vos besoins et objectifs pour créer un programme sur mesure.",
    en: "We discuss your needs and goals to create a tailored program.",
  },
  "funnel.individual.how.step2.title": { fr: "Sessions en direct", en: "Live sessions" },
  "funnel.individual.how.step2.desc": {
    fr: "Sessions individuelles en visioconférence avec exercices pratiques.",
    en: "Individual video sessions with hands-on exercises.",
  },
  "funnel.individual.how.step3.title": { fr: "Suivi continu", en: "Ongoing support" },
  "funnel.individual.how.step3.desc": {
    fr: "Support entre les sessions et ressources complémentaires.",
    en: "Support between sessions and complementary resources.",
  },

  "funnel.group.hero.title": {
    fr: "Formations de groupe & webinaires",
    en: "Group Training & Webinars",
  },
  "funnel.group.hero.subtitle": {
    fr: "Des ateliers interactifs et des webinaires dynamiques pour apprendre l'IA en équipe. Parfait pour les organisations et les communautés.",
    en: "Interactive workshops and dynamic webinars to learn AI as a team. Perfect for organizations and communities.",
  },
  "funnel.group.who.title": { fr: "Pour qui?", en: "Who is it for?" },
  "funnel.group.who.item1": {
    fr: "Équipes d'entreprise souhaitant se former à l'IA",
    en: "Business teams wanting to learn AI",
  },
  "funnel.group.who.item2": {
    fr: "Associations et communautés professionnelles",
    en: "Professional associations and communities",
  },
  "funnel.group.who.item3": {
    fr: "Organismes et groupes de formation continue",
    en: "Continuing education organizations and groups",
  },
  "funnel.group.who.item4": {
    fr: "Événements corporatifs et conférences",
    en: "Corporate events and conferences",
  },
  "funnel.group.formats.title": { fr: "Nos formats", en: "Our formats" },
  "funnel.group.formats.item1.title": { fr: "Webinaires en direct", en: "Live Webinars" },
  "funnel.group.formats.item1.desc": {
    fr: "Sessions interactives en ligne avec Q&R en temps réel",
    en: "Interactive online sessions with real-time Q&A",
  },
  "funnel.group.formats.item2.title": { fr: "Ateliers pratiques", en: "Hands-on Workshops" },
  "funnel.group.formats.item2.desc": {
    fr: "Apprentissage par la pratique avec des exercices guidés",
    en: "Learning by doing with guided exercises",
  },
  "funnel.group.formats.item3.title": { fr: "Séminaires sur mesure", en: "Custom Seminars" },
  "funnel.group.formats.item3.desc": {
    fr: "Contenu adapté à votre industrie et vos besoins spécifiques",
    en: "Content tailored to your industry and specific needs",
  },

  "funnel.enterprise.hero.title": {
    fr: "Services entreprise & entrepreneur",
    en: "Enterprise & Entrepreneur Services",
  },
  "funnel.enterprise.hero.subtitle": {
    fr: "Automatisation intelligente, développement de SaaS et micro-SaaS sur mesure. Nous transformons vos processus avec l'IA.",
    en: "Intelligent automation, custom SaaS and micro-SaaS development. We transform your processes with AI.",
  },
  "funnel.enterprise.services.title": { fr: "Nos services", en: "Our services" },
  "funnel.enterprise.services.item1.title": { fr: "Automatisation de tâches", en: "Task Automation" },
  "funnel.enterprise.services.item1.desc": {
    fr: "Automatisez vos processus répétitifs avec n8n, Zapier et des intégrations API sur mesure. Gagnez des heures chaque semaine.",
    en: "Automate your repetitive processes with n8n, Zapier, and custom API integrations. Save hours every week.",
  },
  "funnel.enterprise.services.item2.title": { fr: "Développement SaaS sur mesure", en: "Custom SaaS Development" },
  "funnel.enterprise.services.item2.desc": {
    fr: "De l'idée au produit : nous concevons et développons des applications SaaS et micro-SaaS adaptées à votre marché.",
    en: "From idea to product: we design and develop SaaS and micro-SaaS applications tailored to your market.",
  },
  "funnel.enterprise.services.item3.title": { fr: "Intégrations IA", en: "AI Integrations" },
  "funnel.enterprise.services.item3.desc": {
    fr: "Intégrez ChatGPT, Claude et d'autres outils IA directement dans vos flux de travail existants.",
    en: "Integrate ChatGPT, Claude, and other AI tools directly into your existing workflows.",
  },
  "funnel.enterprise.services.item4.title": { fr: "Consultation stratégique", en: "Strategic Consulting" },
  "funnel.enterprise.services.item4.desc": {
    fr: "Audit de vos processus, identification des opportunités d'automatisation et plan d'action concret.",
    en: "Process audit, automation opportunity identification, and concrete action plan.",
  },
  "funnel.enterprise.stack.title": { fr: "Notre stack technologique", en: "Our technology stack" },

  "funnel.digital.hero.title": {
    fr: "Services numériques & création digitale",
    en: "Digital Services & Creation",
  },
  "funnel.digital.hero.subtitle": {
    fr: "Sites web professionnels, applications sur mesure, audit d'automatisation, SEO et contenu pour réseaux sociaux. On construit votre présence digitale avec l'IA.",
    en: "Professional websites, custom apps, automation audits, SEO, and social media content. We build your digital presence with AI.",
  },
  "funnel.digital.services.title": { fr: "Ce qu'on fait pour vous", en: "What we do for you" },
  "funnel.digital.services.item1.title": { fr: "Création de sites web", en: "Website Creation" },
  "funnel.digital.services.item1.desc": {
    fr: "Sites professionnels modernes, rapides et optimisés pour la conversion. Construit avec Next.js et Vercel pour des performances maximales et une expérience utilisateur irréprochable.",
    en: "Modern, fast, conversion-optimized professional websites. Built with Next.js and Vercel for maximum performance and a flawless user experience.",
  },
  "funnel.digital.services.item2.title": { fr: "Développement d'applications", en: "App Development" },
  "funnel.digital.services.item2.desc": {
    fr: "Applications web et SaaS sur mesure pour votre entreprise. De l'idée au produit fini, on prend en charge la conception, le développement et le déploiement.",
    en: "Custom web and SaaS applications for your business. From idea to finished product, we handle design, development, and deployment.",
  },
  "funnel.digital.services.item3.title": { fr: "Audit d'automatisation", en: "Automation Audit" },
  "funnel.digital.services.item3.desc": {
    fr: "On analyse vos processus et identifie les tâches automatisables. Vous recevez un rapport détaillé avec un plan d'action concret pour économiser des heures chaque semaine.",
    en: "We analyze your processes and identify what can be automated. You get a detailed report with a concrete action plan to save hours every week.",
  },
  "funnel.digital.services.item4.title": { fr: "Contenu réseaux sociaux", en: "Social Media Content" },
  "funnel.digital.services.item4.desc": {
    fr: "Stratégie et création de contenu pour LinkedIn, Instagram et Facebook. Calendriers éditoriaux, visuels et textes générés avec l'IA pour maintenir une présence constante et cohérente.",
    en: "Strategy and content creation for LinkedIn, Instagram, and Facebook. Editorial calendars, visuals, and AI-generated copy to maintain a consistent, on-brand presence.",
  },
  "funnel.digital.services.item5.title": { fr: "Optimisation SEO", en: "SEO Optimization" },
  "funnel.digital.services.item5.desc": {
    fr: "Audit SEO complet, optimisation technique et création de contenu pour améliorer votre visibilité sur Google. Des résultats mesurables, pas du jargon.",
    en: "Full SEO audit, technical optimization, and content creation to improve your Google visibility. Measurable results, not jargon.",
  },
  "funnel.digital.how.title": { fr: "Comment ça fonctionne", en: "How it works" },
  "funnel.digital.how.step1.title": { fr: "Appel découverte gratuit", en: "Free discovery call" },
  "funnel.digital.how.step1.desc": {
    fr: "On discute de votre projet, vos objectifs et votre budget pour trouver la meilleure approche ensemble.",
    en: "We discuss your project, goals, and budget to find the best approach together.",
  },
  "funnel.digital.how.step2.title": { fr: "Proposition & plan", en: "Proposal & plan" },
  "funnel.digital.how.step2.desc": {
    fr: "Vous recevez une proposition claire avec le périmètre, le calendrier et les livrables attendus.",
    en: "You receive a clear proposal with scope, timeline, and expected deliverables.",
  },
  "funnel.digital.how.step3.title": { fr: "Exécution & livraison", en: "Execution & delivery" },
  "funnel.digital.how.step3.desc": {
    fr: "On réalise le projet et vous livrons un produit fini, documenté et prêt à l'emploi. Suivi inclus.",
    en: "We execute the project and deliver a finished, documented, ready-to-use product. Follow-up included.",
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  tr: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const tr = useCallback(
    (key: string) => {
      const entry = t[key];
      if (!entry) return key;
      return entry[locale];
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, tr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
