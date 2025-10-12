import Image from "next/image";
import { Star, Check, Info, ArrowRight, Eye } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo espectacular multicolo */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#0071e3]/15 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-[#7C3AED]/12 rounded-full blur-[160px] animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-[15%] right-[20%] w-[550px] h-[550px] bg-[#06B6D4]/10 rounded-full blur-[170px] animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-[20%] left-[25%] w-[450px] h-[450px] bg-[#EC4899]/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: "4.5s" }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 lg:py-40 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge superior con toque dorado premium */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD700]/10 via-[#0071e3]/10 to-[#06B6D4]/10 border border-[#FFD700]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,215,0,0.15)]">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFE55C] animate-pulse shadow-[0_0_10px_rgba(255,215,0,0.6)]"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-[#FFE55C] to-[#06B6D4] bg-clip-text text-transparent">
                Desarrollo web profesional en Colombia
              </span>
            </div>

            {/* Título elegante */}
            <div className="space-y-6">
              <h1 className="text-white font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-bold tracking-tight">
                Sitios web que{" "}
                <span className="relative inline-block">
                  <span 
                    className="bg-gradient-to-r from-[#0071e3] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent animate-gradient"
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    convierten
                  </span>
                </span>
              </h1>
              <p className="text-textSecondary text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
                Diseño profesional, desarrollo ágil y resultados medibles.
                <br className="hidden sm:block" />
                <span className="text-white font-medium">Así de simple.</span>
              </p>
            </div>

            {/* Métricas con colores vibrantes */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative group bg-gradient-to-br from-[#0071e3]/10 to-transparent border border-[#0071e3]/20 rounded-xl p-5 backdrop-blur-xl hover:border-[#0071e3]/40 transition-all">
                <div className="text-4xl font-semibold bg-gradient-to-br from-[#0071e3] to-[#2196F3] bg-clip-text text-transparent mb-1">20+</div>
                <div className="text-xs text-gray-400 font-medium">Proyectos exitosos</div>
                <div className="absolute inset-0 bg-[#0071e3]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20 rounded-xl p-5 backdrop-blur-xl hover:border-[#7C3AED]/40 transition-all">
                <div className="text-4xl font-semibold bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent mb-1">7d</div>
                <div className="text-xs text-gray-400 font-medium">Entrega promedio</div>
                <div className="absolute inset-0 bg-[#7C3AED]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group bg-gradient-to-br from-[#FFD700]/10 to-[#EC4899]/5 border border-[#FFD700]/30 rounded-xl p-5 backdrop-blur-xl hover:border-[#FFD700]/50 transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-4xl font-semibold bg-gradient-to-br from-[#FFD700] to-[#FFE55C] bg-clip-text text-transparent">4.9</span>
                  <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                </div>
                <div className="text-xs text-gray-400 font-medium">Valoración</div>
                <div className="absolute inset-0 bg-[#FFD700]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* CTAs profesionales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/+573184961233?text=Hola%20SolaraSites,%20quiero%20una%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#0071e3] via-[#06B6D4] to-[#0071e3] hover:from-[#2196F3] hover:to-[#0EA5E9] text-white transition-all hover:shadow-2xl hover:shadow-[#0071e3]/40 hover:scale-105 relative overflow-hidden"
                style={{ backgroundSize: '200% 100%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer"></div>
                <WhatsAppIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Empezar proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-full border border-[#7C3AED]/30 bg-gradient-to-r from-[#7C3AED]/10 to-transparent backdrop-blur-xl text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 transition-all"
              >
                <Eye className="w-5 h-5 text-[#7C3AED]" />
                <span>Ver planes</span>
              </a>
            </div>

            {/* Trust indicators minimalistas */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-gray-300 text-sm font-medium">Entrega garantizada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-gray-300 text-sm font-medium">Soporte 14 días</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#10B981]" />
                <span className="text-gray-300 text-sm font-medium">Revisiones incluidas</span>
              </div>
            </div>

            {/* Info de pago con acento cyan */}
            <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#06B6D4]/5 to-transparent border border-[#06B6D4]/20">
              <Info className="w-4 h-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-gray-300">Métodos de pago: <span className="text-white font-medium">Nequi, Daviplata, Transferencia</span></p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Visual impactante */}
          <div className="relative lg:pl-8">
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.15] rounded-3xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Badge flotante con dorado premium */}
              <div className="absolute top-2 sm:top-4 lg:top-10 left-1/2 -translate-x-1/2 z-20">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#10B981]/30 to-[#10B981]/20 border border-[#10B981]/50 backdrop-blur-md shadow-lg shadow-[#10B981]/20">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#10B981] whitespace-nowrap">En producción</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0a0b] to-[#0f1214] rounded-2xl p-5 relative z-10">
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC107] shadow-[0_0_10px_rgba(255,215,0,0.4)]"></div>
                    <span className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Piquitours eventos</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-[#FFD700]/10 border border-[#FFD700]/20 px-3 py-1 rounded-full font-semibold">7 días</span>
                </div>

                <div className="bg-[#060608] border border-white/3 rounded-lg p-6">
                  <div className="text-sm text-gray-300 mb-4">Landing limpia + catálogo</div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Screenshot 1 */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full aspect-square bg-gradient-to-br from-[#0b0b0d] to-[#121214] rounded-lg border border-white/4 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/landing-optimized.webp"
                          alt="Vista landing"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover rounded-lg"
                          priority
                          quality={75}
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 250px, 320px"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </div>
                    {/* Screenshot 2 */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full aspect-[3/2] bg-gradient-to-br from-[#0b0b0d] to-[#121214] rounded-lg border border-white/4 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/catalogo-optimized.webp"
                          alt="Vista catálogo"
                          width={320}
                          height={213}
                          className="w-full h-full object-cover rounded-lg"
                          priority
                          quality={75}
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 250px, 320px"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
