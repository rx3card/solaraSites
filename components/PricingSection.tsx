import { DollarSign, Check, ArrowRight, Star } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Landing Básico",
    subtitle: "Perfecto para validar tu idea de negocio",
    price: "$350k",
    currency: "COP",
    priceGradient: "from-[#0071e3] to-[#2196F3]",
    borderColor: "border-[#0071e3]/20",
    hoverBorder: "hover:border-[#0071e3]/40",
    hoverShadow: "hover:shadow-[#0071e3]/20",
    bgGradient: "from-[#0071e3]/5 to-transparent",
    delivery: "3-5 días",
    features: [
      {
        title: "Página única profesional",
        description: "Landing optimizada para conversiones",
      },
      {
        title: "100% Responsive",
        description: "Perfecta en móvil, tablet y desktop",
      },
      {
        title: "Formulario de contacto",
        description: "Integración con WhatsApp",
      },
      {
        title: "SEO Básico",
        description: "Optimización para buscadores",
      },
    ],
    whatsappText: "Hola%20SolaraSites,%20me%20interesa%20el%20plan%20Landing%20Básico",
  },
  {
    id: 2,
    name: "Web Corporativa",
    subtitle: "Presencia profesional completa",
    price: "$550k",
    currency: "COP",
    isPopular: true,
    priceGradient: "from-[#7C3AED] via-[#A78BFA] to-[#EC4899]",
    borderColor: "border-[#7C3AED]/30",
    hoverBorder: "hover:border-[#7C3AED]/50",
    hoverShadow: "hover:shadow-[#7C3AED]/25",
    bgGradient: "from-[#7C3AED]/8 to-[#EC4899]/5",
    delivery: "7-10 días",
    features: [
      {
        title: "Múltiples secciones",
        description: "Hasta 8 páginas",
      },
      {
        title: "Blog integrado",
        description: "Contenido dinámico",
      },
      {
        title: "SEO Avanzado",
        description: "Optimización completa",
      },
      {
        title: "Panel admin",
        description: "Gestiona tu contenido",
      },
    ],
    whatsappText: "Hola%20SolaraSites,%20me%20interesa%20Web%20Corporativa",
  },
  {
    id: 3,
    name: "App / E-commerce",
    subtitle: "Plataforma completa avanzada",
    price: "$900k",
    priceExtra: "+",
    extraNote: "Según requerimientos",
    priceGradient: "from-[#06B6D4] via-[#0EA5E9] to-[#10B981]",
    borderColor: "border-[#06B6D4]/20",
    hoverBorder: "hover:border-[#06B6D4]/40",
    hoverShadow: "hover:shadow-[#06B6D4]/20",
    bgGradient: "from-[#06B6D4]/5 to-[#10B981]/5",
    delivery: "10-15 días",
    buttonLabel: "Consultar",
    features: [
      {
        title: "E-commerce completo",
        description: "Catálogo + carrito",
      },
      {
        title: "Pasarelas de pago",
        description: "Stripe, PayU, etc",
      },
      {
        title: "Sistema usuarios",
        description: "Login y perfiles",
      },
      {
        title: "Dashboard admin",
        description: "Gestión total",
      },
    ],
    whatsappText: "Hola%20SolaraSites,%20quiero%20App/E-commerce",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-textSecondary">Precios transparentes</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Planes{" "}
            <span 
              className="bg-gradient-to-r from-[#0071e3] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
            >
              flexibles
            </span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto font-light">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`group relative bg-gradient-to-br ${plan.bgGradient} border ${
                plan.isPopular ? plan.borderColor : plan.borderColor
              } backdrop-blur-xl rounded-2xl p-8 ${plan.hoverBorder} hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${
                plan.hoverShadow
              } ${plan.isPopular ? 'ring-2 ring-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.15)]' : ''}`}
            >
              {/* Popular badge con dorado premium */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFD700] text-black text-xs font-bold shadow-lg shadow-[#FFD700]/40 animate-pulse-glow">
                    ⭐ MÁS POPULAR
                  </span>
                </div>
              )}

              <div className={`mb-6 ${plan.isPopular ? "mt-4" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              {/* Precio con gradiente vibrante */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-semibold bg-gradient-to-r ${plan.priceGradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  {plan.priceExtra && (
                    <span className={`text-2xl bg-gradient-to-r ${plan.priceGradient} bg-clip-text text-transparent`}>{plan.priceExtra}</span>
                  )}
                  {plan.currency && !plan.priceExtra && (
                    <span className="text-gray-400 text-sm">{plan.currency}</span>
                  )}
                </div>
                {plan.extraNote && (
                  <p className="text-sm text-gray-400 mt-2">{plan.extraNote}</p>
                )}
              </div>

              {/* Características */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">{feature.title}</span>
                      <p className="text-textSecondary text-xs">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/+573184961233?text=${plan.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn block w-full text-center px-6 py-3.5 rounded-full bg-gradient-to-r ${plan.priceGradient} text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{plan.buttonLabel || "Solicitar"}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>
              <p className="text-xs text-textTertiary text-center mt-4">
                Entrega: {plan.delivery}
              </p>
            </article>
          ))}
        </div>

        {/* Nota adicional minimalista */}
        <div className="mt-16 text-center">
          <p className="text-textSecondary">
            ¿Necesitas algo personalizado?{" "}
            <a href="#contact" className="text-primary hover:text-primaryLight transition-colors font-medium">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
