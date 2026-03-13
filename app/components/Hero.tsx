"use client";

import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const badges = [
    { icon: Clock, text: t.hero.trustBadge1 },
    { icon: Award, text: t.hero.trustBadge2 },
    { icon: ShieldCheck, text: t.hero.trustBadge3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          <span className="block">Tom</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Techa
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-4 max-w-3xl mx-auto">
          {t.hero.headline}
        </p>

        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            {t.hero.ctaServices}
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <Icon className="w-5 h-5 text-amber-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="w-px h-10 bg-gradient-to-b from-transparent to-slate-500" />
        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" />
      </button>
    </section>
  );
}
