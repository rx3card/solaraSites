import { MessageSquare, Paintbrush, Code, Sparkles, Check, Zap, ArrowRight, Clock } from "lucide-react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consultoría & Brief",
    description: "Llamada de 30-60 min donde entendemos tu negocio, objetivos y público.",
    icon: MessageSquare,
    iconBg: "from-solaraOrange/20 to-solaraGold/20",
    iconColor: "text-solaraOrange",
    numberBg: "from-solaraOrange to-solaraGold",
    numberText: "text-black",
    borderColor: "border-solaraOrange/30",
    hoverBorder: "hover:border-solaraOrange",
    hoverShadow: "hover:shadow-solaraOrange/20",
    badgeBg: "bg-solaraOrange/10 border-solaraOrange/30",
    badgeText: "text-solaraOrange",
    duration: "1 día",
    deliverables: ["Brief completo", "Roadmap del proyecto"],
  },
  {
    id: 2,
    number: "02",
    title: "Diseño & Prototipo",
    description: "Creamos mockups interactivos en Figma para que visualices exactamente cómo quedará.",
    icon: Paintbrush,
    iconBg: "from-solaraBlue/20 to-solaraPurple/20",
    iconColor: "text-solaraBlue",
    numberBg: "from-solaraBlue to-solaraPurple",
    numberText: "text-white",
    borderColor: "border-solaraBlue/30",
    hoverBorder: "hover:border-solaraBlue",
    hoverShadow: "hover:shadow-solaraBlue/20",
    badgeBg: "bg-solaraBlue/10 border-solaraBlue/30",
    badgeText: "text-solaraBlue",
    duration: "2-4 días",
    deliverables: ["Prototipo navegable", "Guía de estilos"],
  },
  {
    id: 3,
    number: "03",
    title: "Desarrollo",
    description: "Código limpio y optimizado con React, Next.js o Tailwind. Todo probado.",
    icon: Code,
    iconBg: "from-solaraPurple/20 to-solaraPink/20",
    iconColor: "text-solaraPurple",
    numberBg: "from-solaraPurple to-solaraPink",
    numberText: "text-white",
    borderColor: "border-solaraPurple/30",
    hoverBorder: "hover:border-solaraPurple",
    hoverShadow: "hover:shadow-solaraPurple/20",
    badgeBg: "bg-solaraPurple/10 border-solaraPurple/30",
    badgeText: "text-solaraPurple",
    duration: "3-10 días",
    deliverables: ["Sitio funcional", "100% responsive"],
  },
  {
    id: 4,
    number: "✓",
    title: "Entrega & Soporte",
    description: "Despliegue en producción, capacitación y soporte completo por 14 días.",
    icon: Sparkles,
    iconBg: "from-solaraGreen/20 to-solaraBlue/20",
    iconColor: "text-solaraGreen",
    numberBg: "from-solaraGreen to-solaraBlue",
    numberText: "text-white",
    borderColor: "border-solaraGreen/30",
    hoverBorder: "hover:border-solaraGreen",
    hoverShadow: "hover:shadow-solaraGreen/20",
    badgeBg: "bg-solaraGreen/10 border-solaraGreen/30",
    badgeText: "text-solaraGreen",
    duration: "¡Listo!",
    deliverables: ["Sitio en producción", "14 días de soporte"],
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-solaraPurple/5 via-transparent to-solaraOrange/5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-solaraPurple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-solaraOrange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraBlue/20 to-solaraPurple/20 border border-solaraBlue/30 text-solaraBlue text-sm font-semibold mb-6">
            <Zap className="w-5 h-5" />
            <span>Proceso Ágil y Transparente</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            De la Idea al{" "}
            <span className="bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraBlue bg-clip-text text-transparent">
              Lanzamiento
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestro proceso está diseñado para ser{" "}
            <strong className="text-white">transparente, rápido y sin sorpresas</strong>. Cada etapa
            tiene entregables claros y fechas definidas.
          </p>
        </div>

        {/* Timeline con línea conectora */}
        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-solaraOrange via-solaraBlue via-solaraPurple to-solaraGreen"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="group relative">
                  <div
                    className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 ${step.borderColor} backdrop-blur-xl rounded-3xl p-8 ${step.hoverBorder} hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl ${step.hoverShadow}`}
                  >
                    {/* Número flotante */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.numberBg} flex items-center justify-center ${step.numberText} text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}
                        style={{
                          boxShadow: `0 10px 40px rgba(255, 140, 41, 0.5)`,
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Icono */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center`}
                      >
                        <Icon className={`w-8 h-8 ${step.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm text-center leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Entregables */}
                    <div className="space-y-2 mb-6">
                      {step.deliverables.map((deliverable, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <Check className="w-4 h-4 text-solaraGreen" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="pt-4 border-t border-white/10 text-center">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${step.badgeBg} border`}
                      >
                        {step.id < 4 ? (
                          <Clock className={`w-4 h-4 ${step.badgeText}`} />
                        ) : (
                          <Check className={`w-4 h-4 ${step.badgeText}`} />
                        )}
                        <span className={`text-sm font-semibold ${step.badgeText}`}>
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumen timeline total */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg">
            <Zap className="w-6 h-6 text-solaraGold" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Tiempo total promedio</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent">
                7-15 días
              </div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Satisfacción del cliente</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-solaraGreen to-solaraBlue bg-clip-text text-transparent">
                95%
              </div>
            </div>
          </div>

          {/* Botón CTA mejorado */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraOrange text-black font-bold text-lg shadow-2xl shadow-solaraOrange/40 hover:shadow-solaraOrange/60 hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundSize: "200% 100%" }}
          >
            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="group-hover:tracking-wide transition-all">
              Iniciar Mi Proyecto Ahora
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-400">
            Sin compromiso • Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};
