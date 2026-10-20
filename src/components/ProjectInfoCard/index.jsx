import React from 'react';
import { User, Settings } from 'lucide-react';

export default function ProjectInfoCard({ progress, setProgress, targetDate, setActiveModal }) {
  return (
    <div className="glass-card rounded-3xl p-6 lg:p-8 relative overflow-hidden border-t-2 border-t-noda-cyan">
      <div className="absolute top-0 right-0 w-64 h-64 bg-noda-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-500/40 flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-xl">
            AC
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white">Sistema Gestor Operacional</h2>
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              <p className="text-sm text-gray-400">Cliente: <strong className="text-white">Acme Corp LTDA</strong></p>
              <button 
                onClick={() => setActiveModal('clientInfo')} 
                className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] uppercase font-bold text-noda-cyan transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <User className="w-3 h-3" /> Ver Informações
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Tech Lead</p>
            <select className="custom-select bg-black/40 border border-white/10 rounded-lg px-2.5 text-xs font-bold text-indigo-400 focus:outline-none focus:border-indigo-500 cursor-pointer w-full h-[34px]">
              <option value="Augusto">Augusto Silva</option>
              <option value="Nicolas">Nicolas Lima</option>
            </select>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Progresso</p>
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-2.5 h-[34px]">
              <span className="text-xs font-bold text-noda-cyan">{progress}</span>
              <span className="text-xs text-gray-400">%</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Prazo Alvo</p>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                value={targetDate}
                readOnly
                className="bg-black/40 border border-white/10 rounded-lg px-2.5 text-xs font-bold text-white focus:outline-none w-full h-[34px] cursor-default" 
                style={{ colorScheme: 'dark' }} 
              />
              <button 
                onClick={() => setActiveModal('editDeadline')} 
                className="h-[34px] w-[34px] flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Editar Prazo"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Total (R$)</p>
            <div className="flex items-center h-[34px]">
              <p className="text-sm font-extrabold text-white">R$ 28.500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
