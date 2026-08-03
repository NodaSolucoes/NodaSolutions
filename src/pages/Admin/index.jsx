import React, { useState, useEffect } from 'react';
import { Plus, Search, CheckCircle } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

import AdminSidebar from '../../components/AdminSidebar';
import AdminTopbar from '../../components/AdminTopbar';
import ProjectCard from '../../components/ProjectCard';

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Filters state
  const [search, setSearch] = useState('');
  const [responsavelFilter, setResponsavelFilter] = useState('all');
  const [prazoFilter, setPrazoFilter] = useState('all');
  const [colaboradores, setColaboradores] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // 1. Fetch colaboradores ativos
        const { data: colabsData, error: colabsError } = await supabase
          .from('colaboradores')
          .select('*')
          .eq('status', 'Ativo');

        if (colabsError) {
          console.error("Erro ao buscar colaboradores:", colabsError.message);
        } else if (colabsData) {
          setColaboradores(colabsData);
        }

        // 2. Fetch projetos com joins relacionais (Clientes e Colaboradores)
        let { data: projData, error: projError } = await supabase
          .from('projetos')
          .select(`
          *,
          cliente:clientes(*),
          responsavel:colaboradores(*)
        `);

        console.log("Projetos retornados do Supabase:", projData);

        // Fallback em caso de erro na query com apelidos (alias)
        if (projError) {
          console.warn("Falha no fetch com apelido, tentando busca tradicional sem alias...", projError);
          const fallback = await supabase
            .from('projetos')
            .select('*, clientes(*), colaboradores(*)');

          if (fallback.error) throw fallback.error;
          if (fallback.data) projData = fallback.data;
        }

        // 3. Mapeamento e tratamento das propriedades
        if (projData) {
          const mappedProjetos = projData.map(proj => {
            // Trata o objeto do cliente caso venha dentro de Array ou Objeto direto
            let clientObj = proj.cliente || proj.clientes;
            if (Array.isArray(clientObj)) clientObj = clientObj[0];

            // Trata o objeto do responsável
            let respObj = proj.responsavel || proj.colaboradores;
            if (Array.isArray(respObj)) respObj = respObj[0];

            // Busca o nome do cliente usando a coluna 'nome_cliente' criada no banco
            const clientName = clientObj?.nome_cliente || clientObj?.nome || 'Cliente';
            const clientInitials = clientName
              .split(' ')
              .filter(Boolean)
              .map(n => n[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();

            // Busca o nome e iniciais do colaborador responsável
            const respName = respObj?.nome || 'Sem Responsável';
            const respInitials = respName
              .split(' ')
              .filter(Boolean)
              .map(n => n[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();

            // Lógica de cálculo do prazo
            let type = 'retainer';
            let prazoId = 'retainer';
            let deadlineText = 'Sem Prazo';
            let deadlineDateStr = '-';

            if (proj.prazo_entrega) {
              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const [year, month, day] = proj.prazo_entrega.split('T')[0].split('-');
              const deadline = new Date(Number(year), Number(month) - 1, Number(day));

              const diffTime = deadline - today;
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              deadlineDateStr = deadline
                .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
                .replace('.', '');

              if (diffDays <= 3) {
                type = 'critical';
                prazoId = 'critical';
                deadlineText = diffDays < 0
                  ? `Atrasado ${Math.abs(diffDays)} dia(s)`
                  : `Entrega em ${diffDays} dia(s)`;
              } else if (diffDays <= 7) {
                type = 'warning';
                prazoId = 'warning';
                deadlineText = `Entrega em ${diffDays} dias`;
              } else {
                type = 'ontrack';
                prazoId = 'ontrack';
                deadlineText = `No Prazo (Faltam ${diffDays}d)`;
              }
            }

            // Retorna o objeto original do banco (...proj) + propriedades formatadas para a UI
            return {
              ...proj,
              id: proj.id,
              name: proj.nome || 'Projeto',
              client: clientName,
              clientInitials,
              responsavelName: respName,
              responsavelInitials: respInitials,
              responsavelId: proj.responsavel_id,
              prazoId,
              deadlineText,
              deadlineDate: deadlineDateStr,
              progress: proj.porcentagem_progresso || 0,
              type
            };
          });

          setProjetos(mappedProjetos);
        }
      } catch (err) {
        console.error('Erro ao buscar dados do Supabase:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const filteredProjects = projetos.filter((project) => {
    const matchSearch = project.name.toLowerCase().includes(search.toLowerCase()) || project.client.toLowerCase().includes(search.toLowerCase());
    const matchResponsavel = responsavelFilter === 'all' || project.responsavelId === responsavelFilter;
    const matchPrazo = prazoFilter === 'all' || project.prazoId === prazoFilter;

    return matchSearch && matchResponsavel && matchPrazo;
  });

  return (
    <div className="antialiased selection:bg-indigo-500/30 selection:text-white h-screen flex overflow-hidden">
      {/* Background Animations */}
      <div className="bg-grid"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-noda-primary/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob animation-delay-2000"></div>

      {/* Sidebar Navigation (Admin Mode) */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative z-10 w-full overflow-hidden">

        {/* Topbar */}
        <AdminTopbar setSidebarOpen={setSidebarOpen} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-8 pb-20">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Projetos Ativos</h2>
                <p className="text-noda-textMuted text-sm md:text-base">Monitore prazos, altere fases e gerencie responsáveis pela engenharia.</p>
              </div>

              {/* Botão Novo Projeto */}
              <button onClick={() => triggerToast('Funcionalidade em desenvolvimento!')} className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-white rounded-xl text-sm font-bold transition-all cursor-pointer">
                <Plus className="w-5 h-5" /> Novo Projeto
              </button>
            </div>

            {/* Filters Toolbar */}
            <div className="glass-card p-4 lg:p-5 border-b border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl">
              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Buscar projeto ou cliente..."
                />
              </div>

              {/* Filter Selects */}
              <div className="flex gap-3 w-full sm:w-auto overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
                <select
                  value={responsavelFilter}
                  onChange={(e) => setResponsavelFilter(e.target.value)}
                  className="custom-select w-full sm:w-auto bg-white/5 border border-white/10 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="all">Todos os Responsáveis</option>
                  {colaboradores.map(colab => {
                    const colabName = colab.nome || colab.name;
                    return (
                      <option key={colab.id} value={colab.id}>
                        {colabName}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={prazoFilter}
                  onChange={(e) => setPrazoFilter(e.target.value)}
                  className="custom-select w-full sm:w-auto bg-white/5 border border-white/10 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="all">Status do Prazo</option>
                  <option value="critical">Críticos (≤ 3 dias)</option>
                  <option value="warning">Atenção (≤ 7 dias)</option>
                  <option value="ontrack">No Prazo (&gt; 7 dias)</option>
                </select>
              </div>
            </div>

            {/* Projects Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gray-400">Nenhum projeto encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Toast Floating Notification */}
      <div className={`fixed bottom-6 right-6 z-50 bg-gray-900 border border-indigo-500/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 pointer-events-none ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}
