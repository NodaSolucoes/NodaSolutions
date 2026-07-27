import augustoImg from '../../assets/imgPerfil/augusto.jpeg';
import nicolasImg from '../../assets/imgPerfil/nicolas-lima.jpeg';

export default function About() {
    return (
        <section id="sobre" className="py-24 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-noda-cyan/5 blur-[100px] rounded-full pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-sm font-bold tracking-widest text-noda-cyan uppercase mb-3">DNA Técnico</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Engenharia de Elite, <br />Sem Intermediários.</h3>
                        <p className="text-noda-textMuted text-lg mb-6 leading-relaxed">
                            Somos uma equipe altamente especializada e enxuta. Quando você fala com a Noda, você trata
                            <strong> diretamente com quem constrói o código</strong>.
                        </p>
                        <p className="text-noda-textMuted text-lg leading-relaxed">
                            Eliminamos gerentes de projeto intermediários, reuniões improdutivas e burocracia, garantindo
                            agilidade real, arquitetura limpa e execução sem ruídos.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div data-aos="fade-up" data-aos-delay="100"
                            className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-5 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-noda-primary/30 group">
                            <div className="w-20 h-20 rounded-full shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.2)] border-2 border-noda-primary/40 overflow-hidden bg-noda-base group-hover:scale-105 transition-transform duration-300">
                                {/* Substitua o 'src' abaixo pela foto real do desenvolvedor */}
                                <img src={augustoImg} alt="Augusto Bruno" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">Augusto Bruno</h4>
                                <p className="text-sm text-noda-primary font-medium mb-3">Desenvolvedor Web Full-Stack, Web Designer e UI/UX Designer</p>
                                <p className="text-sm text-noda-textMuted leading-relaxed">Focado em criar aplicações web reativas, interfaces
                                    deslumbrantes e garantir que a jornada do usuário seja intuitiva e livre de fricções.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200"
                            className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-5 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-noda-cyan/30 group">
                            <div className="w-20 h-20 rounded-full shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)] border-2 border-noda-cyan/40 overflow-hidden bg-noda-base group-hover:scale-105 transition-transform duration-300">
                                {/* Substitua o 'src' abaixo pela foto real do desenvolvedor */}
                                <img src={nicolasImg} alt="Nicolas Lima" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">Nicolas Lima</h4>
                                <p className="text-sm text-noda-cyan font-medium mb-3">Desenvolvedor Web Full-Stack</p>
                                <p className="text-sm text-noda-textMuted leading-relaxed">O cérebro por trás da operação. Focado em arquitetura
                                    de dados sólida, integração nativa com IA e máxima segurança em serviços de API.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
