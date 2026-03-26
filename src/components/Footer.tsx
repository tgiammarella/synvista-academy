"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const { tr } = useI18n();

  const quickLinks = [
    { label: tr("nav.services"), href: "/services/individuel" },
    { label: tr("nav.about"), href: "#about" },
    { label: tr("nav.contact"), href: "#contact" },
  ];

  const services = [
    { label: tr("nav.individual"), href: "/services/individuel" },
    { label: tr("nav.group"), href: "/services/groupe" },
    { label: tr("nav.enterprise"), href: "/services/entreprise" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "tgiammarella@gmail.com",
      href: "mailto:tgiammarella@gmail.com",
    },
    {
      icon: Phone,
      text: "(514) 914-8721",
      href: "tel:+15149148721",
    },
    {
      icon: MapPin,
      text: "Montreal, QC",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: ExternalLink, href: "#", label: "LinkedIn" },
    { icon: ExternalLink, href: "#", label: "Twitter" },
    { icon: ExternalLink, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-[#0F172A] border-t border-white/5">
      {/* Subtle gradient accent at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5A8A9A]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Synvista Academie IA"
                width={120}
                height={30}
                className="h-auto w-[120px]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {tr("footer.tagline")}
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-300 hover:border-[#5A8A9A]/50 hover:bg-[#5A8A9A]/10 hover:text-[#5A8A9A]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">
              {tr("nav.about")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">
              {tr("nav.services")}
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">
              {tr("nav.contact")}
            </h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item) => {
                const content = (
                  <span className="flex items-center gap-3 text-sm text-white/50 transition-colors duration-200 hover:text-white">
                    <item.icon className="h-4 w-4 shrink-0 text-[#5A8A9A]/70" />
                    {item.text}
                  </span>
                );

                return (
                  <li key={item.text}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <p className="text-center text-xs text-white/30">
            &copy; 2025 Synvista Acad&eacute;mie IA. {tr("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
