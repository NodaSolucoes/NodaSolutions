import golSocial from '../../assets/logoEmpresasParceiras/golsocial.png';
import ids from '../../assets/logoEmpresasParceiras/ids.png';
import radarTerritorial from '../../assets/logoEmpresasParceiras/radarterritorial.png';
import rotaLogo from '../../assets/logoEmpresasParceiras/rotaLogo.png';

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 border-t border-white/5 bg-[#030712] relative overflow-hidden">
            {/*  Decorator Glow  */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
                <div data-aos="fade-up">
                    <div className="text-center mb-6">
                        <span
                            className="text-xs font-bold tracking-widest text-indigo-400 uppercase border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 inline-block">Landing
                            Pages & Plataformas</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Nosso Portfólio</span>
                    </h2>

                    <p className="text-noda-textMuted text-lg max-w-2xl mx-auto">
                        Conheça as empresas que confiam em nosso trabalho e os projetos que transformaram seus negócios.
                    </p>
                </div>
            </div>

            {/*  Infinite Carousel  */}
            <div data-aos="fade-in" data-aos-delay="200" className="relative w-full overflow-hidden z-10 py-4"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>

                <div className="flex items-center gap-8 w-max animate-scroll-infinite hover:[animation-play-state:paused]">
                    {/*  Group 1  */}
                    <div className="flex items-center gap-8">
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={golSocial} alt="Gol Social"
                                className="w-full h-full object-contain scale-[1.4] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={ids} alt="IDS"
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={radarTerritorial} alt="Radar Territorial"
                                className="w-full h-full object-contain scale-[2.5] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={rotaLogo} alt="Rota"
                                className="w-full h-full object-contain scale-[1.4] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                    </div>
                    {/*  Group 2 (Duplicate for seamless loop)  */}
                    <div className="flex items-center gap-8">
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={golSocial} alt="Gol Social"
                                className="w-full h-full object-contain scale-[1.4] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={ids} alt="IDS"
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={radarTerritorial} alt="Radar Territorial"
                                className="w-full h-full object-contain scale-[2.5] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                        <a href="#"
                            className="glass-card w-48 h-20 px-6 py-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 hover:border-noda-cyan/30 transition-all duration-300 group cursor-pointer">
                            <img src={rotaLogo} alt="Rota"
                                className="w-full h-full object-contain scale-[1.4] grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
