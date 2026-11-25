import { Sparkles, Bot, LineChart, ArrowDown } from 'lucide-react';

export default function Hero({ openContactModal }) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-glow">
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                {/*  Headlines  */}
                <h1 data-aos="fade-up" data-aos-delay="100"
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-gradient">
                    Transformamos complexidade em <span className="text-white text-glow">software de alta performance.</span>
                </h1>

                <p data-aos="fade-up" data-aos-delay="200"
                    className="text-lg md:text-xl text-noda-textMuted max-w-3xl mb-10 leading-relaxed">
                    Desenvolvemos ecossistemas web sob medida e soluções prontas que automatizam o seu atendimento e
                    aceleram a sua gestão financeira.
                </p>

                {/*  CTAs  */}
                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                    <a href="#especialidades"
                        aria-label="Conhecer nossas especialidades em desenvolvimento de software"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-noda-primary to-noda-cyan text-white font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all group">
                        Conhecer Especialidades
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
                    </a>
                    <a href="#contato" onClick={openContactModal}
                        aria-label="Entrar em contato para projetos de software sob medida"
                        className="modal-trigger w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-noda-cyan/50 transition-all">
                        Entre em contato
                    </a>
                </div>
            </div>
        </section>
    );
}
