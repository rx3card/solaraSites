import { MessageSquare, Paintbrush, Code, Sparkles, Check, Zap, ArrowRight, Clock } from "lucide-react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consultoría & Brief",
    description: "Llamada de 30-60 min donde entendemos tu negocio, objetivos y público.",
    icon: MessageSquare,
    iconBg: "from-[#0071e3]/20 to-[#2196F3]/20",
    iconColor: "text-[#0071e3]",
    numberBg: "from-[#0071e3] to-[#2196F3]",
    numberText: "text-white",
    numberShadow: "0 8px 30px rgba(0, 113, 227, 0.4)",
    borderColor: "border-[#0071e3]/30",
    hoverBorder: "hover:border-[#0071e3]/50",
    hoverShadow: "hover:shadow-[#0071e3]/20",
    badgeBg: "bg-[#0071e3]/10 border-[#0071e3]/30",
    badgeText: "text-[#0071e3]",
    duration: "1 día",
    deliverables: ["Brief completo", "Roadmap del proyecto"],
  },
  {
    id: 2,
    number: "02",
    title: "Diseño & Prototipo",
    description: "Creamos mockups interactivos en Figma para que visualices exactamente cómo quedará.",
    icon: Paintbrush,
    iconBg: "from-[#FFD700]/15 to-[#FFC107]/15",
    iconColor: "text-[#FFD700]",
    numberBg: "from-[#FFD700] to-[#FFC107]",
    numberText: "text-black",
    numberShadow: "0 8px 30px rgba(255, 215, 0, 0.35)",
    borderColor: "border-[#FFD700]/30",
    hoverBorder: "hover:border-[#FFD700]/50",
    hoverShadow: "hover:shadow-[#FFD700]/20",
    badgeBg: "bg-[#FFD700]/10 border-[#FFD700]/30",
    badgeText: "text-[#FFD700]",
    duration: "2-4 días",
    deliverables: ["Prototipo navegable", "Guía de estilos"],
  },
  {
    id: 3,
    number: "03",
    title: "Desarrollo",
    description: "Código limpio y optimizado con React, Next.js o Tailwind. Todo probado.",
    icon: Code,
    iconBg: "from-[#7C3AED]/20 to-[#A78BFA]/20",
    iconColor: "text-[#7C3AED]",
    numberBg: "from-[#7C3AED] to-[#A78BFA]",
    numberText: "text-white",
    numberShadow: "0 8px 30px rgba(124, 58, 237, 0.35)",
    borderColor: "border-[#7C3AED]/30",
    hoverBorder: "hover:border-[#7C3AED]/50",
    hoverShadow: "hover:shadow-[#7C3AED]/20",
    badgeBg: "bg-[#7C3AED]/10 border-[#7C3AED]/30",
    badgeText: "text-[#7C3AED]",
    duration: "3-10 días",
    deliverables: ["Sitio funcional", "100% responsive"],
  },
  {
    id: 4,
    number: "✓",
    title: "Entrega & Soporte",
    description: "Despliegue en producción, capacitación y soporte completo por 14 días.",
    icon: Sparkles,
    iconBg: "from-[#10B981]/20 to-[#06B6D4]/20",
    iconColor: "text-[#10B981]",
    numberBg: "from-[#10B981] to-[#06B6D4]",
    numberText: "text-white",
    numberShadow: "0 8px 30px rgba(16, 185, 129, 0.35)",
    borderColor: "border-[#10B981]/30",
    hoverBorder: "hover:border-[#10B981]/50",
    hoverShadow: "hover:shadow-[#10B981]/20",
    badgeBg: "bg-[#10B981]/10 border-[#10B981]/30",
    badgeText: "text-[#10B981]",
    duration: "¡Listo!",
    deliverables: ["Sitio en producción", "14 días de soporte"],
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-[#FFD700]/5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7C3AED]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFD700]/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/15 to-[#06B6D4]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-sm font-semibold mb-6">
            <Zap className="w-5 h-5" />
            <span>Proceso Ágil y Transparente</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            De la Idea al{" "}
            <span className="bg-gradient-to-r from-[#0071e3] via-[#FFD700] to-[#10B981] bg-clip-text text-transparent">
              Lanzamiento
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestro proceso está diseñado para ser{" "}
            <strong className="text-white">transparente, rápido y sin sorpresas</strong>. Cada etapa
            tiene entregables claros y fechas definidas.
          </p>
        </div>

        {/* Timeline con línea conectora colorida */}
        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#0071e3] via-[#FFD700] via-[#7C3AED] to-[#10B981]"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="group relative">
                  <div
                    className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 ${step.borderColor} backdrop-blur-xl rounded-3xl p-8 ${step.hoverBorder} hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl ${step.hoverShadow}`}
                  >
                    {/* Número flotante con sombra personalizada */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.numberBg} flex items-center justify-center ${step.numberText} text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}
                        style={{
                          boxShadow: step.numberShadow,
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
            <Zap className="w-6 h-6 text-[#FFD700]" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Tiempo total promedio</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0071e3] to-[#06B6D4] bg-clip-text text-transparent">
                7-15 días
              </div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Satisfacción del cliente</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                95%
              </div>
            </div>
          </div>

          {/* Botón CTA con morado premium */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] text-white font-bold text-lg shadow-2xl shadow-[#7C3AED]/40 hover:shadow-[#7C3AED]/60 hover:-translate-y-1 transition-all duration-300"
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
