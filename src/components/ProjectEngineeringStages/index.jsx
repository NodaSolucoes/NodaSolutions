import React from 'react';
import { GitCommit, Check, Code2, PauseCircle } from 'lucide-react';

export default function ProjectEngineeringStages({ currentActiveStage, advanceStage, projectStagesData, setActiveModal, projectStatus }) {
  return (
    <div className="glass-card rounded-3xl p-6 lg:p-8 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-noda-cyan" /> Etapas da Engenharia
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">Avance as etapas para atualizar o portal do cliente.</p>
        </div>
        
        <div className="flex items-center gap-3 p-1.5 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md shrink-0">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            projectStatus === 'completed' ? 'bg-green-500/20 text-green-400' :
            projectStatus === 'paused' ? 'bg-orange-500/20 text-orange-400' :
            'bg-noda-cyan/20 text-noda-cyan'
          }`}>
            {projectStatus === 'completed' ? <Check className="w-4 h-4" /> :
             projectStatus === 'paused' ? <PauseCircle className="w-4 h-4" /> :
             <div className="w-2.5 h-2.5 rounded-full bg-noda-cyan animate-pulse"></div>}
          </div>
          <div className="pr-3 text-left">
            <p className="text-[9px] uppercase font-bold text-gray-500 leading-none mb-1">Status</p>
            <p className={`text-xs font-bold leading-none ${
              projectStatus === 'completed' ? 'text-green-400' :
              projectStatus === 'paused' ? 'text-orange-400' :
              'text-white'
            }`}>
              {projectStatus === 'completed' ? 'Concluído' :
               projectStatus === 'paused' ? 'Pausado' :
               'Em Andamento'}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {projectStagesData.map(stage => {
          const isPast = stage.id < currentActiveStage;
          const isActive = stage.id === currentActiveStage;

          if (isPast) {
            return (
              <div key={stage.id} className="p-4 rounded-2xl border transition-all flex items-center justify-between bg-white/5 border-white/10 opacity-70">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div><p className="text-sm font-bold text-white">{stage.title}</p></div>
                </div>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-1 rounded">Concluído</span>
              </div>
            );
          } else if (isActive) {
            return (
              <div key={stage.id} className="p-4 rounded-2xl border transition-all flex flex-col sm:flex-row gap-4 sm:items-center justify-between bg-noda-cyan/10 border-noda-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-noda-cyan/20 text-noda-cyan border border-noda-cyan/50 flex items-center justify-center animate-pulse shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-noda-cyan">{stage.title}</p>
                    <p className="text-[10px] text-gray-300 mt-0.5">{stage.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {currentActiveStage > 1 && projectStatus !== 'completed' && (
                    <button onClick={() => setActiveModal('revertStage')} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap">
                      Voltar Etapa
                    </button>
                  )}
                  {projectStatus !== 'completed' && (
                    <button 
                      onClick={() => setActiveModal(currentActiveStage === 5 ? 'finishProject' : 'advanceStage')} 
                      className="px-3 py-1.5 bg-noda-cyan text-noda-base text-xs font-bold rounded-lg hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                    >
                      {currentActiveStage === 5 ? 'Concluir Projeto' : 'Avançar Etapa'}
                    </button>
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div key={stage.id} className="p-4 rounded-2xl border transition-all flex items-center justify-between bg-black/20 border-white/5 opacity-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-800 text-gray-500 flex items-center justify-center font-bold text-xs">{stage.id}</div>
                  <div><p className="text-sm font-bold text-gray-400">{stage.title}</p></div>
                </div>
                <span className="text-[10px] text-gray-500">Pendente</span>
              </div>
            );
          }
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
        <div>
          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Staging / Homologação</label>
          <input type="url" defaultValue="https://staging.acmecorp.com" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-noda-cyan" />
        </div>
        <div>
          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Figma Design</label>
          <input type="url" defaultValue="https://figma.com/file/acme-v1" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-noda-cyan" />
        </div>
        <div>
          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Repositório (Privado)</label>
          <input type="url" defaultValue="https://github.com/noda/acme" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-noda-cyan" />
        </div>
      </div>
    </div>
  );
}
