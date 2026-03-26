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
  title: "Synvista Académie IA | Formation et Services en Intelligence Artificielle",
  description:
    "Formations individuelles, ateliers de groupe et solutions IA sur mesure pour entrepreneurs et entreprises au Québec. Maîtrisez l'IA avec Synvista.",
  keywords: [
    "formation IA",
    "intelligence artificielle",
    "Québec",
    "ChatGPT",
    "automatisation",
    "SaaS",
    "entrepreneur",
    "AI training",
  ],
  openGraph: {
    title: "Synvista Académie IA",
    description:
      "Maîtrisez l'intelligence artificielle pour transformer votre vie et votre entreprise.",
    url: "https://www.synvista.ai",
    siteName: "Synvista Académie IA",
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
