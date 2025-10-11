"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Mail, 
  Calendar,
  ArrowRight,
  LogOut
} from 'lucide-react';
import { createBrowserSupabaseClient } from '@/lib/supabase';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DashboardStats {
  total: number;
  new: number;
  inProgress: number;
  completed: number;
  thisWeek: number;
  thisMonth: number;
}

interface MessagesByType {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

interface TimelineData {
  date: string;
  mensajes: number;
}

const COLORS = {
  landing: '#0071e3',
  corporativa: '#34C759',
  ecommerce: '#FF9500',
  otro: '#AF52DE'
};

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();
  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    new: 0,
    inProgress: 0,
    completed: 0,
    thisWeek: 0,
    thisMonth: 0
  });
  const [messagesByType, setMessagesByType] = useState<MessagesByType[]>([]);
  const [timelineData, setTimelineData] = useState<TimelineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
      return;
    }
    // Obtener nombre del usuario
    const { data: adminUser } = await supabase
      .from('admin_users')
      .select('name')
      .eq('id', session.user.id)
      .single();
    
    if (adminUser) {
      setUserName(adminUser.name);
    }
    
    fetchDashboardData();
  };

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard');
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
        setMessagesByType(data.messagesByType);
        setTimelineData(data.timeline);
      }
    } catch (error) {
      console.error('Error fetching dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1">Dashboard</h1>
              <p className="text-[#86868b] text-xs sm:text-sm">
                {userName ? `Bienvenido, ${userName}` : 'Bienvenido al panel de control'}
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => router.push('/admin/messages')}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#0071e3] hover:bg-[#0077ED] text-white rounded-full font-medium transition-all text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Ver Mensajes</span>
                <span className="sm:hidden">Mensajes</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 sm:p-3 bg-white/5 hover:bg-[#FF3B30]/10 text-[#FF3B30] rounded-full transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Total Messages */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition-all">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0071e3]" />
              </div>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#34C759]" />
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stats.total}</div>
            <div className="text-[#86868b] text-xs sm:text-sm">Total Mensajes</div>
          </div>

          {/* New Messages */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition-all">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#34C759]/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#34C759]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stats.new}</div>
            <div className="text-[#86868b] text-xs sm:text-sm">Nuevos</div>
          </div>

          {/* This Week */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition-all">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9500]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF9500]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stats.thisWeek}</div>
            <div className="text-[#86868b] text-xs sm:text-sm">Esta Semana</div>
          </div>

          {/* This Month */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition-all">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AF52DE]/10 flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#AF52DE]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stats.thisMonth}</div>
            <div className="text-[#86868b] text-xs sm:text-sm">Este Mes</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Timeline Chart */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Mensajes en el Tiempo</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorMensajes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0071e3" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0071e3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="date" stroke="#86868b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#86868b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    background: '#1d1d1f', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#f5f5f7'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="mensajes" 
                  stroke="#0071e3" 
                  fillOpacity={1} 
                  fill="url(#colorMensajes)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Messages by Type */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Por Tipo de Proyecto</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={messagesByType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {messagesByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: '#1d1d1f', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#f5f5f7'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
