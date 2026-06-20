import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Synvista | Académie IA + Agence IA",
    short_name: "Synvista",
    description:
      "Académie IA + Agence IA. Formez-vous avec Tina, ou confiez vos projets d'automatisation, SaaS et IA à son équipe.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    icons: [
      {
        src: "/images/Favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/Favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
