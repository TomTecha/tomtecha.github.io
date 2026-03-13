"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { TomTechaLogoIcon } from "@/app/components/Logo";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 border-t border-green-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <TomTechaLogoIcon size={30} />
            <span className="font-bold text-white text-base tracking-tight">
              Tom<span className="text-green-300">Techa</span>
            </span>
          </div>

          <p className="text-green-300/70 text-sm text-center">
            {t.footer.tagline}
          </p>

          <p className="text-green-400/50 text-sm">
            © {year} TomTecha. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
