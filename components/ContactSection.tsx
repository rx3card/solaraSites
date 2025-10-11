"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Check, ArrowRight, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";

type SubmitState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

export const ContactSection = () => {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState({ status: 'submitting' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }

      setSubmitState({
        status: 'success',
        message: result.message,
      });
      reset();
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitState({ status: 'idle' });
      }, 5000);
    } catch (error: any) {
      setSubmitState({
        status: 'error',
        message: error.message || 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-solaraPurple/5 via-transparent to-solaraBlue/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-solaraGreen/20 to-solaraBlue/20 border border-solaraGreen/30 text-solaraGreen text-sm font-semibold mb-6">
            <Mail className="w-5 h-5" />
            <span>Respuesta en menos de 24 horas</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-solaraOrange to-solaraGold bg-clip-text text-transparent">
              Empezar?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Contáctanos ahora y recibe una propuesta personalizada para tu proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Columna Izquierda: Info de contacto */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8">
              <h3 className="font-display text-2xl text-white font-bold mb-4">
                Contáctanos Directamente
              </h3>
              <p className="text-gray-400 mb-8">
                Elige la forma más rápida de comunicarte con nosotros
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+573184961233?text=Hola%20SolaraSites,%20quiero%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-solaraOrange/10 to-solaraGold/10 border border-solaraOrange/30 hover:border-solaraOrange hover:-translate-y-1 transition-all mb-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-solaraOrange to-solaraGold flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Respuesta inmediata</div>
                </div>
                <ArrowRight className="w-5 h-5 text-solaraOrange group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href="mailto:solarasites.com@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-solaraBlue/10 to-solaraPurple/10 border border-solaraBlue/30 hover:border-solaraBlue hover:-translate-y-1 transition-all mb-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-solaraBlue to-solaraPurple flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">Email</div>
                  <div className="text-gray-400 text-sm">solarasites.com@gmail.com</div>
                </div>
              </a>

              {/* Info adicional */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-5 h-5 text-solaraGreen mt-1" />
                  <div>
                    <div className="text-white font-semibold text-sm">Métodos de pago</div>
                    <div className="text-gray-400 text-sm">Nequi, Daviplata, Transferencia</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-solaraGreen mt-1" />
                  <div>
                    <div className="text-white font-semibold text-sm">Horario</div>
                    <div className="text-gray-400 text-sm">Lun-Vie: 9AM-7PM, Sáb: 10AM-2PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              action="#"
              className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8"
            >
              <h3 className="font-display text-2xl text-white font-bold mb-6">
                Solicita tu Cotización
              </h3>

              {/* Mensaje de éxito */}
              {submitState.status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-solaraGreen/20 to-solaraGreen/10 border border-solaraGreen/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-solaraGreen flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">¡Mensaje enviado con éxito!</p>
                    <p className="text-gray-300 text-sm mt-1">{submitState.message}</p>
                  </div>
                </div>
              )}

              {/* Mensaje de error */}
              {submitState.status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Error al enviar</p>
                    <p className="text-gray-300 text-sm mt-1">{submitState.message}</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Tu nombre *
                  </label>
                  <input
                    {...register('name')}
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } p-4 text-white placeholder-gray-500 focus:border-solaraOrange focus:ring-2 focus:ring-solaraOrange/20 transition-all outline-none`}
                    placeholder="Ej: Carlos Pérez"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } p-4 text-white placeholder-gray-500 focus:border-solaraOrange focus:ring-2 focus:ring-solaraOrange/20 transition-all outline-none`}
                    placeholder="+57 300 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } p-4 text-white placeholder-gray-500 focus:border-solaraOrange focus:ring-2 focus:ring-solaraOrange/20 transition-all outline-none`}
                    placeholder="ejemplo@correo.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    {...register('projectType')}
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.projectType ? 'border-red-500' : 'border-white/10'
                    } p-4 text-white focus:border-solaraOrange focus:ring-2 focus:ring-solaraOrange/20 transition-all outline-none`}
                  >
                    <option value="" className="bg-gray-900">
                      Selecciona una opción
                    </option>
                    <option value="landing" className="bg-gray-900">
                      Landing Page ($350k)
                    </option>
                    <option value="corporativa" className="bg-gray-900">
                      Web Corporativa ($550k)
                    </option>
                    <option value="ecommerce" className="bg-gray-900">
                      E-commerce ($900k+)
                    </option>
                    <option value="otro" className="bg-gray-900">
                      Otro / Personalizado
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  {...register('message')}
                  className={`w-full rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } p-4 text-white placeholder-gray-500 h-32 focus:border-solaraOrange focus:ring-2 focus:ring-solaraOrange/20 transition-all outline-none resize-none`}
                  placeholder="Describe qué necesitas, objetivos, funcionalidades importantes..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitState.status === 'submitting'}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-solaraOrange via-solaraGold to-solaraOrange text-black font-bold shadow-lg shadow-solaraOrange/30 hover:shadow-xl hover:shadow-solaraOrange/50 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundSize: "200% 100%" }}
                >
                  {submitState.status === 'submitting' ? (
                    <span>Enviando…</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Solicitud</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1">
                <Check className="w-4 h-4" />
                Responderemos tu solicitud en menos de 24 horas. Para respuesta inmediata, usa WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
