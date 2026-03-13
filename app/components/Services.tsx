"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Battery, Wind, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"hybrid" | "plugin">("hybrid");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hybridFeatures = t.services.battery.hybrid.features;
  const pluginFeatures = t.services.battery.plugin.features;
  const windFeatures = t.services.wind.features;

  return (
    <section id="services" className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* ── Service 1: Car Battery Repairs ── */}
        <div className="mb-16 bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden">
          {/* Card header */}
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0 w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-2xl flex items-center justify-center">
              <Battery className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {t.services.battery.title}
              </h3>
              <p className="text-slate-400 mt-1 text-sm max-w-2xl">
                {t.services.battery.description}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 sm:px-8 mt-6">
            <div className="flex gap-2 border-b border-slate-700">
              <button
                onClick={() => setActiveTab("hybrid")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all duration-200 -mb-px border-b-2 ${
                  activeTab === "hybrid"
                    ? "text-amber-400 border-amber-400 bg-amber-400/5"
                    : "text-slate-400 border-transparent hover:text-slate-200"
                }`}
              >
                {t.services.battery.hybrid.title}
              </button>
              <button
                onClick={() => setActiveTab("plugin")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all duration-200 -mb-px border-b-2 ${
                  activeTab === "plugin"
                    ? "text-amber-400 border-amber-400 bg-amber-400/5"
                    : "text-slate-400 border-transparent hover:text-slate-200"
                }`}
              >
                {t.services.battery.plugin.title}
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="px-6 sm:px-8 py-8">
            {activeTab === "hybrid" && (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {t.services.battery.hybrid.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {hybridFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "plugin" && (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {t.services.battery.plugin.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {pluginFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="px-6 sm:px-8 pb-8">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm group transition-colors"
            >
              {t.services.cta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── Service 2: Wind Turbine Repairs ── */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden">
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center">
              <Wind className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {t.services.wind.title}
              </h3>
              <p className="text-slate-400 mt-1 text-sm max-w-2xl">
                {t.services.wind.description}
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {windFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 bg-slate-900/50 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 sm:px-8 pb-8">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group transition-colors"
            >
              {t.services.cta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
