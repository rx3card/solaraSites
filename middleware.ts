import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Solo proteger rutas /admin/* excepto /admin/login
  if (path.startsWith('/admin') && path !== '/admin/login') {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set(name, value);
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    // Verificar sesión de Supabase
    const { data: { session } } = await supabase.auth.getSession();

    // Si no hay sesión, redirigir al login
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return response;
  }

  return NextResponse.next();
}

// Configurar qué rutas usar el middleware
export const config = {
  matcher: '/admin/:path*',
};
