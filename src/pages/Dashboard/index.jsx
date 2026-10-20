import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import { 
  Menu, X, LayoutDashboard, GitPullRequest, Receipt, FolderKanban, 
  LogOut, Bell, LifeBuoy, CalendarCheck, ExternalLink, CheckCircle2, 
  Wallet, Download, FileText, Users, Code2, MessageSquare, Video, 
  ChevronRight, GitBranch, Plus, Clock as ClockIcon
} from 'lucide-react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div className="antialiased selection:bg-noda-cyan/30 selection:text-white h-screen flex overflow-hidden bg-noda-base text-white">
      {/* Background Animations */}
      <div className="bg-grid"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-noda-primary/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-noda-cyan/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob" style={{ animationDelay: '2s' }}></div>

      {/* Sidebar Navigation */}
      <aside 
        className={`w-64 glass-sidebar flex flex-col h-full absolute lg:relative z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <a href="#" className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <defs>
                <linearGradient id="boltGradient" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="55%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#4338CA" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="30" height="30" rx="9" fill="#0B0F19" stroke="rgba(148,163,184,0.16)" />
              <path d="M18.5 6L10 18h5.2l-1.7 8L22 13.5h-5.2L18.5 6z" fill="url(#boltGradient)" className="transition-transform duration-300 group-hover:scale-105" />
            </svg>
            <span className="font-bold text-lg tracking-tight text-white">Noda<span className="text-noda-cyan">.</span></span>
          </a>

          {/* Close mobile btn */}
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-gray-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Menu Principal</div>

          <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-noda-primary/10 text-white rounded-xl border border-noda-primary/20">
            <LayoutDashboard className="w-5 h-5 text-noda-primary" />
            <span className="font-medium text-sm">Visão Geral</span>
          </Link>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <GitPullRequest className="w-5 h-5" />
            <span className="font-medium text-sm flex-1 flex justify-between items-center">
              Solicitações 
              <span className="bg-noda-primary/20 text-noda-primary text-[10px] px-2 py-0.5 rounded-full">1</span>
            </span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <Receipt className="w-5 h-5" />
            <span className="font-medium text-sm">Financeiro</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <FolderKanban className="w-5 h-5" />
            <span className="font-medium text-sm">Arquivos & Assets</span>
          </a>
        </nav>

        {/* User Profile Area */}
        <div className="p-4 border-t border-white/5">
          <div onClick={handleLogout} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center text-sm font-bold text-white shrink-0">
              AC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Acme Corp.</p>
              <p className="text-xs text-gray-400 truncate">Parceiro VIP</p>
            </div>
            <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-400" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative z-10 w-full overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-white/5 bg-noda-base/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white focus:outline-none cursor-pointer">
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white hidden sm:block">Painel do Projeto</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-noda-cyan rounded-full border border-noda-base"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-colors cursor-pointer">
              <LifeBuoy className="w-4 h-4 text-noda-cyan" />
              <span className="hidden sm:inline">Suporte Rápido</span>
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-8 pb-20">

            {/* 1. HEADER DO PROJETO */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Visão Geral</h2>
                <p className="text-noda-textMuted text-sm md:text-base">Acompanhe a engenharia, marcos de entrega e financeiro da sua aplicação.</p>
              </div>

              <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-4 shrink-0">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Previsão de Entrega (Deploy)</p>
                  <p className="text-lg font-bold text-white flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-noda-primary" /> 15 Nov, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* MAIN GRID: Timeline + Finances */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* 2. WIDGET: TIMELINE DO PROJETO (Span 2 cols) */}
              <div className="lg:col-span-2 glass-card rounded-3xl p-6 lg:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Progressão da Engenharia</h3>
                    <p className="text-sm text-gray-400">Progresso atual: ~60% concluído</p>
                  </div>

                  {/* Bônus: Link para Staging */}
                  <a href="#" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-noda-primary/20 to-noda-cyan/20 border border-noda-cyan/30 text-noda-cyan rounded-xl text-sm font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all cursor-pointer">
                    <ExternalLink className="w-4 h-4" /> Ambiente de Homologação
                  </a>
                </div>

                {/* Timeline Vertical */}
                <div className="relative pl-4 space-y-8 flex-1 mt-2">

                  {/* Phase 1: Concluído */}
                  <div className="relative flex items-start group">
                    <div className="absolute -left-4 top-2 h-full w-px bg-noda-primary/50 -z-10"></div>
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-noda-primary ring-4 ring-noda-base"></div>
                    <div className="ml-6">
                      <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                        Discovery & Arquitetura <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </h4>
                      <p className="text-xs text-gray-400">Levantamento de requisitos, diagramação de banco de dados e escopo fechado.</p>
                    </div>
                  </div>

                  {/* Phase 2: Concluído */}
                  <div className="relative flex items-start group">
                    <div className="absolute -left-4 top-2 h-full w-px bg-noda-primary/50 -z-10"></div>
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-noda-primary ring-4 ring-noda-base"></div>
                    <div className="ml-6">
                      <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                        Interface & UX/UI <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </h4>
                      <p className="text-xs text-gray-400">Design de telas aprovado no Figma. Componentização Front-End finalizada.</p>
                    </div>
                  </div>

                  {/* Phase 3: Ativo */}
                  <div className="relative flex items-start group">
                    <div className="absolute -left-4 top-2 h-full w-px bg-white/10 -z-10"></div>
                    <div className="absolute -left-[25px] top-0 w-5 h-5 rounded-full bg-noda-base border-2 border-noda-cyan flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                      <div className="w-2 h-2 bg-noda-cyan rounded-full animate-pulse"></div>
                    </div>
                    <div className="ml-6 bg-white/5 border border-noda-cyan/30 rounded-xl p-4 -mt-3 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-noda-cyan">Lógica de Servidor & APIs</h4>
                        <span className="text-[10px] uppercase font-bold text-noda-cyan bg-noda-cyan/10 px-2 py-0.5 rounded">Em Andamento</span>
                      </div>
                      <p className="text-xs text-gray-300 mb-3">Desenvolvimento das rotas de back-end, autenticação e integração com meios de pagamento.</p>

                      {/* Mini progress bar */}
                      <div className="w-full bg-black/40 rounded-full h-1.5 mb-1">
                        <div className="bg-gradient-to-r from-noda-primary to-noda-cyan h-1.5 rounded-full w-[45%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                      </div>
                      <div className="text-[10px] text-right text-gray-400 font-medium">Sprint 3/5</div>
                    </div>
                  </div>

                  {/* Phase 4: Pendente */}
                  <div className="relative flex items-start group">
                    <div className="absolute -left-4 top-2 h-full w-px bg-white/10 -z-10"></div>
                    <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-gray-600 ring-4 ring-noda-base"></div>
                    <div className="ml-6 opacity-50">
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Testes de Qualidade (QA)</h4>
                      <p className="text-xs text-gray-500">Varredura de bugs, testes de stress e revisão de segurança.</p>
                    </div>
                  </div>

                  {/* Phase 5: Pendente */}
                  <div className="relative flex items-start group">
                    <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-gray-600 ring-4 ring-noda-base"></div>
                    <div className="ml-6 opacity-50">
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">Deploy & Lançamento</h4>
                      <p className="text-xs text-gray-500">Subida para produção e treinamento da equipe operacional.</p>
                    </div>
                  </div>

                </div>

                <button className="sm:hidden mt-6 w-full flex justify-center items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-medium cursor-pointer">
                  <ExternalLink className="w-4 h-4" /> Ver Ambiente de Testes
                </button>
              </div>

              {/* Coluna da Direita (Financeiro + Contato) */}
              <div className="flex flex-col gap-6">

                {/* 3. WIDGET: FINANCEIRO */}
                <div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
                  {/* Background glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-green-500/20"></div>

                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-green-400" /> Status Financeiro
                  </h3>

                  <div className="mb-5">
                    <p className="text-xs text-gray-400 mb-1">Valor Total Negociado</p>
                    <p className="text-2xl font-bold text-white">R$ 28.500<span className="text-sm text-gray-500">,00</span></p>
                  </div>

                  <div className="bg-black/20 rounded-xl p-3 mb-5 border border-white/5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Parcelas Pagas</span>
                      <span className="text-green-400 font-semibold">2 / 3</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                      <div className="bg-green-500 h-1.5 rounded-full w-[66%] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-[10px] text-gray-500 uppercase">Próx. Vencimento</span>
                      <span className="text-xs text-white font-medium">15/09/2026</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 flex justify-center items-center gap-1.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-colors cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> NF-e
                    </button>
                    <button className="flex-1 flex justify-center items-center gap-1.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-colors cursor-pointer">
                      <FileText className="w-3.5 h-3.5" /> Contrato
                    </button>
                  </div>
                </div>

                {/* 4. WIDGET: SUPORTE & REUNIÃO */}
                <div className="glass-card rounded-3xl p-6 border-t border-indigo-500/30">
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" /> Engenharia & Suporte
                  </h3>

                  {/* Dev Info */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-noda-primary/20 border border-noda-primary/40 flex items-center justify-center shrink-0">
                      <Code2 className="w-5 h-5 text-noda-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Rafael N.</p>
                      <p className="text-[10px] text-noda-cyan uppercase tracking-wider font-semibold">Tech Lead do Projeto</p>
                    </div>
                    <a href="#" className="ml-auto p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 transition-colors cursor-pointer" title="WhatsApp Direto">
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Action: Schedule Meeting */}
                  <button onClick={() => setActiveModal('meeting-modal')} className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 border border-white/10 rounded-xl transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <Video className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white">Agendar Alinhamento</p>
                        <p className="text-[10px] text-gray-400">Reunião técnica rápida (15-30m)</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* 5. WIDGET: MUDANÇA DE ESCOPO (Scope Change) */}
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-yellow-500" /> Solicitações e Mudanças de Escopo
                  </h3>
                  <p className="text-sm text-gray-400">Precisou alterar a rota? Centralize novos pedidos estruturais aqui.</p>
                </div>
                <button onClick={() => setActiveModal('scope-modal')} className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-noda-base border border-white/20 hover:border-noda-primary/50 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer">
                  <Plus className="w-4 h-4" /> Nova Solicitação
                </button>
              </div>

              {/* Tabela / Lista de requisições */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider">
                      <th className="py-3 px-4 font-medium">Título da Mudança</th>
                      <th className="py-3 px-4 font-medium">Data</th>
                      <th className="py-3 px-4 font-medium">Status</th>
                      <th className="py-3 px-4 font-medium text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 font-medium text-white">Integração RD Station (Extra)</td>
                      <td className="py-4 px-4 text-gray-400">02 Nov, 2026</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase">
                          <ClockIcon className="w-3 h-3" /> Em Análise
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button className="text-gray-400 hover:text-white transition-colors text-xs font-medium cursor-pointer">Detalhes</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* UI Overlay Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          
          {/* MODAL: Agendar Reunião */}
          {activeModal === 'meeting-modal' && (
            <div className="glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl relative">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold text-white">Agendar Alinhamento</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-gray-400 mb-6">Selecione o motivo para direcionarmos ao membro correto da equipe de engenharia.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Redirecionando para Calendário...'); closeModal(); }}>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Motivo Principal</label>
                  <select className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500">
                    <option>Apresentação de Sprint / Entregável</option>
                    <option>Dúvida Técnica Específica</option>
                    <option>Alinhamento de Regra de Negócio</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-500 to-noda-primary hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] text-white font-semibold rounded-xl text-sm transition-all mt-4 cursor-pointer">
                  Prosseguir para Calendário <ExternalLink className="inline w-3 h-3 ml-1" />
                </button>
              </form>
            </div>
          )}

          {/* MODAL: Solicitação de Escopo */}
          {activeModal === 'scope-modal' && (
            <div className="glass-card w-full max-w-lg rounded-2xl p-6 flex flex-col shadow-2xl relative">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><GitBranch className="w-5 h-5 text-noda-primary" /> Nova Solicitação</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-gray-400 mb-6">Toda mudança fora do escopo inicial passa por uma breve análise de impacto e orçamento pelos engenheiros.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Solicitação enviada para análise técnica!'); closeModal(); }}>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Título da Necessidade</label>
                  <input type="text" required className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-noda-primary" placeholder="Ex: Criar módulo de relatórios em PDF" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Descrição Detalhada</label>
                  <textarea rows="4" required className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-noda-primary resize-none" placeholder="Explique o que precisa ser feito e a regra de negócio envolvida..."></textarea>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={closeModal} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer">Cancelar</button>
                  <button type="submit" className="px-5 py-2.5 bg-noda-primary hover:bg-blue-500 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer">Enviar para Análise</button>
                </div>
              </form>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
