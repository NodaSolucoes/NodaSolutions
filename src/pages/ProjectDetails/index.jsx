import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';

// Novas importações dos componentes
import ProjectHeader from '../../components/ProjectHeader';
import ProjectInfoCard from '../../components/ProjectInfoCard';
import ProjectEngineeringStages from '../../components/ProjectEngineeringStages';
import ProjectScope from '../../components/ProjectScope';
import ProjectMeetings from '../../components/ProjectMeetings';
import ProjectFinance from '../../components/ProjectFinance';
import ProjectModals from '../../components/ProjectModals';

export default function ProjectDetails() {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  // Mock State
  const [currentActiveStage, setCurrentActiveStage] = useState(3);
  const [progress, setProgress] = useState(60);
  const [aditivos, setAditivos] = useState([
    { id: 1, title: 'Integração RD Station', val: '1.500', status: 'Em Análise', desc: 'Cliente solicitou disparo de leads pro CRM.' }
  ]);
  const [meetings, setMeetings] = useState([
    { id: 1, title: 'Apresentação Fase 3', date: '2026-08-15', time: '14:00', link: 'https://meet.google.com/abc-defg-hij' }
  ]);
  const [targetDate, setTargetDate] = useState('2026-11-15');
  const [projectStatus, setProjectStatus] = useState('active');

  const projectStagesData = [
    { id: 1, title: "1. Discovery & Arquitetura", desc: "Levantamento de requisitos e DB." },
    { id: 2, title: "2. Interface & UX/UI Design", desc: "Design Figma e componentes Front-End." },
    { id: 3, title: "3. Lógica de Servidor & APIs", desc: "Rotas, Auth e integrações (Pagar.me)." },
    { id: 4, title: "4. Teste de Qualidade (QA)", desc: "Varredura de bugs e segurança." },
    { id: 5, title: "5. Deploy & Lançamento", desc: "Subida para produção." }
  ];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const advanceStage = () => {
    if (currentActiveStage < 5) {
      const nextStage = currentActiveStage + 1;
      setCurrentActiveStage(nextStage);
      setProgress(nextStage * 20);
      setActiveModal(null);
      triggerToast(`Projeto avançado para a Etapa ${nextStage}! O cliente será notificado.`);
    }
  };

  const completeProject = () => {
    setProjectStatus('completed');
    setProgress(100);
    setActiveModal(null);
    triggerToast('Projeto concluído com sucesso!');
  };

  const revertStage = () => {
    if (currentActiveStage > 1) {
      const prevStage = currentActiveStage - 1;
      setCurrentActiveStage(prevStage);
      setProgress(prevStage * 20);
      setActiveModal(null);
      triggerToast(`Projeto retornado para a Etapa ${prevStage}.`);
    }
  };

  const approveScope = (id) => {
    setAditivos(aditivos.map(a => a.id === id ? { ...a, status: 'Aprovado' } : a));
    triggerToast('Escopo aprovado! O valor foi adicionado ao contrato.');
  };

  const handleAddAditivo = (newAditivo) => {
    setAditivos([...aditivos, { 
      id: Date.now(), 
      title: newAditivo.title, 
      val: newAditivo.val, 
      status: 'Aprovado',
      desc: ''
    }]);
    setActiveModal(null);
    triggerToast(`Aditivo "${newAditivo.title}" lançado com sucesso!`);
  };

  const handleAddMeeting = (newMeeting) => {
    setMeetings([...meetings, {
      id: Date.now(),
      title: newMeeting.title,
      date: newMeeting.date,
      time: newMeeting.time,
      link: newMeeting.link
    }]);
    setActiveModal('meetingsList'); // Return to list after adding
    triggerToast('Reunião agendada com sucesso!');
  };

  const saveProjectChanges = () => {
    triggerToast(`Alterações do projeto (Progresso: ${progress}%) salvas!`);
  };

  const markAsPaid = () => {
    // legacy, kept for compatibility if needed elsewhere
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div className="antialiased selection:bg-indigo-500/30 selection:text-white h-screen flex overflow-hidden">
      
      {/* Background */}
      <div className="bg-grid"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-noda-cyan/10 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob animation-delay-2000"></div>

      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col h-full relative z-10 w-full overflow-hidden">
        
        {/* Componente Header */}
        <ProjectHeader 
          projectId={id} 
          setSidebarOpen={setSidebarOpen} 
          onSave={saveProjectChanges} 
          setActiveModal={setActiveModal}
        />

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8 pb-20">
            
            {/* Informações Básicas do Projeto */}
            <ProjectInfoCard 
              progress={progress} 
              targetDate={targetDate}
              setProgress={setProgress} 
              setActiveModal={setActiveModal}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* ESQUERDA: Engenharia & Escopo (Span 2) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Componente: Etapas da Engenharia */}
                <ProjectEngineeringStages 
                  currentActiveStage={currentActiveStage} 
                  advanceStage={advanceStage} 
                  projectStagesData={projectStagesData}
                  setActiveModal={setActiveModal}
                  projectStatus={projectStatus}
                />

                {/* Componente: Gestão de Escopo & Aditivos */}
                <ProjectScope 
                  aditivos={aditivos} 
                  setActiveModal={setActiveModal} 
                  approveScope={approveScope} 
                />

              </div>

              {/* DIREITA: Reuniões e Financeiro */}
              <div className="space-y-6">
                
                {/* Componente: Reuniões */}
                <ProjectMeetings 
                  meetings={meetings}
                  setActiveModal={setActiveModal} 
                />

                {/* Componente: Financeiro */}
                <ProjectFinance 
                  setActiveModal={setActiveModal} 
                />

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Componente: Modais Globais do Projeto */}
      <ProjectModals 
        activeModal={activeModal} 
        closeModal={closeModal} 
        onAddAditivo={handleAddAditivo} 
        onAddMeeting={handleAddMeeting}
        advanceStage={advanceStage}
        revertStage={revertStage}
        completeProject={completeProject}
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        meetings={meetings}
        setActiveModal={setActiveModal}
        triggerToast={triggerToast} 
      />

      {/* Toast Floating Notification */}
      <div className={`fixed bottom-6 right-6 z-50 bg-gray-900 border border-noda-cyan/50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 pointer-events-none ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <CheckCircle className="w-5 h-5 text-noda-cyan shrink-0" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}
