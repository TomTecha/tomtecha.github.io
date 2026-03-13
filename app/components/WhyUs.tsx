"use client";

import { Clock, Award, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const icons = [Clock, Award, ShieldCheck, Zap];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            {t.why.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t.why.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const colors = [
              "from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-400",
              "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400",
              "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
              "from-violet-500/10 to-violet-500/5 border-violet-500/20 text-violet-400",
            ];
            const iconColor = ["text-amber-400", "text-blue-400", "text-emerald-400", "text-violet-400"];
            return (
              <div
                key={item.title}
                className={`bg-gradient-to-br ${colors[idx % colors.length]} border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center mb-5">
                  <Icon className={`w-6 h-6 ${iconColor[idx % iconColor.length]}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
