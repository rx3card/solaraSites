import Image from "next/image";
import { Star, Check, Info, ArrowRight, Eye } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo animado espectacular */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solaraOrange/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-solaraOrange/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-solaraBlue/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solaraPurple/10 rounded-full blur-[180px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 lg:py-40 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraOrange/20 to-solaraGold/20 border border-solaraOrange/40 backdrop-blur-md">
              <Star className="w-5 h-5 text-solaraOrange fill-solaraOrange" />
              <span className="text-sm font-bold bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent">
                #1 en Desarrollo Web Profesional
              </span>
            </div>

            {/* Título espectacular */}
            <div className="space-y-4">
              <h1 className="text-white font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black tracking-tight">
                Tu{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraBlue bg-clip-text text-transparent animate-glow">
                    Sitio Web
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-solaraOrange/40 via-solaraGold/40 to-solaraBlue/40 blur-xl"></div>
                </span>
                <br />
                que <span className="bg-gradient-to-r from-solaraBlue via-solaraPurple to-solaraPink bg-clip-text text-transparent">convierte</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                Diseño <strong className="text-white font-semibold">premium</strong>, velocidad <strong className="text-white font-semibold">ultrarápida</strong> y optimizado para <strong className="text-solaraOrange font-semibold">vender más</strong>.
                <br />Así de simple.
              </p>
            </div>

            {/* Métricas y Social Proof */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] rounded-2xl p-4 backdrop-blur-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent">20+</div>
                <div className="text-xs text-gray-400 mt-1">Proyectos exitosos</div>
              </div>
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] rounded-2xl p-4 backdrop-blur-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-solaraBlue to-solaraPurple bg-clip-text text-transparent">7d</div>
                <div className="text-xs text-gray-400 mt-1">Entrega promedio</div>
              </div>
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-yellow-400">4.9</span>
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-xs text-gray-400 mt-1">Valoración clientes</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/+573184961233?text=Hola%20SolaraSites,%20quiero%20una%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold rounded-xl bg-gradient-to-r from-solaraOrange to-solaraGold text-black overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-solaraOrange/50"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="relative z-10">🚀 Empezar mi proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={3} />
                <div className="absolute inset-0 bg-gradient-to-r from-solaraGold to-solaraOrange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <Eye className="w-5 h-5" />
                Ver planes y precios
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-solaraGreen" />
                <span className="text-gray-300 text-sm">Entrega garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-solaraGreen" />
                <span className="text-gray-300 text-sm">Soporte 14 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-solaraGreen" />
                <span className="text-gray-300 text-sm">Revisión ilimitada</span>
              </div>
            </div>

            {/* Info de pago */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-solaraOrange/10 to-solaraGold/10 border border-solaraOrange/20">
              <Info className="w-5 h-5 text-solaraOrange flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-gray-200 font-semibold">Pago inicial flexible: Nequi / Daviplata</p>
                <p className="text-gray-400 mt-1">Después integramos PayU, MercadoPago o Stripe según tu necesidad</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Visual impactante */}
          <div className="relative lg:pl-8">
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.15] rounded-3xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Badge flotante */}
              <div className="absolute top-2 sm:top-4 lg:top-10 left-1/2 -translate-x-1/2 z-20">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-solaraGreen/30 to-solaraGreen/20 border border-solaraGreen/50 backdrop-blur-md shadow-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-solaraGreen animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs font-bold text-solaraGreen whitespace-nowrap">En producción</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0a0b] to-[#0f1214] rounded-2xl p-5 relative z-10">
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-solaraOrange to-solaraGold"></div>
                    <span className="font-semibold">Piquitours eventos</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">7 días</span>
                </div>

                <div className="bg-[#060608] border border-white/3 rounded-lg p-6">
                  <div className="text-sm text-gray-300 mb-4">Landing limpia + catálogo</div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Screenshot 1 */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-[#0b0b0d] to-[#121214] rounded-lg border border-white/4 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/landing.png"
                          alt="Vista landing"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* Screenshot 2 */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full aspect-[3/2] bg-gradient-to-br from-[#0b0b0d] to-[#121214] rounded-lg border border-white/4 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/catalogo.png"
                          alt="Vista catálogo"
                          width={400}
                          height={267}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-white/10">
                  <div className="text-xs text-gray-400 font-semibold">Stack:</div>
                  <span className="flex items-center gap-1.5 text-xs text-gray-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="2.5" fill="#58C4DC" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#58C4DC" strokeWidth="1.3" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#58C4DC" strokeWidth="1.3" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#58C4DC" strokeWidth="1.3" transform="rotate(120 12 12)" />
                    </svg>
                    React
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/4 text-xs text-gray-300">
                    <svg width="14" height="10" viewBox="0 0 54 33" fill="none">
                      <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
                    </svg>
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
