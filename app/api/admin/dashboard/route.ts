import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Obtener todos los mensajes
    const { data: messages, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Calcular estadísticas
    const stats = {
      total: messages?.length || 0,
      new: messages?.filter(m => m.status === 'new').length || 0,
      inProgress: messages?.filter(m => m.status === 'in-progress').length || 0,
      completed: messages?.filter(m => m.status === 'completed').length || 0,
      thisWeek: messages?.filter(m => new Date(m.created_at) >= weekAgo).length || 0,
      thisMonth: messages?.filter(m => new Date(m.created_at) >= monthAgo).length || 0,
    };

    // Mensajes por tipo de proyecto
    const projectTypeCounts = messages?.reduce((acc: any, msg) => {
      const type = msg.project_type || 'otro';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const messagesByType = Object.entries(projectTypeCounts || {}).map(([name, value]) => ({
      name: name === 'landing' ? 'Landing Page' :
            name === 'corporativa' ? 'Corporativa' :
            name === 'ecommerce' ? 'E-commerce' : 'Otro',
      value: value as number,
      color: name === 'landing' ? '#0071e3' :
             name === 'corporativa' ? '#34C759' :
             name === 'ecommerce' ? '#FF9500' : '#AF52DE'
    }));

    // Timeline de los últimos 7 días
    const timeline = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = date.toLocaleDateString('es-CO', { month: 'short', day: 'numeric' });
      const count = messages?.filter(m => {
        const msgDate = new Date(m.created_at);
        return msgDate.toDateString() === date.toDateString();
      }).length || 0;
      
      timeline.push({ date: dateStr, mensajes: count });
    }

    return NextResponse.json({
      stats,
      messagesByType,
      timeline
    });
  } catch (error: any) {
    console.error('Error fetching dashboard:', error);
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
}
