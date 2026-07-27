import { LayoutDashboard, Smartphone, ShieldCheck, Info } from 'lucide-react';

export default function Services() {
    return (
        <section id="servicos" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div data-aos="fade-up" className="max-w-3xl mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3">Software Sob Medida</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">Sistemas Exclusivos para a Sua Operação.</h3>
                    <p className="text-noda-textMuted text-lg">
                        Desenvolvemos aplicações web e plataformas completas de média complexidade, priorizando código
                        limpo, agilidade e entrega rápida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div data-aos="fade-up" data-aos-delay="100"
                        className="glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-colors group">
                        <LayoutDashboard className="w-8 h-8 text-indigo-400 mb-4 group-hover:-translate-y-1 transition-transform" />
                        <h4 className="text-xl font-semibold mb-2">Dashboards & Portais</h4>
                        <p className="text-sm text-noda-textMuted">Interfaces administrativas completas, ricas em dados e
                            totalmente adaptadas aos fluxos operacionais únicos da sua empresa.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200"
                        className="glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-colors group">
                        <Smartphone className="w-8 h-8 text-indigo-400 mb-4 group-hover:-translate-y-1 transition-transform" />
                        <h4 className="text-xl font-semibold mb-2">Usabilidade e Performance</h4>
                        <p className="text-sm text-noda-textMuted">Sistemas Mobile-First, com tempos de resposta instantâneos e
                            experiências de usuário fluidas, baseadas nos melhores padrões de UI/UX modernos.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300"
                        className="glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-colors group">
                        <ShieldCheck className="w-8 h-8 text-indigo-400 mb-4 group-hover:-translate-y-1 transition-transform" />
                        <h4 className="text-xl font-semibold mb-2">Arquitetura Enxuta e Segura</h4>
                        <p className="text-sm text-noda-textMuted">Bancos de dados escaláveis, autenticação moderna e APIs
                            robustas. Entregamos o que você precisa sem inchaço tecnológico.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
