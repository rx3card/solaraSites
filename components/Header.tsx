"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-[#08080a]/56 border-b border-white/[0.04] shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="SolaraSites — Inicio">
          <Image
            src="/logoV2.png"
            alt="SolaraSites logo"
            width={104}
            height={44}
            className="w-[40px] h-[40px] sm:w-[104px] sm:h-[44px] object-contain drop-shadow-[0_12px_30px_rgba(255,140,41,0.12)]"
            priority
          />
        </Link>

        {/* Nombre de marca */}
        <Link href="/" className="flex items-center gap-3" aria-label="SolaraSites — Inicio">
          <span className="text-lg sm:text-xl font-display font-semibold bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent tracking-tight">
            Solara Sites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+573184961233"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-4 relative inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraOrange rounded-full text-black font-bold shadow-lg shadow-solaraOrange/30 hover:shadow-xl hover:shadow-solaraOrange/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-solaraGold"
            style={{ backgroundSize: "200% 100%", backgroundPosition: "0% 0%" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "100% 0%")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0% 0%")}
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03] backdrop-blur-md"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-200" />
            ) : (
              <Menu className="w-5 h-5 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#060608]/80 bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03] backdrop-blur-md">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 hover:text-solaraOrange transition-colors"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/+573184961233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base font-semibold bg-gradient-to-r from-solaraOrange to-solaraGold text-black text-center rounded-full hover:scale-105 transition-transform"
              onClick={closeMobileMenu}
            > 
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
