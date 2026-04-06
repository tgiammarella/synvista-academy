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
  "nav.services": { fr: "Services", en: "Services" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.individual": { fr: "Formation individuelle", en: "Individual Training" },
  "nav.group": { fr: "Formations de groupe", en: "Group Training" },
  "nav.enterprise": { fr: "Services entreprise", en: "Enterprise Services" },
  "nav.formation": { fr: "Formation", en: "Training" },

  // Hero
  "hero.tagline": {
    fr: "Académie IA",
    en: "AI Academy",
  },
  "hero.title": {
    fr: "Maîtrisez l'intelligence artificielle pour transformer votre vie et votre entreprise",
    en: "Master artificial intelligence to transform your life and your business",
  },
  "hero.subtitle": {
    fr: "Formations personnalisées, ateliers de groupe et solutions sur mesure pour entrepreneurs et entreprises au Québec.",
    en: "Personalized training, group workshops, and custom solutions for entrepreneurs and businesses in Quebec.",
  },
  "hero.cta_primary": {
    fr: "Découvrir nos services",
    en: "Discover our services",
  },
  "hero.cta_secondary": {
    fr: "Nous contacter",
    en: "Contact us",
  },

  // Services section
  "services.tagline": { fr: "Nos services", en: "Our Services" },
  "services.title": {
    fr: "Une approche adaptée à vos besoins",
    en: "An approach tailored to your needs",
  },
  "services.subtitle": {
    fr: "Que vous soyez un particulier curieux, un entrepreneur ambitieux ou une entreprise en croissance, nous avons la solution IA qui vous convient.",
    en: "Whether you're a curious individual, an ambitious entrepreneur, or a growing business, we have the AI solution for you.",
  },

  // Service 1 - Individual
  "service.individual.title": {
    fr: "Formation individuelle",
    en: "Individual Training",
  },
  "service.individual.desc": {
    fr: "Apprenez l'IA à votre rythme avec un accompagnement personnalisé. Pour usage personnel ou professionnel.",
    en: "Learn AI at your own pace with personalized guidance. For personal or professional use.",
  },
  "service.individual.feature1": {
    fr: "Sessions 1-à-1 en visioconférence",
    en: "1-on-1 video sessions",
  },
  "service.individual.feature2": {
    fr: "Programme adapté à votre niveau",
    en: "Program adapted to your level",
  },
  "service.individual.feature3": {
    fr: "Outils IA pratiques et concrets",
    en: "Practical, hands-on AI tools",
  },
  "service.individual.feature4": {
    fr: "Suivi personnalisé entre les sessions",
    en: "Personalized follow-up between sessions",
  },
  "service.individual.cta": { fr: "En savoir plus", en: "Learn more" },

  // Service 2 - Group
  "service.group.title": {
    fr: "Formations de groupe",
    en: "Group Training",
  },
  "service.group.desc": {
    fr: "Webinaires et ateliers interactifs pour équipes et communautés. Apprenez ensemble, progressez ensemble.",
    en: "Interactive webinars and workshops for teams and communities. Learn together, grow together.",
  },
  "service.group.feature1": {
    fr: "Webinaires en direct",
    en: "Live webinars",
  },
  "service.group.feature2": {
    fr: "Ateliers pratiques interactifs",
    en: "Interactive hands-on workshops",
  },
  "service.group.feature3": {
    fr: "Contenu bilingue (FR/EN)",
    en: "Bilingual content (FR/EN)",
  },
  "service.group.feature4": {
    fr: "Accès aux rediffusions",
    en: "Access to replays",
  },
  "service.group.cta": { fr: "En savoir plus", en: "Learn more" },

  // Service 3 - Enterprise
  "service.enterprise.title": {
    fr: "Services entreprise",
    en: "Enterprise Services",
  },
  "service.enterprise.desc": {
    fr: "Automatisation de tâches, création de SaaS et micro-SaaS sur mesure. Transformez votre entreprise avec l'IA.",
    en: "Task automation, custom SaaS and micro-SaaS development. Transform your business with AI.",
  },
  "service.enterprise.feature1": {
    fr: "Automatisation des processus",
    en: "Process automation",
  },
  "service.enterprise.feature2": {
    fr: "Développement SaaS sur mesure",
    en: "Custom SaaS development",
  },
  "service.enterprise.feature3": {
    fr: "Intégrations IA personnalisées",
    en: "Custom AI integrations",
  },
  "service.enterprise.feature4": {
    fr: "Consultation et stratégie",
    en: "Consultation and strategy",
  },
  "service.enterprise.cta": { fr: "En savoir plus", en: "Learn more" },

  // Service 4 - Digital Services
  "service.digital.title": {
    fr: "Services num\u00e9riques",
    en: "Digital Services",
  },
  "service.digital.desc": {
    fr: "Cr\u00e9ation de sites web, d\u00e9veloppement d'applications, SEO et planification de m\u00e9dias sociaux. On le fait pour vous, ou on vous montre comment.",
    en: "Website creation, app development, SEO, and social media planning. We do it for you, or we teach you how.",
  },
  "service.digital.feature1": {
    fr: "Cr\u00e9ation de sites web professionnels",
    en: "Professional website creation",
  },
  "service.digital.feature2": {
    fr: "D\u00e9veloppement d'applications sur mesure",
    en: "Custom app development",
  },
  "service.digital.feature3": {
    fr: "Optimisation SEO et visibilit\u00e9 en ligne",
    en: "SEO optimization and online visibility",
  },
  "service.digital.feature4": {
    fr: "Strat\u00e9gie et planification m\u00e9dias sociaux",
    en: "Social media strategy and planning",
  },
  "service.digital.cta": { fr: "En savoir plus", en: "Learn more" },

  // About section
  "about.tagline": { fr: "À propos", en: "About" },
  "about.title": {
    fr: "Votre formatrice IA",
    en: "Your AI trainer",
  },
  "about.name": {
    fr: "Tina Giammarella",
    en: "Tina Giammarella",
  },
  "about.role": {
    fr: "Fondatrice et Formatrice IA",
    en: "Founder & AI Trainer",
  },
  "about.bio1": {
    fr: "Entrepreneure passionnée et développeuse full-stack, Tina combine plus de 18 ans d'expérience professionnelle avec une maîtrise approfondie de l'intelligence artificielle et du développement technologique. Elle est également fondatrice de Les Gâteries Yakety Yaks Chews, une marque premium de gâteries pour chiens au Québec, une expérience qui lui donne une compréhension concrète des réalités du commerce, de la gestion d'entreprise et de la croissance entrepreneuriale.",
    en: "A passionate entrepreneur and full-stack developer, Tina combines over 18 years of professional experience with deep mastery of artificial intelligence and technology development. She is also the founder of Les Gâteries Yakety Yaks Chews, a premium dog treat brand in Quebec, an experience that gives her a concrete understanding of commerce, business management, and entrepreneurial growth.",
  },
  "about.bio2": {
    fr: "Elle construit activement plusieurs plateformes technologiques, dont ToutToilettage, un marché de toilettage bilingue, ainsi que des applications SaaS de productivité et de gestion. Tina apporte une approche unique qui allie vision stratégique, compétences techniques concrètes et expérience terrain en gestion d'entreprise.",
    en: "She is actively building multiple technology platforms, including ToutToilettage, a bilingual grooming marketplace, as well as productivity and management SaaS applications. Tina brings a unique approach that combines strategic vision, hands-on technical skills, and real-world business management experience.",
  },
  "about.bio3": {
    fr: "Parfaitement bilingue (français et anglais), Tina est passionnée par la démocratisation de l'IA et aide les entrepreneurs et les entreprises du Québec à exploiter pleinement le potentiel de ces technologies transformatrices.",
    en: "Fully bilingual (French and English), Tina is passionate about democratizing AI and helping Quebec entrepreneurs and businesses fully harness the potential of these transformative technologies.",
  },
  "about.stat1.number": { fr: "18+", en: "18+" },
  "about.stat1.label": { fr: "Années d'expérience", en: "Years of experience" },
  "about.stat2.number": { fr: "4+", en: "4+" },
  "about.stat2.label": { fr: "Plateformes en développement", en: "Platforms in development" },
  "about.stat3.number": { fr: "100%", en: "100%" },
  "about.stat3.label": { fr: "Bilingue FR/EN", en: "Bilingual FR/EN" },

  // Contact section
  "contact.tagline": { fr: "Contact", en: "Contact" },
  "contact.title": {
    fr: "Prêt à maîtriser l'IA?",
    en: "Ready to master AI?",
  },
  "contact.subtitle": {
    fr: "Que vous souhaitiez une formation personnalisée, organiser un atelier pour votre équipe ou développer une solution IA sur mesure, nous sommes là pour vous accompagner.",
    en: "Whether you want personalized training, to organize a workshop for your team, or develop a custom AI solution, we're here to help.",
  },
  "contact.form.name": { fr: "Votre nom", en: "Your name" },
  "contact.form.email": { fr: "Votre courriel", en: "Your email" },
  "contact.form.service": { fr: "Service qui vous intéresse", en: "Service you're interested in" },
  "contact.form.service.individual": { fr: "Formation individuelle", en: "Individual Training" },
  "contact.form.service.group": { fr: "Formation de groupe", en: "Group Training" },
  "contact.form.service.enterprise": { fr: "Services entreprise", en: "Enterprise Services" },
  "contact.form.service.other": { fr: "Autre", en: "Other" },
  "contact.form.message": { fr: "Votre message", en: "Your message" },
  "contact.form.submit": { fr: "Envoyer le message", en: "Send message" },
  "contact.form.success": { fr: "Message envoyé avec succès!", en: "Message sent successfully!" },
  "contact.info.email": { fr: "Courriel", en: "Email" },
  "contact.info.phone": { fr: "Téléphone", en: "Phone" },
  "contact.info.location": { fr: "Localisation", en: "Location" },

  // Footer
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  "footer.tagline": {
    fr: "Démocratiser l'IA pour les entrepreneurs du Québec.",
    en: "Democratizing AI for Quebec entrepreneurs.",
  },

  // Funnel pages
  "funnel.back": { fr: "Retour à l'accueil", en: "Back to home" },
  "funnel.cta": { fr: "Nous contacter", en: "Contact us" },
  "funnel.ready": { fr: "Prêt à commencer?", en: "Ready to get started?" },

  // Individual funnel
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

  // Group funnel
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

  // Enterprise funnel
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
