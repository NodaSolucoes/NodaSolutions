import React, { useState, useEffect } from 'react';
import { PlusCircle, Calendar, X, Clock, Plus, User, Mail, MessageCircle, AlertTriangle, Settings, ArrowRight, Trophy, Link as LinkIcon, ExternalLink, Trash2, PauseCircle, FileText, ShieldAlert } from 'lucide-react';

export default function ProjectModals({ activeModal, closeModal, onAddAditivo, onAddMeeting, advanceStage, revertStage, completeProject, targetDate, setTargetDate, meetings, setActiveModal, triggerToast }) {
  const [newAditivo, setNewAditivo] = useState({ title: '', val: '' });
  const [newMeeting, setNewMeeting] = useState({ title: '', date: '', time: '', link: '' });
  const [editingDate, setEditingDate] = useState(targetDate || '');
  
  // Sync editing date when target date changes
  useEffect(() => {
    setEditingDate(targetDate);
  }, [targetDate]);

  if (!activeModal) return null;

  const submitAditivoForm = (e) => {
    e.preventDefault();
    onAddAditivo(newAditivo);
    setNewAditivo({ title: '', val: '' });
  };

  const submitMeetingForm = (e) => {
    e.preventDefault();
    onAddMeeting(newMeeting);
    setNewMeeting({ title: '', date: '', time: '', link: '' });
  };

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    triggerToast('Link copiado para a área de transferência!');
  };

  const handleSaveDeadline = () => {
    setTargetDate(editingDate);
    closeModal();
    triggerToast('Prazo do projeto atualizado com sucesso!');
  };

  const calculateDaysDiff = () => {
    if (!targetDate || !editingDate) return 0;
    const current = new Date(targetDate);
    const updated = new Date(editingDate);
    const diffTime = updated - current;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const getDaysLeft = () => {
    if (!targetDate) return 0;
    const today = new Date();
    const current = new Date(targetDate);
    const diffTime = current - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      
      {/* Modal Client Info */}
      {activeModal === 'clientInfo' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-noda-cyan" /> Informações do Cliente
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Nome Fantasia</p>
              <p className="text-sm font-bold text-white">Acme Corp LTDA</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">E-mail Principal</p>
                <p className="text-sm font-bold text-white">contato@acmecorp.com</p>
              </div>
              <a href="mailto:contato@acmecorp.com" className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">WhatsApp (Responsável)</p>
                <p className="text-sm font-bold text-white">+55 (11) 99999-9999</p>
              </div>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="pt-6 mt-4 border-t border-white/10">
            <button onClick={closeModal} className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal Revert Stage */}
      {activeModal === 'revertStage' && (
        <div className="relative glass-card w-full max-w-sm rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Voltar Etapa</h3>
            <p className="text-xs text-gray-400 mt-2">
              Tem certeza que deseja retroceder a etapa deste projeto? A porcentagem de progresso será reduzida.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full">
            <button onClick={closeModal} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
              Cancelar
            </button>
            <button onClick={revertStage} className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-colors cursor-pointer">
              Sim, Voltar
            </button>
          </div>
        </div>
      )}

      {/* Modal Advance Stage */}
      {activeModal === 'advanceStage' && (
        <div className="relative glass-card w-full max-w-sm rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-noda-cyan/20 text-noda-cyan flex items-center justify-center mb-4">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Avançar Etapa</h3>
            <p className="text-xs text-gray-400 mt-2">
              Você está prestes a avançar a etapa deste projeto. O cliente será notificado.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full">
            <button onClick={closeModal} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
              Cancelar
            </button>
            <button onClick={advanceStage} className="flex-1 py-2.5 bg-noda-cyan text-noda-base text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-colors cursor-pointer">
              Sim, Avançar
            </button>
          </div>
        </div>
      )}

      {/* Modal Finish Project */}
      {activeModal === 'finishProject' && (
        <div className="relative glass-card w-full max-w-sm rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10 border-t-2 border-t-green-500">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Concluir Projeto?</h3>
            <p className="text-sm text-gray-400 mt-2">
              Você está finalizando a última etapa deste projeto! Todas as funcionalidades foram entregues. Deseja marcar o projeto como concluído?
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full">
            <button onClick={closeModal} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
              Cancelar
            </button>
            <button onClick={completeProject} className="flex-1 py-2.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-colors cursor-pointer">
              Sim, Concluir!
            </button>
          </div>
        </div>
      )}

      {/* Modal Edit Deadline */}
      {activeModal === 'editDeadline' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-400" /> Alterar Prazo Alvo
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Prazo Atual</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-white">{new Date(targetDate).toLocaleDateString('pt-BR')}</p>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                  {getDaysLeft()} dias restantes
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Novo Prazo</label>
              <input 
                type="date" 
                value={editingDate} 
                onChange={(e) => setEditingDate(e.target.value)}
                className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-white focus:outline-none focus:border-indigo-500 cursor-pointer" 
                style={{ colorScheme: 'dark' }} 
              />
            </div>
            
            {editingDate && editingDate !== targetDate && (
              <div className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-bold ${calculateDaysDiff() > 0 ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                {calculateDaysDiff() > 0 ? (
                  <>Você ganhará {calculateDaysDiff()} dias no prazo final.</>
                ) : (
                  <>Você perderá {Math.abs(calculateDaysDiff())} dias do prazo final.</>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 w-full border-t border-white/10 pt-4">
            <button onClick={closeModal} className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
              Cancelar
            </button>
            <button onClick={handleSaveDeadline} className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-colors cursor-pointer">
              Salvar Prazo
            </button>
          </div>
        </div>
      )}

      {/* Modal Financial Details Placeholder */}
      {activeModal === 'financialDetails' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              Detalhes Financeiros
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          <p className="text-sm text-gray-400 mb-6">As parcelas e notas detalhadas do financeiro do projeto seriam exibidas aqui.</p>
          <button onClick={closeModal} className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
            Voltar
          </button>
        </div>
      )}
      
      {/* Modal Project Settings */}
      {activeModal === 'projectSettings' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-400" /> Configurações do Projeto
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wider">Ações</p>
              <button onClick={() => { closeModal(); triggerToast('Acesso ao cadastro do cliente (MOCK).'); }} className="w-full flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all cursor-pointer mb-3">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-indigo-400" />
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">Atualizar Cliente</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </button>

              <a href="#" target="_blank" rel="noreferrer" onClick={() => triggerToast('Abrindo pasta de contratos do projeto.')} className="w-full flex items-center justify-between p-3.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-xl transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <div className="text-left">
                    <p className="text-sm font-bold text-indigo-400">Documentação Contratual</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[10px] uppercase font-bold text-gray-500 mb-2 tracking-wider">Avançado</p>
              <button onClick={() => triggerToast('Danger Zone acessada.')} className="w-full flex items-center justify-center gap-2 p-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all cursor-pointer shadow-inner">
                <ShieldAlert className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-gray-300">Acessar Danger Zone</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal Aditivo */}
      {activeModal === 'aditivo' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-purple-400" /> Novo Aditivo (Escopo)
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          <form onSubmit={submitAditivoForm} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Título / Solicitação</label>
              <input 
                type="text" required
                value={newAditivo.title} onChange={e => setNewAditivo({...newAditivo, title: e.target.value})}
                className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500" 
                placeholder="Ex: Módulo PDF" 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Valor do Aditivo (R$)</label>
              <input 
                type="number" required
                value={newAditivo.val} onChange={e => setNewAditivo({...newAditivo, val: e.target.value})}
                className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-red-400 focus:outline-none focus:border-purple-500" 
                placeholder="1200" 
              />
            </div>
            {newAditivo.val && (
              <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-xl mt-4 text-center">
                <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Novo Total do Contrato</p>
                <p className="text-sm font-bold text-white">
                  R$ {(27000 + (parseFloat(newAditivo.val) || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            )}
            <div className="pt-4 flex justify-end gap-3 border-t border-white/10 mt-4">
              <button type="button" onClick={closeModal} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-medium rounded-xl cursor-pointer">Cancelar</button>
              <button type="submit" className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer transition-colors">Adicionar ao Contrato</button>
            </div>
          </form>
        </div>
      )}

      {/* Modal Lista de Reuniões */}
      {activeModal === 'meetingsList' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" /> Reuniões Agendadas
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          
          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto custom-scrollbar pr-2">
            {meetings.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">Nenhuma reunião agendada.</p>
            ) : (
              meetings.map(m => (
                <div key={m.id} className="p-4 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-3 group hover:border-indigo-500/30 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-white mb-1">{m.title}</p>
                      <div className="flex items-center gap-4">
                        {m.date && <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3 text-gray-500" /> {m.date}</p>}
                        {m.time && <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3 text-gray-500" /> {m.time}</p>}
                      </div>
                    </div>
                  </div>
                  {m.link && (
                    <div className="flex items-center gap-2 mt-2 pt-3 border-t border-white/5">
                      <button onClick={() => handleCopyLink(m.link)} className="px-3 py-2 flex-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-[10px] font-bold text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                        <LinkIcon className="w-3.5 h-3.5 text-gray-400" /> Copiar Link
                      </button>
                      <a href={m.link} target="_blank" rel="noreferrer" className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-[10px] font-bold text-white transition-colors flex items-center justify-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5" /> Abrir Sala
                      </a>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => setActiveModal('meeting')} 
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-colors cursor-pointer flex justify-center items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Agendar Nova Reunião
            </button>
            <button 
              onClick={() => triggerToast('Solicitação de reunião enviada ao cliente.')} 
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex justify-center items-center gap-2"
            >
              Solicitar Reunião
            </button>
          </div>
        </div>
      )}

      {/* Modal Agendar Reunião */}
      {activeModal === 'meeting' && (
        <div className="relative glass-card w-full max-w-md rounded-2xl p-6 flex flex-col shadow-2xl animate-fade-in border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><Calendar className="w-5 h-5 text-indigo-400" /> Agendar Reunião</h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
          </div>
          <form onSubmit={submitMeetingForm} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Pauta / Título</label>
              <input 
                type="text" required 
                value={newMeeting.title} onChange={e => setNewMeeting({...newMeeting, title: e.target.value})}
                className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Ex: Demos Sprint 4" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Data</label>
                <input 
                  type="date" required 
                  value={newMeeting.date} onChange={e => setNewMeeting({...newMeeting, date: e.target.value})}
                  className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                  style={{ colorScheme: 'dark' }} 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Horário</label>
                <input 
                  type="time" required 
                  value={newMeeting.time} onChange={e => setNewMeeting({...newMeeting, time: e.target.value})}
                  className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                  style={{ colorScheme: 'dark' }} 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Link (Meet/Zoom)</label>
              <input 
                type="url" 
                value={newMeeting.link} onChange={e => setNewMeeting({...newMeeting, link: e.target.value})}
                className="w-full bg-noda-base border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500" 
                placeholder="https://meet..." 
              />
            </div>
            <div className="pt-4 flex justify-end gap-3 border-t border-white/10 mt-4">
              <button type="button" onClick={() => setActiveModal('meetingsList')} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs rounded-xl cursor-pointer">Cancelar</button>
              <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-colors cursor-pointer">Confirmar Reunião</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
