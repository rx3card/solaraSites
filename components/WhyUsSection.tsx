import { TrendingUp, Zap, Search, Target } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Enfoque en conversión",
    description: "Copy persuasivo, CTAs estratégicos y diseño orientado a resultados desde el día 1.",
    icon: TrendingUp,
    iconBg: "from-solaraOrange to-solaraGold",
    hoverBorder: "hover:border-solaraOrange/40",
    hoverBg: "group-hover:from-solaraOrange/10 group-hover:to-solaraGold/10",
    metric: "+40%",
    metricLabel: "Mejora promedio en conversiones",
    metricGradient: "from-solaraOrange to-solaraGold",
  },
  {
    id: 2,
    title: "Velocidad real",
    description: "Core Web Vitals optimizados, recursos comprimidos y carga ultrarrrápida en móviles.",
    icon: Zap,
    iconBg: "from-solaraBlue to-solaraPurple",
    hoverBorder: "hover:border-solaraBlue/40",
    hoverBg: "group-hover:from-solaraBlue/10 group-hover:to-solaraPurple/10",
    metric: "<2s",
    metricLabel: "Tiempo de carga promedio",
    metricGradient: "from-solaraBlue to-solaraPurple",
  },
  {
    id: 3,
    title: "SEO técnico",
    description: "Metadatos optimizados, schema markup y estructura semántica para posicionar en Google.",
    icon: Search,
    iconBg: "from-solaraGold to-solaraOrange",
    hoverBorder: "hover:border-solaraGold/40",
    hoverBg: "group-hover:from-solaraGold/10 group-hover:to-solaraOrange/10",
    metric: "100/100",
    metricLabel: "Score SEO promedio",
    metricGradient: "from-solaraGold to-solaraOrange",
  },
  {
    id: 4,
    title: "Soporte cercano",
    description: "Acompañamiento personalizado 14 días post-entrega y asesoría en integraciones.",
    icon: Target,
    iconBg: "from-solaraPurple to-solaraPink",
    hoverBorder: "hover:border-solaraPink/40",
    hoverBg: "group-hover:from-solaraPurple/10 group-hover:to-solaraPink/10",
    metric: "24/7",
    metricLabel: "Soporte inicial incluido",
    metricGradient: "from-solaraPurple to-solaraPink",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solaraBlue/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-solaraBlue/20 to-solaraPurple/20 border border-solaraBlue/30 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-solaraBlue to-solaraPurple bg-clip-text text-transparent">
              ✨ NUESTRA DIFERENCIA
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-solaraBlue via-solaraPurple to-solaraPink bg-clip-text text-transparent">
              SolaraSites
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            No solo diseñamos: construimos activos digitales que venden. Cada proyecto está optimizado
            para conversiones, velocidad y posicionamiento.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] rounded-2xl p-6 ${benefit.hoverBorder} transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-solaraOrange/0 to-solaraGold/0 ${benefit.hoverBg} rounded-2xl transition-all duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span
                      className={`text-2xl font-bold bg-gradient-to-r ${benefit.metricGradient} bg-clip-text text-transparent`}
                    >
                      {benefit.metric}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{benefit.metricLabel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
