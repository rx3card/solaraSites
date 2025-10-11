"use client";

import { useState } from "react";
import { X } from "lucide-react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="stickyCta" className="fixed inset-x-0 bottom-4 z-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md shadow-xl flex items-center justify-between gap-2 sm:gap-3 px-2.5 py-2 sm:px-3 sm:py-3">
          <div className="text-xs sm:text-sm text-gray-200 hidden sm:block ml-1">
            ¿Listo para una web que venda? Hablemos hoy.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="#pricing"
              className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full border border-white/10 text-gray-100 hover:bg-white/10"
            >
              Ver precios
            </a>
            <a
              href="https://wa.me/+573184961233?text=Hola%20SolaraSites,%20quiero%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full bg-gradient-to-r from-solaraOrange to-solaraGold text-black font-semibold"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Cerrar barra"
              className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
