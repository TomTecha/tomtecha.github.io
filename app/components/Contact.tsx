"use client";

import { useState, SubmitEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const info = t.contact.info;

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate a form submission (no backend yet)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputCls =
    "w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-slate-800 transition-colors";

  return (
    <section id="contact" className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Send className="w-4 h-4" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <p className="text-white text-lg font-semibold">{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {f.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={f.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {f.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={f.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {f.phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={f.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {f.service}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={inputCls}
                    >
                      <option value="" disabled>
                        {f.servicePlaceholder}
                      </option>
                      {f.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {f.message}
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={f.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={inputCls + " resize-none"}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {f.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-900/40 border-t-slate-900 rounded-full animate-spin" />
                      {f.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {f.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold text-lg">{info.title}</h3>

            <div className="space-y-4">
              <a
                href="tel:+370600000000"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-400/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {info.phone}
                  </p>
                  <p className="text-white text-sm font-medium">+370 600 000 000</p>
                </div>
              </a>

              <a
                href="mailto:info@tomtecha.lt"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-400/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {info.email}
                  </p>
                  <p className="text-white text-sm font-medium">
                    info@tomtecha.lt
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {info.address}
                  </p>
                  <p className="text-white text-sm font-medium">{info.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {info.hours}
                  </p>
                  <p className="text-white text-sm font-medium whitespace-pre-line">
                    {info.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
