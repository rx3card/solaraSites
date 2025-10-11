import { TrendingUp, DollarSign, CheckCircle, Lock, ArrowRight } from "lucide-react";

const successCases = [
  {
    id: 1,
    title: "Piquitours y Eventos",
    subtitle: "Landing + Catálogo de Eventos",
    icon: TrendingUp,
    iconBg: "from-solaraOrange to-solaraGold",
    metrics: [
      { label: "Pedidos online", value: "+40%", color: "text-solaraGreen" },
      { label: "Tiempo de carga", value: "0.8s", color: "text-solaraBlue" },
      { label: "Tiempo de entrega", value: "7 días", color: "text-solaraPurple" },
    ],
    technologies: [
      { name: "React", color: "bg-[#58C4DC]/20 text-[#58C4DC]" },
      { name: "Tailwind", color: "bg-[#38bdf8]/20 text-[#38bdf8]" },
      { name: "SEO", color: "bg-white/10 text-gray-300" },
    ],
    link: "https://www.piquitoursyeventos.com/",
    hoverBorder: "hover:border-solaraOrange/40",
    hoverShadow: "hover:shadow-solaraOrange/10",
  },
  {
    id: 2,
    title: "Tienda Online Premium",
    subtitle: "E-commerce con Pagos Integrados",
    icon: DollarSign,
    iconBg: "from-solaraBlue to-solaraPurple",
    metrics: [
      { label: "Conversiones", value: "+65%", color: "text-solaraGreen" },
      { label: "Valor promedio", value: "+32%", color: "text-solaraGold" },
      { label: "ROI primer mes", value: "280%", color: "text-solaraPink" },
    ],
    technologies: [
      { name: "Next.js", color: "bg-white/10 text-gray-300" },
      { name: "Stripe", color: "bg-[#4945FF]/20 text-[#9593FF]" },
      { name: "Optimizado", color: "bg-solaraGreen/20 text-solaraGreen" },
    ],
    isConfidential: true,
    hoverBorder: "hover:border-solaraBlue/40",
    hoverShadow: "hover:shadow-solaraBlue/10",
  },
  {
    id: 3,
    title: "Agencia de Marketing",
    subtitle: "Landing de Alta Conversión",
    icon: CheckCircle,
    iconBg: "from-solaraPurple to-solaraPink",
    metrics: [
      { label: "Leads generados", value: "+120%", color: "text-solaraGreen" },
      { label: "Tasa de rebote", value: "-45%", color: "text-solaraBlue" },
      { label: "Lighthouse Score", value: "98/100", color: "text-solaraGold" },
    ],
    technologies: [
      { name: "React", color: "bg-[#58C4DC]/20 text-[#58C4DC]" },
      { name: "Analytics", color: "bg-white/10 text-gray-300" },
      { name: "A/B Testing", color: "bg-solaraOrange/20 text-solaraOrange" },
    ],
    deliveryNote: "Entregado en 5 días",
    hoverBorder: "hover:border-solaraPurple/40",
    hoverShadow: "hover:shadow-solaraPurple/10",
  },
];

export const SuccessCasesSection = () => {
  return (
    <section id="success-cases" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-solaraPurple/20 to-solaraPink/20 border border-solaraPurple/30 text-solaraPurple text-sm font-semibold mb-4">
          <CheckCircle className="w-4 h-4" />
          <span>Resultados Reales</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-white font-bold">
          Casos de Éxito
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-lg">
          Nuestros clientes no solo obtienen un sitio web, obtienen resultados medibles
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {successCases.map((caseItem) => {
          const Icon = caseItem.icon;
          return (
            <div
              key={caseItem.id}
              className={`group relative rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-md p-6 ${caseItem.hoverBorder} transition-all hover:-translate-y-2 hover:shadow-2xl ${caseItem.hoverShadow}`}
            >
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${caseItem.iconBg} flex items-center justify-center text-black font-bold text-xl`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-gray-400">{caseItem.subtitle}</p>
              </div>

              <div className="space-y-4 mb-6">
                {caseItem.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                  >
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <span className={`text-xl font-bold ${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {caseItem.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full ${tech.color} text-xs font-semibold`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {caseItem.link && (
                <a
                  href={caseItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-solaraOrange font-semibold hover:gap-3 transition-all"
                >
                  Ver sitio en vivo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}

              {caseItem.isConfidential && (
                <div className="inline-flex items-center gap-2 text-sm text-solaraBlue font-semibold">
                  <Lock className="w-4 h-4" />
                  Proyecto confidencial
                </div>
              )}

              {caseItem.deliveryNote && (
                <div className="inline-flex items-center gap-2 text-sm text-solaraPurple font-semibold">
                  {caseItem.deliveryNote}
                  <CheckCircle className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA de casos de éxito */}
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-4">
          ¿Quieres ver tu proyecto aquí con resultados reales?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-solaraPurple to-solaraPink text-white font-semibold hover:-translate-y-1 transition-all shadow-lg shadow-solaraPurple/30"
        >
          Empezar mi proyecto
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
