import { Globe, Utensils, Cpu, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

const ESPECIALIDADES = [
    {
        id: 'sites',
        title: 'Sites Profissionais & Landing Pages',
        description:
            'Sites institucionais rápidos, responsivos e otimizados para SEO e tráfego pago, projetados para transmitir autoridade e transformar visitantes em clientes.',
        features: [
            'Design exclusivo e carregamento ultrarrápido',
            'Estrutura otimizada para Google (SEO) e campanhas',
            'Integração direta com WhatsApp e formulários de captura',
        ],
        ctaLabel: 'Solicitar orçamento',
        ctaSrContext: 'para Sites Profissionais e Landing Pages',
        icon: Globe,
        aosDelay: '100',
        featured: false,
        accent: 'blue',
    },
    {
        id: 'cardapio',
        title: 'Sistemas de Cardápio & Operação Local',
        description:
            'Cardápios digitais interativos com gestão de pedidos, controle de mesas e fluxo de atendimento sem depender de taxas abusivas de marketplaces.',
        features: [
            'Cardápio digital dinâmico com atualização em tempo real',
            'Painel de pedidos e acompanhamento de status',
            'Experiência fluida no celular sem precisar baixar aplicativo',
        ],
        ctaLabel: 'Solicitar orçamento',
        ctaSrContext: 'para Sistemas de Cardápio e Operação Local',
        icon: Utensils,
        aosDelay: '200',
        featured: false,
        accent: 'cyan',
    },
    {
        id: 'sistemas-complexos',
        title: 'Sistemas Complexos para Empresas & Clínicas',
        description:
            'Plataformas completas para gestão operacional, prontuários, faturamento médico (TISS/TUSS), regras de negócio específicas e dashboards gerenciais.',
        features: [
            'Arquitetura segura com controle de permissões por perfil',
            'Automação de fluxos financeiros, agendas e relatórios',
            'Integrações com APIs externas, bancos de dados e IA',
        ],
        ctaLabel: 'Agendar diagnóstico técnico',
        ctaSrContext: 'para Sistemas Complexos para Empresas e Clínicas',
        icon: Cpu,
        aosDelay: '300',
        featured: true,
        accent: 'indigo',
    },
];

const ACCENT_STYLES = {
    blue: {
        card: 'bg-slate-900/40 border-white/10 hover:border-noda-primary/50 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.28)]',
        glow: 'bg-noda-primary/10',
        iconBox: 'bg-noda-primary/15 border-noda-primary/30 text-noda-primary',
        check: 'text-noda-primary',
        cta: 'text-blue-400 hover:text-noda-cyan',
    },
    cyan: {
        card: 'bg-slate-900/40 border-white/10 hover:border-noda-cyan/50 hover:shadow-[0_12px_40px_-12px_rgba(6,182,212,0.28)]',
        glow: 'bg-noda-cyan/10',
        iconBox: 'bg-noda-cyan/15 border-noda-cyan/30 text-noda-cyan',
        check: 'text-noda-cyan',
        cta: 'text-noda-cyan hover:text-cyan-300',
    },
    indigo: {
        card: 'bg-slate-900/55 border-noda-primary/40 shadow-[0_0_36px_-12px_rgba(37,99,235,0.32)] hover:border-noda-cyan/60 hover:shadow-[0_14px_45px_-10px_rgba(6,182,212,0.35)]',
        glow: 'bg-gradient-to-br from-noda-primary/20 via-noda-indigo/20 to-noda-cyan/10',
        iconBox: 'bg-gradient-to-br from-noda-primary/25 to-noda-indigo/35 border-noda-primary/40 text-noda-cyan',
        check: 'text-noda-cyan',
        cta: 'text-noda-cyan hover:text-white',
    },
};

export default function Products({ openContactModal }) {
    return (
        <section id="especialidades" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div data-aos="fade-up" className="text-center mb-16">
                    <span className="inline-block text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-noda-primary to-noda-cyan bg-clip-text text-transparent mb-3">
                        NOSSAS ESPECIALIDADES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
                        Tecnologia sob medida para cada estágio do seu negócio.
                    </h2>
                    <p className="text-noda-textMuted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Do posicionamento digital de alta conversão a sistemas complexos de gestão, faturamento e operação.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto] gap-6 mb-12">
                    {ESPECIALIDADES.map((item) => {
                        const Icon = item.icon;
                        const styles = ACCENT_STYLES[item.accent];

                        return (
                            <article
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={item.aosDelay}
                                className={`rounded-3xl p-7 lg:p-8 backdrop-blur-md border relative overflow-hidden group flex flex-col gap-5 lg:grid lg:grid-rows-[auto_auto_1fr_auto] lg:grid-rows-subgrid lg:row-span-4 lg:gap-y-5 hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${styles.card}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[80px] transition-transform duration-500 group-hover:scale-125 motion-reduce:transition-none ${styles.glow}`}
                                />

                                <header className="relative z-10 flex items-center gap-3.5 sm:gap-4 min-w-0">
                                    <div
                                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border flex items-center justify-center shadow-lg shrink-0 ${styles.iconBox}`}
                                    >
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug min-w-0">
                                        {item.title}
                                    </h3>
                                </header>

                                <p className="relative z-10 text-sm md:text-base text-noda-textMuted leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="relative z-10 space-y-3.5">
                                    {item.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <CheckCircle2
                                                className={`w-5 h-5 shrink-0 mt-0.5 ${styles.check}`}
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm text-gray-300 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <footer className="relative z-10 pt-5 mt-1 border-t border-white/10 flex items-center">
                                    <a
                                        href="#contato"
                                        onClick={openContactModal}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-noda-cyan active:scale-[0.98] group/cta ${styles.cta}`}
                                    >
                                        {item.ctaLabel}
                                        <span className="sr-only"> {item.ctaSrContext}</span>
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </footer>
                            </article>
                        );
                    })}
                </div>

                <div id="ecossistema" data-aos="fade-up" className="relative mt-4">
                    <div
                        aria-hidden="true"
                        className="hidden lg:block absolute left-1/2 top-[-30px] w-px h-[30px] bg-gradient-to-b from-transparent to-noda-primary/50"
                    />
                    <div className="rounded-2xl p-1 relative bg-slate-900/40 backdrop-blur-md border border-noda-primary/30 hover:border-noda-cyan/40 transition-colors duration-300">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-noda-primary/10 via-noda-cyan/10 to-noda-indigo/15 rounded-2xl pointer-events-none"
                        />
                        <div className="relative bg-noda-base/80 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left border border-white/5">
                            <div className="flex-shrink-0">
                                <div className="inline-flex items-center justify-center p-3.5 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(6,182,212,0.18)]">
                                    <Zap className="w-6 h-6 text-noda-cyan" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold mb-2 text-white">
                                    O Diferencial: Aceleradores Próprios de Engenharia
                                </h4>
                                <p className="text-sm text-noda-textMuted leading-relaxed">
                                    Não começamos do zero. Já possuímos módulos prontos de{' '}
                                    <strong className="text-white font-semibold">
                                        Atendimento Autônomo com IA no WhatsApp
                                    </strong>
                                    ,{' '}
                                    <strong className="text-white font-semibold">
                                        Conciliação Financeira
                                    </strong>{' '}
                                    e{' '}
                                    <strong className="text-white font-semibold">
                                        Dashboards em Tempo Real
                                    </strong>{' '}
                                    que podem ser acoplados ao sistema da sua empresa ou clínica para reduzir prazos e
                                    custos de desenvolvimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
