"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, MapPin, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const Footer = () => {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    services: [
      { name: "Landing Pages", href: "#services" },
      { name: "Sitios Corporativos", href: "#services" },
      { name: "E-commerce", href: "#services" },
      { name: "Aplicaciones Web", href: "#services" },
    ],
    company: [
      { name: "Nosotros", href: "#why-us" },
      { name: "Portafolio", href: "#portfolio" },
      { name: "Testimonios", href: "#testimonials" },
      { name: "Preguntas Frecuentes", href: "#faq" },
    ],
  };

  return (
    <footer className="relative bg-bgCard border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logoV2.png"
                alt="SolaraSites logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div>
                <div className="text-white font-bold text-lg">SolaraSites</div>
                <div className="text-xs text-gray-400">Desarrollo Web Premium</div>
              </div>
            </div>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              Creamos sitios web profesionales que{" "}
              <span className="text-white font-medium">convierten visitantes en clientes</span>. Diseño
              moderno, velocidad ultrarápida y soporte dedicado.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/SolaraSites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <svg
                  className="w-5 h-5 text-textSecondary group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+573184961233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-success/50 hover:bg-success/10 transition-all group"
              >
                <svg
                  className="w-5 h-5 text-textSecondary group-hover:text-success transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-textSecondary text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-textSecondary text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-textTertiary mb-1">Email</div>
                  <a
                    href="mailto:contacto@solarasites.com"
                    className="text-textSecondary text-sm hover:text-primary transition-colors"
                  >
                    contacto@solarasites.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-textTertiary mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/+573184961233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary text-sm hover:text-success transition-colors"
                  >
                    +57 318 496 1233
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-textTertiary mb-1">Ubicación</div>
                  <span className="text-textSecondary text-sm">Colombia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/[0.06] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-textSecondary text-center md:text-left">
              © <span id="year">{year}</span>{" "}
              <span className="text-white font-medium">SolaraSites</span>. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-textSecondary">
              <a href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <span className="text-textTertiary">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <span className="text-textTertiary">•</span>
              <a href="#contact" className="hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
