"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
          aria-label="TomTecha"
        >
          <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center group-hover:bg-amber-300 transition-colors">
            <Zap className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">
            Tom<span className="text-amber-400">Techa</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {(
            [
              { key: "home", label: t.nav.home },
              { key: "services", label: t.nav.services },
              { key: "contact", label: t.nav.contact },
            ] as { key: string; label: string }[]
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="ml-3 px-3 py-1.5 border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-slate-900 rounded-lg text-sm font-semibold transition-all duration-200"
          >
            {t.nav.langToggle}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-amber-400/60 text-amber-400 rounded-lg text-sm font-semibold"
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-3 space-y-1">
            {(
              [
                { key: "home", label: t.nav.home },
                { key: "services", label: t.nav.services },
                { key: "contact", label: t.nav.contact },
              ] as { key: string; label: string }[]
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg text-base font-medium transition-all"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
