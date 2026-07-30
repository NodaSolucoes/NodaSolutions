import { UserCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ isScrolled, isMobileMenuOpen, toggleMobileMenu, openContactModal }) {
    return (
        <nav className={`fixed top-0 w-full z-50 border-b border-white/5 transition-colors duration-300 ${isScrolled ? 'shadow-lg bg-noda-base/95 backdrop-blur-xl' : 'bg-noda-base/40 backdrop-blur-md'}`} id="navbar">
            <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                {/*  Logo Wrapper  */}
                <div className="flex-shrink-0 flex items-center justify-start z-10">
                    <a href="#" className="flex items-center gap-3 group">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0">
                            <defs>
                                <linearGradient id="boltGradient" x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#06B6D4" />
                                    <stop offset="55%" stopColor="#2563EB" />
                                    <stop offset="100%" stopColor="#4338CA" />
                                </linearGradient>
                                <filter id="boltGlow" x="-60%" y="-60%" width="220%" height="220%">
                                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <rect x="1" y="1" width="30" height="30" rx="9" fill="#0B0F19" stroke="rgba(148,163,184,0.16)" />
                            <path d="M18.5 6L10 18h5.2l-1.7 8L22 13.5h-5.2L18.5 6z" fill="url(#boltGradient)"
                                filter="url(#boltGlow)" className="transition-transform duration-300 group-hover:scale-105" />
                        </svg>
                        <span className="font-bold text-2xl tracking-tight text-white">Noda<span
                            className="text-noda-cyan">.</span></span>
                    </a>
                </div>

                {/*  Desktop Links (Center)  */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8 text-sm font-medium text-noda-textMuted">
                    <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
                    <a href="#servicos" className="hover:text-white transition-colors">Software</a>
                    <a href="#processo" className="hover:text-white transition-colors">Processo</a>
                    <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
                    <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
                </div>

                {/*  Actions Wrapper  */}
                <div className="hidden lg:flex flex-shrink-0 items-center justify-end gap-6 z-10">
                    <Link to="/login"
                        className="flex items-center gap-2 text-sm font-medium text-noda-textMuted hover:text-white transition-colors group">
                        <UserCircle className="w-4 h-4 group-hover:text-noda-cyan transition-colors" />
                        Área do Parceiro
                    </Link>
                    <a href="#contato" onClick={openContactModal}
                        className="modal-trigger relative inline-flex h-10 items-center justify-center rounded-full bg-noda-base px-6 text-sm font-medium text-white shadow-sm btn-gradient-border overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-2">
                            Entre em contato
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex-shrink-0 flex justify-end z-10">
                    <button id="mobile-menu-btn" onClick={toggleMobileMenu} className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-noda-textMuted hover:text-white hover:bg-white/10 focus:outline-none transition-all">
                        <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
                        <X className={`absolute w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'}`} />
                    </button>
                </div>
            </div>

            {/*  Mobile Menu Dropdown (Balloon)  */}
            <div id="mobile-menu"
                className={`lg:hidden absolute top-[85px] right-6 w-[280px] flex-col p-5 rounded-3xl bg-[#030712]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 origin-top-right flex ${isMobileMenuOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'}`}>

                <div className="flex flex-col space-y-4">
                    <span className="text-xs font-semibold text-noda-textMuted uppercase tracking-wider">Navegação</span>
                    <a href="#portfolio" onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors">Portfólio</a>
                    <a href="#servicos" onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors">Desenvolvimento</a>
                    <a href="#processo" onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors">Processo</a>
                    <a href="#produtos" onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors">Produtos</a>
                    <a href="#sobre" onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors">Sobre</a>
                </div>

                <hr className="border-white/10 my-5" />

                <div className="flex flex-col space-y-4">
                    <span className="text-xs font-semibold text-noda-textMuted uppercase tracking-wider">Ações</span>
                    <Link to="/login" onClick={toggleMobileMenu}
                        className="flex items-center gap-2 text-white/80 hover:text-white text-base font-medium transition-colors">
                        <UserCircle className="w-5 h-5" /> Área do Parceiro
                    </Link>
                    <a href="#contato" onClick={(e) => { toggleMobileMenu(); openContactModal(e); }}
                        className="modal-trigger block w-full text-center py-3 mt-2 rounded-xl bg-gradient-to-r from-noda-primary to-noda-cyan text-white text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        Entre em contato
                    </a>
                </div>
            </div>
        </nav>
    );
}
