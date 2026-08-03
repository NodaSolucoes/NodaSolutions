import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import {
  X,
  LayoutDashboard,
  Users,
  BellRing,
  LogOut,
  Loader2
} from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const [profile, setProfile] = useState({ name: '', cargo: '', initials: '' });
  const [loading, setLoading] = useState(true);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const [constructionFeature, setConstructionFeature] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;

        const { data, error } = await supabase
          .from('colaboradores')
          .select('*')
          .eq('user_id', session.user.id)
          .single();

        if (data) {
          const name = data.name || data.nome || session.user.email.split('@')[0];
          const cargo = data.cargo || data.role || 'Colaborador';
          // Extract initials: up to 2 letters
          const initials = data.initials || name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

          setProfile({ name, cargo, initials });
        }
      } catch (err) {
        console.error('Erro ao buscar perfil no sidebar:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await supabase.auth.signOut();
    navigate('/login', { replace: true });
  };

  const handleConstructionClick = (e, featureName) => {
    e.preventDefault();
    setConstructionFeature(featureName);
    setShowConstructionModal(true);
  };

  return (
    <aside
      id="sidebar"
      className={`w-64 glass-sidebar flex flex-col h-full absolute lg:relative z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <Link to="/admin" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <defs>
              <linearGradient id="boltGradientAdmin" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4338CA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="30" height="30" rx="9" fill="#0B0F19" stroke="rgba(148,163,184,0.16)" />
            <path d="M18.5 6L10 18h5.2l-1.7 8L22 13.5h-5.2L18.5 6z" fill="url(#boltGradientAdmin)" className="transition-transform duration-300 group-hover:scale-105" />
          </svg>
          <span className="font-bold text-lg tracking-tight text-white">Noda  <span className="text-indigo-400">ADM</span></span>
        </Link>

        <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-gray-400 hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Links ADM */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div className="text-[10px] font-bold text-indigo-400/70 uppercase tracking-wider mb-4 px-2">Gestão Operacional</div>

        {/* Inativo */}
        <a href="#" onClick={(e) => handleConstructionClick(e, 'Visão Geral (DRE)')} className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
          <LayoutDashboard className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          <span className="font-medium text-sm flex-1">Visão Geral (DRE)</span>
          <span className="text-[9px] uppercase tracking-wider bg-white/5 text-gray-500 px-1.5 py-0.5 rounded border border-white/5">Em Breve</span>
        </a>

        {/* ATIVO: Base de Clientes / Projetos Ativos */}
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-500/10 text-white rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(67,56,202,0.1)]">
          <Users className="w-5 h-5 text-indigo-400" />
          <span className="font-medium text-sm">Base de Clientes</span>
        </a>

        {/* Inativo */}
        <a href="#" onClick={(e) => handleConstructionClick(e, 'Colaboradores')} className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
          <Users className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          <span className="font-medium text-sm flex-1">Colaboradores</span>
          <span className="text-[9px] uppercase tracking-wider bg-white/5 text-gray-500 px-1.5 py-0.5 rounded border border-white/5">Em Breve</span>
        </a>

        {/* Inativo */}
        <a href="#" onClick={(e) => handleConstructionClick(e, 'Solicitações')} className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
          <BellRing className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          <span className="font-medium text-sm">Solicitações <span className="ml-2 bg-orange-500/20 text-orange-400 text-[10px] px-2 py-0.5 rounded-full">2</span></span>
        </a>
      </nav>

      {/* Admin Profile Area */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-default transition-colors">
          {loading ? (
            <div className="flex-1 flex justify-center py-2">
              <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-indigo-400/30 flex items-center justify-center text-sm font-bold text-white shrink-0">
                {profile.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{profile.name}</p>
                <p className="text-xs text-indigo-400 truncate">{profile.cargo}</p>
              </div>
              <button onClick={handleLogout} title="Sair do ADM" className="cursor-pointer">
                <LogOut className="w-4 h-4 text-gray-500 hover:text-red-400 transition-colors" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Modal Em Construção - Portaled to body */}
      {showConstructionModal && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowConstructionModal(false)}
          ></div>
          <div className="relative glass-card w-full max-w-md p-8 rounded-3xl flex flex-col items-center text-center animate-fade-in border border-white/10 shadow-2xl bg-[#0b0f19]">
            
            {/* Decoração de Fundo do Modal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>

            <button 
              onClick={() => setShowConstructionModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <LayoutDashboard className="w-8 h-8 relative z-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Módulo em Construção</h3>
            <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">
              A área de <strong className="text-indigo-400 font-semibold">{constructionFeature}</strong> está sendo meticulosamente desenhada pelos nossos engenheiros.
              <br /><br />
              Em breve esta ferramenta estará disponível em seu ecossistema.
            </p>
            
            <button 
              onClick={() => setShowConstructionModal(false)}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-white rounded-xl text-sm font-bold transition-all cursor-pointer relative z-10"
            >
              Entendi, voltar
            </button>
          </div>
        </div>,
        document.body
      )}

    </aside>
  );
}
