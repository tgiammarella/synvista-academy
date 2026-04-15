"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    labelKey: "contact.info.email",
    value: "tgiammarella@gmail.com",
    href: "mailto:tgiammarella@gmail.com",
  },
  {
    icon: Phone,
    labelKey: "contact.info.phone",
    value: "(514) 914-8721",
    href: "tel:+15149148721",
  },
  {
    icon: MapPin,
    labelKey: "contact.info.location",
    value: "Montréal, QC",
    href: null,
  },
];

export default function Contact() {
  const { tr } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const inputClasses =
    "w-full rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#5A8A9A]/50 focus:border-[#5A8A9A]";

  const inputStyle = {
    background: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(90, 138, 154, 0.15)",
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0d1526 50%, #0F172A 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #5A8A9A 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeInUp}
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#5A8A9A" }}
          >
            {tr("contact.tagline")}
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            {tr("contact.title")}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={fadeInUp}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {tr("contact.subtitle")}
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact form (3 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={3}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-5 sm:p-8 md:p-10"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(90, 138, 154, 0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(90, 138, 154, 0.15)" }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: "#5A8A9A" }} />
                  </div>
                  <p className="text-xl font-semibold text-white mb-3">
                    {tr("contact.form.success")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm underline underline-offset-4 transition-colors duration-200"
                    style={{ color: "#5A8A9A" }}
                  >
                    &larr;
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      required
                      placeholder={tr("contact.form.name")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className={inputClasses}
                      style={inputStyle}
                    />
                    <input
                      type="email"
                      required
                      placeholder={tr("contact.form.email")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className={inputClasses}
                      style={inputStyle}
                    />
                  </div>

                  {/* Service select */}
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className={`${inputClasses} appearance-none cursor-pointer ${
                        formData.service === "" ? "text-slate-500" : "text-white"
                      }`}
                      style={inputStyle}
                    >
                      <option value="" disabled>
                        {tr("contact.form.service")}
                      </option>
                      <option value="individual">
                        {tr("contact.form.service.individual")}
                      </option>
                      <option value="group">
                        {tr("contact.form.service.group")}
                      </option>
                      <option value="enterprise">
                        {tr("contact.form.service.enterprise")}
                      </option>
                      <option value="digital">
                        {tr("contact.form.service.digital")}
                      </option>
                      <option value="other">
                        {tr("contact.form.service.other")}
                      </option>
                    </select>
                    {/* Custom chevron */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <textarea
                    required
                    rows={5}
                    placeholder={tr("contact.form.message")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className={`${inputClasses} resize-none`}
                    style={inputStyle}
                  />

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#5A8A9A]/20 hover:-translate-y-0.5 active:translate-y-0"
                    style={{ background: "#5A8A9A" }}
                  >
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="relative">{tr("contact.form.submit")}</span>
                    <Send className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right - Contact info cards (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.labelKey}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={4 + i}
                  variants={fadeInUp}
                  className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(90, 138, 154, 0.12)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(90,138,154,0.08) 0%, transparent 100%)",
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{ background: "rgba(90, 138, 154, 0.12)" }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: "#5A8A9A" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{tr(item.labelKey)}</p>
                      <p className="text-base font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    className="block no-underline"
                  >
                    {content}
                  </a>
                );
              }

              return content;
            })}

            {/* Decorative map placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={7}
              variants={fadeInUp}
              className="relative flex-1 min-h-[160px] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(90, 138, 154, 0.12)",
              }}
            >
              {/* Stylized map pattern */}
              <div className="absolute inset-0 opacity-[0.06]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(90,138,154,0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(90,138,154,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-4 h-4 rounded-full mx-auto mb-2 animate-pulse"
                    style={{ background: "#5A8A9A" }}
                  />
                  <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                    Montréal, QC
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
