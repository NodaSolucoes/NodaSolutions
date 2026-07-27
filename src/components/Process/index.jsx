import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

export default function Process() {
    return (
        <section id="processo" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div data-aos="fade-up" className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Como transformamos <span
                            className="bg-gradient-to-r from-noda-cyan via-noda-primary to-purple-500 text-transparent bg-clip-text">ideias
                            em realidade</span>
                    </h2>
                    <p className="text-noda-textMuted text-lg max-w-2xl mx-auto">
                        Nosso processo é estruturado para garantir transparência, agilidade e qualidade em cada etapa do
                        desenvolvimento.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
                    <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[1px] bg-white/5 z-0"></div>

                    <div data-aos="fade-up" data-aos-delay="100"
                        className="relative z-10 bg-noda-base/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center mt-6 transition-all duration-500 group hover:border-noda-cyan/40 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white/5 hover:to-noda-cyan/5 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.25)]">
                        <div
                            className="absolute -top-4 w-8 h-8 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center text-xs text-noda-textMuted font-mono z-20 transition-all duration-500 group-hover:border-noda-cyan/50 group-hover:text-noda-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            1</div>
                        <div className="w-14 h-14 rounded-full bg-noda-primary/10 flex items-center justify-center mb-6 mt-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-noda-cyan/20">
                            <Search className="w-6 h-6 text-noda-cyan transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 transition-colors duration-500 group-hover:text-noda-cyan">Imersão e Descoberta</h4>
                        <p className="text-sm text-noda-textMuted leading-relaxed transition-colors duration-500 group-hover:text-gray-300">Mergulhamos no seu negócio para entender
                            dores, objetivos e oportunidades. Definimos o escopo e a melhor estratégia técnica.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200"
                        className="relative z-10 bg-noda-base/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center mt-6 transition-all duration-500 group hover:border-noda-cyan/40 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white/5 hover:to-noda-cyan/5 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.25)]">
                        <div
                            className="absolute -top-4 w-8 h-8 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center text-xs text-noda-textMuted font-mono z-20 transition-all duration-500 group-hover:border-noda-cyan/50 group-hover:text-noda-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            2</div>
                        <div className="w-14 h-14 rounded-full bg-noda-primary/10 flex items-center justify-center mb-6 mt-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-noda-cyan/20">
                            <Lightbulb className="w-6 h-6 text-noda-cyan transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 transition-colors duration-500 group-hover:text-noda-cyan">Design e Prototipação</h4>
                        <p className="text-sm text-noda-textMuted leading-relaxed transition-colors duration-500 group-hover:text-gray-300">Criamos a experiência visual e funcional
                            (UI/UX). Você valida o visual e o fluxo antes de escrevermos uma linha de código.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300"
                        className="relative z-10 bg-noda-base/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center mt-6 transition-all duration-500 group hover:border-noda-primary/50 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white/5 hover:to-noda-primary/10 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.25)]">
                        <div
                            className="absolute -top-4 w-8 h-8 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center text-xs text-noda-textMuted font-mono z-20 transition-all duration-500 group-hover:border-noda-primary/50 group-hover:text-noda-primary group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                            3</div>
                        <div className="w-14 h-14 rounded-full bg-noda-primary/10 flex items-center justify-center mb-6 mt-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-noda-primary/20">
                            <Code2 className="w-6 h-6 text-noda-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 transition-colors duration-500 group-hover:text-noda-primary">Desenvolvimento Ágil</h4>
                        <p className="text-sm text-noda-textMuted leading-relaxed transition-colors duration-500 group-hover:text-gray-300">Nossa equipe constrói a solução usando as
                            melhores tecnologias (Next.js, React, Node). Entregas parciais para você acompanhar a evolução.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400"
                        className="relative z-10 bg-noda-base/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center mt-6 transition-all duration-500 group hover:border-noda-cyan/40 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white/5 hover:to-noda-cyan/5 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.25)]">
                        <div
                            className="absolute -top-4 w-8 h-8 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center text-xs text-noda-textMuted font-mono z-20 transition-all duration-500 group-hover:border-noda-cyan/50 group-hover:text-noda-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            4</div>
                        <div className="w-14 h-14 rounded-full bg-noda-primary/10 flex items-center justify-center mb-6 mt-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-noda-cyan/20">
                            <Rocket className="w-6 h-6 text-noda-cyan transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 transition-colors duration-500 group-hover:text-noda-cyan">Lançamento e Evolução</h4>
                        <p className="text-sm text-noda-textMuted leading-relaxed transition-colors duration-500 group-hover:text-gray-300">Colocamos o projeto no ar com segurança.
                            Monitoramos a performance e continuamos evoluindo o produto com base em dados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
