import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ProjectMeetings({ meetings, setActiveModal }) {
  const count = meetings.length;

  return (
    <div className="glass-card rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-400" /> Agendamentos
        </h3>
      </div>
      
      <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
          <span className="text-xl font-bold">{count}</span>
        </div>
        <p className="text-sm font-bold text-white mb-4">Reuniões Agendadas</p>
        <button 
          onClick={() => setActiveModal('meetingsList')} 
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer w-full justify-center"
        >
          Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
