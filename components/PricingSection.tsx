import { DollarSign, Check, ArrowRight, Star } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Landing Básico",
    subtitle: "Perfecto para validar tu idea de negocio",
    price: "$350k",
    currency: "COP",
    badge: "Ideal para Emprendedores",
    badgeColor: "bg-solaraOrange/10 border-solaraOrange/30 text-solaraOrange",
    priceGradient: "from-solaraOrange to-solaraGold",
    buttonGradient: "from-solaraOrange via-solaraGold to-solaraOrange",
    buttonText: "text-black",
    hoverBorder: "hover:border-solaraOrange/40",
    hoverShadow: "hover:shadow-solaraOrange/10",
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
    priceGradient: "from-solaraBlue to-solaraPurple",
    buttonGradient: "from-solaraBlue via-solaraPurple to-solaraBlue",
    buttonText: "text-white",
    hoverBorder: "hover:border-solaraBlue",
    hoverShadow: "hover:shadow-solaraBlue/10",
    borderColor: "border-solaraBlue/40",
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
    priceGradient: "from-solaraPurple to-solaraPink",
    buttonGradient: "from-solaraPurple to-solaraPink",
    buttonText: "text-white",
    hoverBorder: "hover:border-solaraPurple/40",
    hoverShadow: "hover:shadow-solaraPurple/10",
    delivery: "10-15 días",
    buttonLabel: "Solicitar Cotización",
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
      <div className="absolute inset-0 bg-gradient-to-b from-solaraBlue/5 via-transparent to-solaraPurple/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraGold/20 to-solaraOrange/20 border border-solaraGold/30 text-solaraGold text-sm font-semibold mb-6">
            <DollarSign className="w-5 h-5" />
            <span>Precios Transparentes • Sin Sorpresas</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Planes{" "}
            <span className="bg-gradient-to-r from-solaraGold to-solaraOrange bg-clip-text text-transparent">
              Simples y Claros
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`group relative bg-gradient-to-br ${
                plan.isPopular ? "from-white/[0.08]" : "from-white/[0.05]"
              } to-white/[0.02] border-2 ${
                plan.isPopular ? plan.borderColor : "border-white/[0.08]"
              } backdrop-blur-xl rounded-3xl p-8 ${plan.hoverBorder} hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${
                plan.hoverShadow
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-solaraBlue to-solaraPurple text-white text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="mb-6">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${plan.badgeColor} text-xs font-semibold`}
                  >
                    <Star className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`mb-6 ${plan.isPopular ? "mt-4" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              {/* Precio */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold bg-gradient-to-r ${plan.priceGradient} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceExtra && (
                    <span className="text-gray-400">{plan.priceExtra}</span>
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
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-solaraGreen flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">{feature.title}</span>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/+573184961233?text=${plan.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn block w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r ${plan.buttonGradient} ${plan.buttonText} font-bold shadow-lg ${plan.hoverShadow} hover:-translate-y-1 transition-all duration-300`}
                style={{ backgroundSize: "200% 100%" }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{plan.buttonLabel || "Solicitar Plan"}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>
              <p className="text-xs text-gray-400 text-center mt-4">
                Entrega en {plan.delivery}
              </p>
            </article>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            ¿No encuentras el plan perfecto?{" "}
            <a href="#contact" className="text-solaraGold hover:underline font-semibold">
              Contáctanos
            </a>{" "}
            para una solución personalizada
          </p>
        </div>
      </div>
    </section>
  );
};
