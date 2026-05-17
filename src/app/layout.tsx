import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synvista | Académie IA + Agence IA",
  description:
    "Deux parcours, une seule équipe. Formez-vous avec Tina à l'Académie Synvista, ou confiez vos projets d'automatisation, SaaS et IA à son équipe à l'Agence Synvista.",
  keywords: [
    "formation IA",
    "agence IA",
    "intelligence artificielle",
    "Québec",
    "Montréal",
    "ChatGPT",
    "Claude",
    "automatisation",
    "SaaS sur mesure",
    "intégration IA",
    "entrepreneur",
    "AI academy",
    "AI agency",
  ],
  openGraph: {
    title: "Synvista | Académie IA + Agence IA",
    description:
      "Maîtrisez l'IA avec Tina. Ou laissez son équipe la déployer pour vous.",
    url: "https://www.synvista.ai",
    siteName: "Synvista",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
