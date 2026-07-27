import { MessageSquareDashed, CheckCircle2, Wallet, Zap, ArrowRight, Lock, Bot, TrendingUp } from 'lucide-react';

export default function Products() {
    return (
        <>
            <section id="produtos" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div data-aos="fade-up" className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-noda-primary uppercase mb-3">Os Motores Noda</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Soluções prontas, impacto imediato.</h3>
                        <p className="text-noda-textMuted max-w-2xl mx-auto">
                            Conheça os produtos que formam o coração do nosso ecossistema: um motor de atendimento autônomo e
                            uma inteligência financeira definitiva.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div data-aos="fade-right" className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                            <div
                                className="absolute top-0 right-0 w-64 h-64 bg-noda-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-500 group-hover:scale-150">
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                                    <MessageSquareDashed className="w-7 h-7 text-noda-primary" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">StudioHub</h4>
                                    <span
                                        className="text-xs font-medium px-2 py-1 bg-noda-primary/20 text-noda-primary rounded-md border border-noda-primary/30 mt-1 inline-block">O
                                        Motor de Atendimento</span>
                                </div>
                            </div>
                            <p className="text-noda-textMuted mb-8 leading-relaxed">Chatbot de IA com autonomia humana para o
                                WhatsApp. Atende clientes, responde dúvidas, marca, desmarca e resolve conflitos de agenda
                                sozinho, alimentando um painel visual em tempo real.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-primary shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300">Respostas naturais baseadas no contexto do seu
                                        negócio.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-primary shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300">Gestão autônoma de agenda sem intervenção humana.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-primary shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300">Dashboard em tempo real para monitoramento.</span>
                                </li>
                            </ul>
                        </div>

                        <div data-aos="fade-left" className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                            <div
                                className="absolute bottom-0 right-0 w-64 h-64 bg-noda-cyan/10 rounded-full blur-[80px] -mr-32 -mb-32 transition-transform duration-500 group-hover:scale-150">
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                                    <Wallet className="w-7 h-7 text-noda-cyan" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">EasyWallet</h4>
                                    <span
                                        className="text-xs font-medium px-2 py-1 bg-noda-cyan/20 text-noda-cyan rounded-md border border-noda-cyan/30 mt-1 inline-block">A
                                        Inteligência Financeira SaaS</span>
                                </div>
                            </div>
                            <p className="text-noda-textMuted mb-8 leading-relaxed">A ponte definitiva entre o caos das planilhas
                                manuais e a rigidez dos ERPs tradicionais. Opera sob as duas óticas vitais: Regime de Caixa e
                                Competência.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-cyan shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300"><strong className="text-white">Conciliação Bancária
                                            IA:</strong> Leitura de OFX/PDF sem digitação manual.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-cyan shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300"><strong className="text-white">Indicadores
                                            Estratégicos:</strong> Margem de Contribuição, Break-Even e Forecasting.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-noda-cyan shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300"><strong className="text-white">Arquitetura
                                            Escalonável:</strong> Integrações API e emissão de NFS-e.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="ecossistema" data-aos="fade-up" className="relative mt-4">
                        <div
                            className="hidden lg:block absolute left-1/2 top-[-30px] w-px h-[30px] bg-gradient-to-b from-transparent to-noda-primary/50">
                        </div>
                        <div className="glass-card rounded-2xl p-1 relative border-noda-primary/30">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-noda-primary/10 via-noda-cyan/10 to-indigo-500/10 rounded-2xl">
                            </div>
                            <div
                                className="relative bg-noda-base/80 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border border-white/5">
                                <div className="flex-shrink-0">
                                    <div
                                        className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full border border-white/10 mb-4 md:mb-0">
                                        <Zap className="w-6 h-6 text-yellow-400" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h5 className="text-lg font-bold mb-2 text-white">O Diferencial: A Sinergia Nativa</h5>
                                    <p className="text-sm text-noda-textMuted leading-relaxed">
                                        O <span className="text-noda-primary font-semibold">StudioHub</span> conclui o agendamento
                                        no WhatsApp <ArrowRight className="inline w-3 h-3 text-white mx-1" />
                                        O <span className="text-noda-cyan font-semibold">EasyWallet</span> lança o ganho
                                        automaticamente, calcula o Regime de Caixa/Competência e divide comissões <strong>sem
                                            uma única planilha manual</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <div data-aos="fade-up" className="relative w-full max-w-5xl mx-auto animate-float">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-noda-cyan/20 to-transparent blur-3xl -z-10 rounded-full">
                        </div>

                        <div
                            className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
                            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/40">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <div
                                    className="mx-auto bg-white/5 border border-white/10 rounded-md text-[10px] text-noda-textMuted px-4 py-1 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> noda.solutions/dashboard
                                </div>
                            </div>

                            <div
                                className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-br from-noda-base to-noda-base/80 h-auto md:h-[400px]">
                                <div className="col-span-1 rounded-xl border border-white/5 bg-white/5 p-4 flex flex-col gap-4">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-8 h-8 rounded-full bg-noda-primary/20 flex items-center justify-center">
                                                <Bot className="w-4 h-4 text-noda-primary" />
                                            </div>
                                            <span className="text-sm font-semibold">StudioHub IA</span>
                                        </div>
                                        <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="bg-white/10 p-3 rounded-r-lg rounded-bl-lg text-[10px] text-noda-textMuted w-4/5">
                                            Olá! Gostaria de agendar uma reunião para amanhã.</div>
                                        <div
                                            className="bg-noda-primary/20 border border-noda-primary/30 p-3 rounded-l-lg rounded-br-lg text-[10px] text-white w-4/5 self-end">
                                            Claro! Temos horários às 10h e 14h. Qual prefere? Já reservei na agenda.</div>
                                        <div
                                            className="bg-white/10 p-3 rounded-r-lg rounded-bl-lg text-[10px] text-noda-textMuted w-3/5">
                                            Às 14h fica perfeito!</div>
                                    </div>
                                </div>

                                <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                                            <span className="text-[10px] text-noda-textMuted uppercase">Receita Mensal</span>
                                            <div className="text-lg font-bold text-white mt-1">R$ 124.500</div>
                                            <div className="text-[10px] text-green-400 mt-2 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12%</div>
                                        </div>
                                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                                            <span className="text-[10px] text-noda-textMuted uppercase">Break-Even</span>
                                            <div className="text-lg font-bold text-white mt-1">R$ 82.000</div>
                                            <div className="w-full bg-white/10 rounded-full h-1 mt-3">
                                                <div className="bg-noda-cyan h-1 rounded-full w-[65%]"></div>
                                            </div>
                                        </div>
                                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                                            <span className="text-[10px] text-noda-textMuted uppercase">Regime Competência</span>
                                            <div className="text-lg font-bold text-indigo-400 mt-1">Sincronizado</div>
                                            <div className="text-[10px] text-noda-textMuted mt-2">DRE atualizada</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-h-[120px] rounded-xl border border-white/5 bg-white/5 p-4 flex flex-col">
                                        <span className="text-[10px] text-noda-textMuted uppercase mb-4">Fluxo de Caixa
                                            Projetado</span>
                                        <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                                            <div
                                                className="w-full bg-white/5 rounded-t-sm h-[30%] relative group hover:bg-noda-primary/40 transition-colors">
                                            </div>
                                            <div
                                                className="w-full bg-white/5 rounded-t-sm h-[50%] relative group hover:bg-noda-primary/40 transition-colors">
                                            </div>
                                            <div
                                                className="w-full bg-white/5 rounded-t-sm h-[45%] relative group hover:bg-noda-primary/40 transition-colors">
                                            </div>
                                            <div
                                                className="w-full bg-noda-primary/60 rounded-t-sm h-[70%] relative group hover:bg-noda-primary transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                            </div>
                                            <div
                                                className="w-full bg-noda-cyan/60 rounded-t-sm h-[90%] relative group hover:bg-noda-cyan transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                            </div>
                                            <div
                                                className="w-full bg-white/5 rounded-t-sm h-[60%] relative group hover:bg-noda-primary/40 transition-colors">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
