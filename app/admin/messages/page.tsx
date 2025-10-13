"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient, type ContactMessage } from "@/lib/supabase";
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare, 
  Loader2, 
  LogOut, 
  Trash2,
  Search,
  ArrowLeft,
  LayoutDashboard,
  CheckCircle2,
  Circle,
  Clock3
} from "lucide-react";

type FilterStatus = 'all' | 'new' | 'in-progress' | 'completed';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const router = useRouter();
  // useMemo para evitar múltiples instancias
  const supabaseAuth = useMemo(() => createBrowserSupabaseClient(), []);

  useEffect(() => {
    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const checkAuth = async () => {
    const { data: { session } } = await supabaseAuth.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = messages.filter(
        m => 
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setMessages(filtered);
    } else {
      loadMessages();
    }
  }, [searchQuery]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      let query = supabaseAuth
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) {
        console.error('❌ Error loading messages:', error);
        return;
      }

      setMessages(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    const { error } = await supabaseAuth
      .from('contact_messages')
      .delete()
      .eq('id', id);

    if (!error) {
      setMessages(messages.filter(m => m.id !== id));
      setDeleteConfirm(null);
    } else {
      console.error('❌ Error deleting:', error);
    }
  };

  const updateStatus = async (id: string, newStatus: 'new' | 'in-progress' | 'completed') => {
    const { error } = await supabaseAuth
      .from('contact_messages')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      loadMessages();
    }
  };

  const handleLogout = async () => {
    await supabaseAuth.auth.signOut();
    router.push('/admin/login');
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'new':
        return {
          bg: 'bg-[#FF9500]/10',
          border: 'border-[#FF9500]/30',
          text: 'text-[#FF9500]',
          label: 'Nuevo',
          icon: Circle
        };
      case 'in-progress':
        return {
          bg: 'bg-[#0071e3]/10',
          border: 'border-[#0071e3]/30',
          text: 'text-[#0071e3]',
          label: 'En Progreso',
          icon: Clock3
        };
      case 'completed':
        return {
          bg: 'bg-[#34C759]/10',
          border: 'border-[#34C759]/30',
          text: 'text-[#34C759]',
          label: 'Completado',
          icon: CheckCircle2
        };
      default:
        return {
          bg: 'bg-white/5',
          border: 'border-white/10',
          text: 'text-[#86868b]',
          label: status,
          icon: Circle
        };
    }
  };

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(m => m.status === filter);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin')}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#86868b]" />
              </button>
              <div>
                <h1 className="text-3xl font-semibold text-white mb-1">Mensajes</h1>
                <p className="text-[#86868b] text-sm">{filteredMessages.length} mensajes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/admin')}
                className="flex items-center gap-2 px-4 py-2 bg-[#0071e3] hover:bg-[#0077ED] text-white rounded-full transition-colors font-medium text-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#FF3B30]/10 text-[#FF3B30] rounded-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
              <input
                type="text"
                placeholder="Buscar mensajes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-[#86868b] focus:border-[#0071e3] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === 'all'
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-[#86868b] hover:bg-white/10'
              }`}
            >
              Todos ({messages.length})
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === 'new'
                  ? 'bg-[#FF9500] text-white'
                  : 'bg-white/5 text-[#86868b] hover:bg-white/10'
              }`}
            >
              Nuevos
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === 'in-progress'
                  ? 'bg-[#0071e3] text-white'
                  : 'bg-white/5 text-[#86868b] hover:bg-white/10'
              }`}
            >
              En Progreso
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === 'completed'
                  ? 'bg-[#34C759] text-white'
                  : 'bg-white/5 text-[#86868b] hover:bg-white/10'
              }`}
            >
              Completados
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#0071e3]" />
          </div>
        )}

        {!loading && filteredMessages.length === 0 && (
          <div className="text-center py-20">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-[#86868b] opacity-50" />
            <p className="text-[#86868b]">No hay mensajes para mostrar</p>
          </div>
        )}

        {!loading && filteredMessages.length > 0 && (
          <div className="space-y-4">
            {filteredMessages.map((message) => {
              const statusConfig = getStatusConfig(message.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={message.id}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{message.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-[#86868b]">
                        <a href={`mailto:${message.email}`} className="flex items-center gap-2 hover:text-[#0071e3] transition-colors">
                          <Mail className="w-4 h-4" />
                          {message.email}
                        </a>
                        <a href={`tel:${message.phone}`} className="flex items-center gap-2 hover:text-[#0071e3] transition-colors">
                          <Phone className="w-4 h-4" />
                          {message.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => setDeleteConfirm(deleteConfirm === message.id ? null : message.id)}
                      className="p-2 hover:bg-[#FF3B30]/10 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-[#FF3B30]" />
                    </button>
                  </div>

                  {/* Delete Confirmation */}
                  {deleteConfirm === message.id && (
                    <div className="mb-4 p-4 bg-[#FF3B30]/10 border border-[#FF3B30]/30 rounded-xl">
                      <p className="text-white text-sm mb-3">¿Eliminar este mensaje?</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteMessage(message.id)}
                          className="px-4 py-2 bg-[#FF3B30] text-white rounded-full text-sm font-medium hover:bg-[#FF3B30]/90 transition-colors"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-4 py-2 bg-white/5 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="mb-4">
                    <div className="text-sm text-[#86868b] mb-2">
                      Tipo: <span className="text-white capitalize">{message.project_type}</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                      <p className="text-[#f5f5f7] leading-relaxed whitespace-pre-wrap">{message.message}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-[#86868b]">
                      <Clock className="w-4 h-4" />
                      {new Date(message.created_at).toLocaleString('es-CO', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Status Badge */}
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig.bg} ${statusConfig.border} ${statusConfig.text} border`}>
                        <StatusIcon className="w-4 h-4" />
                        {statusConfig.label}
                      </div>

                      {/* Status Actions */}
                      <div className="flex gap-1">
                        {message.status !== 'in-progress' && (
                          <button
                            onClick={() => updateStatus(message.id, 'in-progress')}
                            className="p-2 hover:bg-[#0071e3]/10 rounded-full transition-colors"
                            title="Marcar en progreso"
                          >
                            <Clock3 className="w-4 h-4 text-[#0071e3]" />
                          </button>
                        )}
                        {message.status !== 'completed' && (
                          <button
                            onClick={() => updateStatus(message.id, 'completed')}
                            className="p-2 hover:bg-[#34C759]/10 rounded-full transition-colors"
                            title="Marcar completado"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
