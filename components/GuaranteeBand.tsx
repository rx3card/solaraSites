import { Check } from "lucide-react";

export const GuaranteeBand = () => {
  return (
    <section id="guarantee" className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.03] backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
        <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
          <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-solaraOrange to-solaraGold text-black flex-shrink-0">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
          </span>
          <span>Garantía 72h: si el prototipo no te convence, te devolvemos el anticipo.</span>
        </div>
        <div className="text-xs sm:text-sm text-gray-300">
          Incluye soporte de 14 días post-entrega.
        </div>
      </div>
    </section>
  );
};
