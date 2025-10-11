import { createClient } from '@supabase/supabase-js';
import { createBrowserClient, createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente básico (sin auth) - para operaciones públicas
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Cliente para el navegador con auth completo
export function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Cliente para Server Components con auth
// IMPORTANTE: Solo usar en Server Components o API Routes
export async function createServerSupabaseClient() {
  // Import dinámico para evitar errores en componentes cliente
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component - no podemos escribir cookies aquí
          }
        },
      },
    }
  );
}

// Cliente admin solo para uso en servidor (API Routes)
// No importar esto en componentes del cliente
export const createAdminClient = () => {
  if (typeof window !== 'undefined') {
    throw new Error('supabaseAdmin solo puede usarse en el servidor');
  }
  
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
};

// Tipos de la base de datos
export interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
  read_at?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  created_at: string;
  created_by?: string;
  last_login?: string;
  is_active: boolean;
}
