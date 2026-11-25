import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
    {
        question: 'Quanto tempo leva para desenvolver um projeto e como acompanho o andamento?',
        answer:
            'O prazo depende do escopo: sites profissionais e cardápios digitais costumam ser entregues entre 1 e 3 semanas, enquanto sistemas sob medida para empresas ou clínicas levam de 4 a 10 semanas. Você não fica no escuro em nenhuma etapa — disponibilizamos acesso exclusivo à nossa Área do Parceiro, onde você acompanha o progresso em tempo real, valida entregas e visualiza o cronograma.',
    },
    {
        question: 'O código e o sistema serão 100% meus ou fico preso a mensalidades?',
        answer:
            'O projeto é 100% propriedade da sua empresa após a quitação. Diferente de plataformas engessadas que cobram taxas sobre suas vendas ou alugam o sistema para sempre, na Noda entregamos o código-fonte e a estrutura configurada em seu nome. Você arca apenas com os custos básicos de hospedagem e domínio diretamente nos provedores oficiais.',
    },
    {
        question: 'Preciso ter todo o projeto desenhado tecnicamente antes de entrar em contato?',
        answer:
            'Não. Nosso trabalho começa exatamente na etapa de Discovery e Diagnóstico. Você nos apresenta o problema operacional da sua empresa, clínica ou restaurante, e nossa equipe de engenharia mapeia os fluxos, desenha as telas e estrutura a solução técnica ideal antes de escrever a primeira linha de código.',
    },
    {
        question: 'Vocês integram o sistema com WhatsApp, meios de pagamento ou ferramentas que já uso?',
        answer:
            'Sim. Desenvolvemos arquiteturas modernas preparadas para conversar com as principais ferramentas do mercado via API — incluindo automações de atendimento no WhatsApp, gateways de pagamento (Pix e cartão), emissão de notas fiscais e bancos de dados já existentes na sua operação.',
    },
    {
        question: 'Como funciona o suporte e a evolução do sistema após a entrega?',
        answer:
            'Todo projeto entregue conta com um período de garantia técnica gratuita para ajustes e estabilidade. Após o lançamento, caso sua empresa cresça e precise de novas funcionalidades, melhorias contínuas ou acompanhamento mensal de infraestrutura, oferecemos planos flexíveis de sustentação sob demanda.',
    },
    {
        question: 'Os sistemas seguem as normas de segurança e a LGPD (especialmente para clínicas)?',
        answer:
            'Sim. Aplicamos boas práticas de engenharia de software desde a base do banco de dados, incluindo criptografia, controle rigoroso de permissões por nível de acesso (administrador, recepção, especialista) e rastreabilidade de ações, garantindo conformidade com a LGPD e proteção total para dados sensíveis e prontuários.',
    },
];

export default function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section id="faq" aria-labelledby="faq-heading" className="py-24 border-t border-white/5 relative">
            <div className="max-w-3xl mx-auto px-6">
                <div data-aos="fade-up" className="text-center mb-12">
                    <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-noda-textMuted text-base md:text-lg">
                        Tudo o que você precisa saber sobre como trabalhamos.
                    </p>
                </div>

                <div className="space-y-4" id="faq-container">
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = openFaqIndex === index;
                        const questionId = `faq-question-${index}`;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <div
                                key={questionId}
                                data-aos="fade-up"
                                data-aos-delay={Math.min((index + 1) * 75, 400)}
                            >
                                <div
                                    className={`rounded-2xl backdrop-blur-md border overflow-hidden transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
                                        isOpen
                                            ? 'bg-slate-900/60 border-noda-cyan/40 shadow-[0_8px_30px_-10px_rgba(6,182,212,0.22)]'
                                            : 'bg-slate-900/40 border-white/10 hover:border-noda-primary/40'
                                    }`}
                                >
                                    <h3 className="m-0">
                                        <button
                                            type="button"
                                            id={questionId}
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-noda-cyan"
                                        >
                                            <span
                                                className={`font-semibold text-base sm:text-lg leading-snug transition-colors duration-200 ${
                                                    isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'
                                                }`}
                                            >
                                                {item.question}
                                            </span>
                                            <span
                                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 motion-reduce:transition-none ${
                                                    isOpen
                                                        ? 'bg-noda-cyan/15 border-noda-cyan/40 text-noda-cyan'
                                                        : 'bg-white/5 border-white/10 text-noda-textMuted group-hover:text-white group-hover:border-white/20'
                                                }`}
                                                aria-hidden="true"
                                            >
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 motion-reduce:transition-none ${
                                                        isOpen ? 'rotate-180' : 'rotate-0'
                                                    }`}
                                                />
                                            </span>
                                        </button>
                                    </h3>

                                    <div
                                        id={answerId}
                                        aria-labelledby={questionId}
                                        inert={!isOpen || undefined}
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-white/5 bg-white/[0.02] text-sm sm:text-base text-noda-textMuted leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
