"use client";

import dynamic from "next/dynamic";
import { ArrowRight, ShieldCheck, Award, Clock } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

// Load canvas animation only on the client (no SSR)
const AnimatedHeroBg = dynamic(() => import("@/app/components/AnimatedHeroBg"), {
  ssr: false,
});

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated night-road background (canvas) */}
      <AnimatedHeroBg />

      {/* Gradient overlay — ensures text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* ── Catchy tagline — the "video text" ── */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg whitespace-pre-line tracking-tight">
          {t.hero.videoTagline}
        </p>

        {/* Subtle divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-12 h-px bg-green-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="w-12 h-px bg-green-400/60" />
        </div>

        {/* Trust badge pill */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 leading-snug mb-4 max-w-3xl mx-auto">
          {t.hero.headline}
        </h1>

        <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            {t.hero.ctaServices}
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-white/70 text-sm backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 text-green-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="w-px h-10 bg-gradient-to-b from-transparent to-white/40" />
        <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
      </button>
    </section>
  );
}
