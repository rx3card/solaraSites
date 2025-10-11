import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'ID de usuario requerido' },
        { status: 400 }
      );
    }

    // Usar admin client para bypassear RLS
    const supabase = createAdminClient();

    // Verificar que el usuario existe en admin_users y está activo
    const { data: adminUser, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', userId)
      .eq('is_active', true)
      .single();

    if (error || !adminUser) {
      return NextResponse.json(
        { error: 'No tienes permisos de administrador' },
        { status: 403 }
      );
    }

    // Actualizar last_login
    await supabase
      .from('admin_users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', userId);

    return NextResponse.json({ 
      success: true,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name
      }
    });
  } catch (error) {
    console.error('Error en auth:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    // Para logout, crear cliente de servidor
    const { createServerSupabaseClient } = await import('@/lib/supabase');
    const supabase = await createServerSupabaseClient();
    await supabase.auth.signOut();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al cerrar sesión' },
      { status: 500 }
    );
  }
}
