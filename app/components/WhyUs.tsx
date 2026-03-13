"use client";

import { Clock, Award, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const icons = [Clock, Award, ShieldCheck, Zap];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            {t.why.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
            {t.why.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const cardStyles = [
              "from-green-50 to-green-100/50 border-green-200",
              "from-teal-50 to-teal-100/50 border-teal-200",
              "from-emerald-50 to-emerald-100/50 border-emerald-200",
              "from-green-50 to-lime-100/50 border-lime-200",
            ];
            const iconBg = [
              "bg-green-600",
              "bg-teal-600",
              "bg-emerald-600",
              "bg-green-700",
            ];
            return (
              <div
                key={item.title}
                className={`bg-gradient-to-br ${cardStyles[idx % cardStyles.length]} border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200 shadow-sm`}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBg[idx % iconBg.length]} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-green-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
