"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Lock, AlertCircle, ArrowRight, Shield, Mail } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  // useMemo para evitar múltiples instancias
  const supabase = useMemo(() => createBrowserSupabaseClient(), []);

  useEffect(() => {
    setMounted(true);
    // Verificar si ya hay sesión activa
    checkSession();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push("/admin");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Intentar login con Supabase Auth
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      if (data.session) {
        // Verificar que el usuario está en la tabla admin_users
        const response = await fetch("/api/admin/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: data.user.id }),
        });

        const result = await response.json();

        if (response.ok) {
          router.push("/admin");
          router.refresh();
        } else {
          // No es un admin válido, cerrar sesión
          await supabase.auth.signOut();
          setError(result.error || "No tienes permisos de administrador");
        }
      }
    } catch (err: any) {
      console.error("Error de login:", err);
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#0071e3]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#34C759]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 mb-4 sm:mb-6 backdrop-blur-xl">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#0071e3]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2 sm:mb-3">
            SolaraSites
          </h1>
          <p className="text-[#86868b] text-xs sm:text-sm">
            Panel de Administración
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          {/* Error Alert */}
          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/30 flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-xs sm:text-sm">Error de Autenticación</p>
                <p className="text-[#FF3B30] text-xs sm:text-sm mt-0.5">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#f5f5f7] mb-2 sm:mb-3">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-[#86868b] focus:border-[#0071e3] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="admin@solarasites.com"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#f5f5f7] mb-3">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-[#86868b] focus:border-[#0071e3] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ED] text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verificando...</span>
                </div>
              ) : (
                <>
                  <span>Acceder al Panel</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Features */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#86868b]">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#34C759] flex-shrink-0" />
              <span>Acceso seguro y encriptado</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#86868b]">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0071e3] flex-shrink-0" />
              <span>Sesión válida por 24 horas</span>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-4 sm:mt-6 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#86868b] hover:text-white transition-colors"
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
            Volver al sitio web
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[10px] sm:text-xs text-[#86868b]">
            © 2025 SolaraSites. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
