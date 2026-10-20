import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ArrowLeft, Eye, Save, Settings } from 'lucide-react';

export default function ProjectHeader({ projectId, setSidebarOpen, onSave, setActiveModal }) {
  return (
    <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-white/5 bg-noda-base/50 backdrop-blur-md shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <Link to="/admin" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer" title="Voltar para Projetos">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base font-bold text-white hidden sm:block">
              Painel do Projeto <span className="text-xs text-gray-500 font-mono ml-2">[{projectId || 'MOCK-ID'}]</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/dashboard" target="_blank" className="px-3.5 py-2 bg-noda-cyan/10 hover:bg-noda-cyan/20 border border-noda-cyan/30 text-noda-cyan rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer">
          <Eye className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Ver como Cliente</span>
        </Link>
        <button onClick={onSave} className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
          <Save className="w-3.5 h-3.5" /> Salvar
        </button>
        <button 
          onClick={() => setActiveModal('projectSettings')} 
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors cursor-pointer" 
          title="Configurações do Projeto"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
