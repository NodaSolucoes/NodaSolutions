import React from 'react';
import { Clock, AlertCircle, CheckCircle, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  // Determine styles based on project type
  let borderColor = '';
  let glowColor = '';
  let iconBg = '';
  let iconGradient = '';
  let badgeBg = '';
  let badgeBorder = '';
  let badgeText = '';
  let IconElement = Clock;
  let progressBg = '';

  switch (project.type) {
    case 'critical':
      borderColor = 'border-t-red-500';
      glowColor = 'bg-red-500/10';
      iconBg = 'bg-red-500/10';
      iconGradient = 'from-gray-700 to-gray-900 border-gray-600';
      badgeBg = 'bg-red-500/10';
      badgeBorder = 'border-red-500/20';
      badgeText = 'text-red-400';
      IconElement = AlertCircle;
      progressBg = 'bg-red-500';
      break;
    case 'warning':
      borderColor = 'border-t-yellow-500';
      glowColor = '';
      iconGradient = 'from-blue-700 to-blue-900 border-blue-600';
      badgeBg = 'bg-yellow-500/10';
      badgeBorder = 'border-yellow-500/20';
      badgeText = 'text-yellow-500';
      IconElement = Clock;
      progressBg = 'bg-yellow-500';
      break;
    case 'ontrack':
      borderColor = 'border-t-green-500';
      glowColor = '';
      iconGradient = 'from-green-700 to-green-900 border-green-600';
      badgeBg = 'bg-green-500/10';
      badgeBorder = 'border-green-500/20';
      badgeText = 'text-green-400';
      IconElement = CheckCircle;
      progressBg = 'bg-green-500';
      break;
    case 'retainer':
      borderColor = 'border-t-indigo-500';
      glowColor = '';
      iconGradient = 'from-indigo-700 to-indigo-900 border-indigo-600';
      badgeBg = 'bg-indigo-500/10';
      badgeBorder = 'border-indigo-500/20';
      badgeText = 'text-indigo-400';
      IconElement = InfinityIcon;
      progressBg = 'bg-indigo-500';
      break;
    default:
      break;
  }

  // Responsavel badge styles
  let respBadge = '';
  if (project.responsavelId === 'Willyam') {
    respBadge = 'bg-purple-500/20 text-purple-400 border-purple-500/30';
  } else if (project.responsavelId === 'Augusto') {
    respBadge = 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
  } else if (project.responsavelId === 'Daniel') {
    respBadge = 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
  }

  return (
    <div className={`project-card glass-card rounded-3xl p-6 flex flex-col relative overflow-hidden group border-t-2 ${borderColor}`}>
      {/* Brilho vermelho de alerta (only for critical) */}
      {project.type === 'critical' && (
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-[30px] pointer-events-none"></div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br border flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-lg ${iconGradient}`}>
            {project.clientInitials}
          </div>
          <div>
            <h3 className="font-bold text-white text-base leading-tight truncate max-w-[150px] sm:max-w-full">{project.name}</h3>
            <p className="text-xs text-gray-400">{project.client}</p>
          </div>
        </div>
        {/* Responsável */}
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 ${respBadge}`} title={project.responsavelName}>
          {project.responsavelInitials}
        </div>
      </div>

      {/* Status Badge (Deadline) */}
      <div className={`${badgeBg} border ${badgeBorder} rounded-lg p-2.5 mb-5 flex items-center justify-between`}>
        <div className={`flex items-center gap-2 ${badgeText}`}>
          <IconElement className={`w-4 h-4 ${project.type === 'critical' ? 'animate-pulse' : ''}`} />
          <span className="text-xs font-bold">{project.deadlineText}</span>
        </div>
        <span className="text-[10px] text-gray-400">{project.deadlineDate}</span>
      </div>

      <div className="flex-1"></div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2 w-full max-w-[130px]">
          <span className="text-[10px] font-bold text-gray-400 w-7">{project.progress}%</span>
          <div className="flex-1 bg-white/10 rounded-full h-1.5">
            <div className={`${progressBg} h-1.5 rounded-full`} style={{ width: `${project.progress}%` }}></div>
          </div>
        </div>
        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-colors cursor-pointer">
          Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
