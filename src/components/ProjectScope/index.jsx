import React from 'react';
import { GitBranch, Plus, Check } from 'lucide-react';

export default function ProjectScope({ aditivos, setActiveModal, approveScope }) {
  return (
    <div className="glass-card rounded-3xl p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-purple-400" /> Gestão de Escopo & Aditivos
          </h3>
        </div>
        <button onClick={() => setActiveModal('aditivo')} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
          <Plus className="w-3.5 h-3.5" /> Lançar Aditivo
        </button>
      </div>

      <div className="space-y-3">
        {aditivos.map(a => (
          <div key={a.id} className={`p-4 rounded-2xl bg-white/5 border flex flex-col md:flex-row md:items-center justify-between gap-4 ${a.status === 'Aprovado' ? 'border-green-500/30' : 'border-purple-500/30'}`}>
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.status === 'Aprovado' ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`}></div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-sm">{a.title}</p>
                  {a.status === 'Em Análise' && (
                    <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-bold">Em Análise</span>
                  )}
                </div>
                {a.desc && <p className="text-xs text-gray-400 mt-1">{a.desc}</p>}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold mr-2 ${a.status === 'Aprovado' ? 'text-green-400' : 'text-red-400'}`}>+ R$ {a.val}</span>
              {a.status === 'Em Análise' ? (
                <>
                  <button onClick={() => approveScope(a.id)} className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Aprovar</button>
                  <button className="px-3 py-1.5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 text-xs font-medium rounded-lg transition-colors cursor-pointer">Recusar</button>
                </>
              ) : (
                <span className="text-xs font-bold text-green-400 flex items-center gap-1"><Check className="w-3 h-3" /> Aprovado</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
