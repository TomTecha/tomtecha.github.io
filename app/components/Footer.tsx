"use client";

import { Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-amber-400 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-slate-900" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-white text-base">
              Tom<span className="text-amber-400">Techa</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            {t.footer.tagline}
          </p>

          <p className="text-slate-600 text-sm">
            © {year} TomTecha. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
