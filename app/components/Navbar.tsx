"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TomTechaLogoIcon } from "@/app/components/Logo";

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

  const navLinkCls = isScrolled
    ? "px-4 py-2 text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-lg text-sm font-medium transition-all duration-200"
    : "px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-all duration-200";

  const langBtnCls = isScrolled
    ? "ml-3 px-3 py-1.5 border border-green-600/60 text-green-700 hover:bg-green-600 hover:text-white rounded-lg text-sm font-semibold transition-all duration-200"
    : "ml-3 px-3 py-1.5 border border-white/60 text-white hover:bg-white hover:text-green-800 rounded-lg text-sm font-semibold transition-all duration-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 group"
          aria-label="TomTecha"
        >
          <TomTechaLogoIcon size={34} className="group-hover:scale-105 transition-transform duration-200" />
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-green-900" : "text-white"
            }`}
          >
            Tom<span className="text-green-500">Techa</span>
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
            <button key={key} onClick={() => scrollTo(key)} className={navLinkCls}>
              {label}
            </button>
          ))}
          <button onClick={toggleLanguage} className={langBtnCls}>
            {t.nav.langToggle}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className={`px-3 py-1 border rounded-lg text-sm font-semibold transition-all duration-200 ${
              isScrolled
                ? "border-green-600/60 text-green-700 hover:bg-green-600 hover:text-white"
                : "border-white/60 text-white hover:bg-white/20"
            }`}
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1 transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg">
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
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-lg text-base font-medium transition-all"
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
