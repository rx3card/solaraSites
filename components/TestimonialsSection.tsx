import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Piquitours y Eventos",
    role: "Empresa de Turismo",
    rating: 5,
    text: "El sitio quedó increíble. Diseño limpio, rápido y fácil de usar. Nuestros clientes ahora pueden ver todos nuestros eventos y reservar directamente por WhatsApp. ¡100% recomendados!",
    avatar: "PT",
    avatarGradient: "from-solaraOrange to-solaraGold",
  },
  {
    id: 2,
    name: "Andrea M.",
    role: "Agencia de Marketing",
    rating: 5,
    text: "Profesionalismo total. Entrega puntual, comunicación clara y un sitio que carga instantáneamente. Superaron nuestras expectativas en diseño y funcionalidad.",
    avatar: "AM",
    avatarGradient: "from-solaraBlue to-solaraPurple",
  },
  {
    id: 3,
    name: "Carlos R.",
    role: "Centro Deportivo",
    rating: 4.8,
    text: "Integraron sistema de reservas y pagos de forma impecable. El soporte post-entrega fue excelente. Ahora gestionamos todo desde un solo lugar.",
    avatar: "CR",
    avatarGradient: "from-solaraPurple to-solaraPink",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-transparent via-solaraPurple/5 to-transparent">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-solaraGold/20 to-yellow-500/20 border border-solaraGold/30 text-solaraGold text-sm font-semibold mb-4">
          <Star className="w-4 h-4 fill-solaraGold" />
          <span>Testimonios Verificados • Rating 4.9/5</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-white font-bold">
          Lo Que Dicen Nuestros Clientes
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-lg">
          Opiniones reales de negocios que confiaron en nosotros para su presencia digital
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-md p-6 rounded-2xl hover:border-solaraOrange/30 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.floor(testimonial.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : index < testimonial.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600 fill-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Texto */}
            <blockquote className="mb-6">
              <p className="text-gray-200 text-base leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>

            {/* Footer */}
            <footer className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white font-bold text-lg`}
              >
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};
