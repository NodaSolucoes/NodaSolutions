import React from 'react';
import { Receipt, ArrowRight } from 'lucide-react';

export default function ProjectFinance({ setActiveModal }) {
  return (
    <div className="glass-card rounded-3xl p-6 border-t-2 border-t-white/10">
      <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
        <Receipt className="w-5 h-5 text-gray-300" /> Controle Financeiro
      </h3>

      <div className="space-y-3 mb-5">
        <div className="bg-black/40 p-3 rounded-xl border border-white/5 flex justify-between items-center">
          <span className="text-xs text-gray-400">Contrato Base</span>
          <span className="text-sm font-bold text-white">R$ 27.000,00</span>
        </div>
        <div className="bg-black/40 p-3 rounded-xl border border-white/5 flex justify-between items-center">
          <span className="text-xs text-gray-400">Aditivos Ativos</span>
          <span className="text-sm font-bold text-purple-400">+ R$ 1.500,00</span>
        </div>
      </div>

      <button 
        onClick={() => setActiveModal('financialDetails')} 
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-gray-100 text-black text-xs font-bold rounded-xl transition-all cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
      >
        Acessar Painel Financeiro <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
