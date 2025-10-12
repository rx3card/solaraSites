"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#portfolio", label: "Portafolio" },
    { href: "#pricing", label: "Precios" },
    { href: "#process", label: "Proceso" },
    { href: "#contact", label: "Contacto" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      role="banner"
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/80 border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Text */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="SolaraSites — Inicio">
          <span className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight transition-all group-hover:text-primary">
            Solara<span className="text-primary">Sites</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm" role="navigation" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-textSecondary hover:text-white transition-all duration-300 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://wa.me/+573184961233"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#EC4899]/40 hover:scale-105"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Contactar</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-lg bg-surface/50 border border-white/[0.08] backdrop-blur-md hover:bg-surface transition-all"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.08]"
          role="navigation"
          aria-label="Navegación móvil"
        >
          <div className="px-4 sm:px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-textSecondary hover:text-white hover:bg-surface/50 rounded-lg transition-all font-medium"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/+573184961233"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] text-white text-center rounded-full transition-all"
              onClick={closeMobileMenu}
            > 
              <WhatsAppIcon className="w-4 h-4" />
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
