"use client";

import { HelpCircle, Clock, CreditCard, Server, Eye, Calendar, ChevronDown, Check } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "¿Cuánto tiempo toma un proyecto?",
    icon: Clock,
    iconColor: "text-solaraOrange",
    answer: (
      <>
        <p>Los tiempos de entrega dependen del tipo de proyecto:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong className="text-white">Landing Page:</strong> 3-5 días hábiles</li>
          <li><strong className="text-white">Web Corporativa:</strong> 7-10 días hábiles</li>
          <li><strong className="text-white">E-commerce/App:</strong> 10-15 días hábiles</li>
        </ul>
        <p className="text-gray-400 text-xs mt-2">*Los tiempos pueden variar según complejidad y requerimientos específicos</p>
      </>
    ),
  },
  {
    id: 2,
    question: "¿Qué métodos de pago aceptan?",
    icon: CreditCard,
    iconColor: "text-solaraGreen",
    answer: (
      <>
        <p>Aceptamos múltiples formas de pago:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li><strong className="text-white">Nequi</strong> (Recomendado)</li>
          <li><strong className="text-white">Daviplata</strong></li>
          <li><strong className="text-white">Transferencia bancaria</strong></li>
        </ul>
        <p className="mt-3">Recomendamos un anticipo del <strong className="text-white">30%</strong> para iniciar y el <strong className="text-white">70%</strong> restante al entregar el proyecto.</p>
      </>
    ),
  },
  {
    id: 3,
    question: "¿Incluye hosting y dominio?",
    icon: Server,
    iconColor: "text-solaraBlue",
    answer: (
      <>
        <p className="mb-3">Ofrecemos diferentes opciones de hosting:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-solaraGreen mt-0.5 flex-shrink-0" />
            <span><strong className="text-white">Hosting gratuito:</strong> Despliegue en Vercel o Netlify (incluido en el precio)</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-solaraGreen mt-0.5 flex-shrink-0" />
            <span><strong className="text-white">Tu propio hosting:</strong> Podemos desplegar en tu servidor si ya tienes uno</span>
          </li>
        </ul>
        <p className="mt-3 text-gray-400 text-xs">El dominio (.com, .co) no está incluido, pero te asesoramos en su compra (aprox. $50k COP/año)</p>
      </>
    ),
  },
  {
    id: 4,
    question: "¿Puedo ver ejemplos de trabajos anteriores?",
    icon: Eye,
    iconColor: "text-solaraPurple",
    answer: (
      <>
        <p>Sí, tenemos varios proyectos de ejemplo en la sección de <strong className="text-white">Portafolio</strong>. También puedes:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Ver demos en vivo de nuestros proyectos</li>
          <li>Solicitar acceso a proyectos privados vía WhatsApp</li>
          <li>Revisar casos de estudio detallados</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    question: "¿Ofrecen soporte después de la entrega?",
    icon: Calendar,
    iconColor: "text-solaraGold",
    answer: (
      <>
        <p>¡Sí! Incluimos:</p>
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-solaraGreen mt-0.5 flex-shrink-0" />
            <span><strong className="text-white">14 días de soporte gratuito</strong> para ajustes menores y bugs</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-solaraGreen mt-0.5 flex-shrink-0" />
            <span>Capacitación para que puedas gestionar tu contenido</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-solaraGreen mt-0.5 flex-shrink-0" />
            <span>Documentación técnica del proyecto</span>
          </li>
        </ul>
      </>
    ),
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-solaraOrange/5 via-transparent to-solaraPurple/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraPurple/20 to-solaraPink/20 border border-solaraPurple/30 text-solaraPurple text-sm font-semibold mb-6">
            <HelpCircle className="w-5 h-5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            ¿Tienes <span className="bg-gradient-to-r from-solaraPurple to-solaraPink bg-clip-text text-transparent">Dudas?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Aquí respondemos las preguntas más comunes. Si no encuentras lo que buscas, ¡contáctanos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq) => {
            const Icon = faq.icon;
            return (
              <details
                key={faq.id}
                className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-solaraPurple/40 transition-all"
              >
                <summary className="cursor-pointer font-bold text-white text-lg flex items-center justify-between list-none">
                  <span className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${faq.iconColor}`} />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-gray-300 text-sm leading-relaxed space-y-2">
                  {faq.answer}
                </div>
              </details>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10">
            <p className="text-gray-300 text-lg">¿No encontraste tu respuesta?</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-solaraPurple to-solaraPink text-white font-bold shadow-lg hover:-translate-y-1 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Contáctanos Ahora</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
