import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Mail, ArrowLeft } from 'lucide-react';

export default function ContactModal({ isModalOpen, closeContactModal }) {
    const [step, setStep] = useState('initial'); // 'initial' | 'whatsapp_options'

    useEffect(() => {
        if (!isModalOpen) {
            const timeoutId = setTimeout(() => setStep('initial'), 300);
            return () => clearTimeout(timeoutId);
        }
    }, [isModalOpen]);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        setStep('whatsapp_options');
    };

    return (
        <div id="contact-modal"
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/*  Backdrop Blur  */}
            <div className="absolute inset-0 bg-noda-base/80 backdrop-blur-sm transition-opacity" onClick={closeContactModal} id="contact-modal-backdrop">
            </div>

            {/*  Modal Card  */}
            <div className={`glass-card relative w-full max-w-md mx-4 rounded-3xl p-1 overflow-hidden transform transition-all duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'}`}
                id="contact-modal-box">
                {/*  Animação Borda  */}
                <div className="absolute inset-0 bg-gradient-to-br from-noda-primary/30 via-transparent to-noda-cyan/30 z-0">
                </div>

                <div className="relative bg-[#050A15]/95 backdrop-blur-xl rounded-[23px] p-8 z-10 border border-white/5">
                    <button id="close-modal-btn" onClick={closeContactModal}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-noda-textMuted hover:text-white transition-colors">
                        <X className="w-4 h-4" />
                    </button>

                    <div className="text-center mb-8 transition-all duration-300">
                        <div
                            className="w-12 h-12 bg-gradient-to-br from-noda-primary/20 to-noda-cyan/20 border border-noda-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-6 h-6 text-noda-cyan" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {step === 'initial' ? 'Vamos conversar?' : 'Com quem deseja falar?'}
                        </h3>
                        <p className="text-sm text-noda-textMuted">
                            {step === 'initial'
                                ? 'Escolha o melhor canal para você e fale diretamente com nossos especialistas.'
                                : 'Selecione o especialista para iniciar o atendimento via WhatsApp.'}
                        </p>
                    </div>

                    <div className="space-y-3">
                        {step === 'initial' ? (
                            <>
                                {/*  WhatsApp CTA  */}
                                <a href="#" onClick={handleWhatsAppClick}
                                    className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all overflow-hidden">
                                    <div
                                        className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                                            WhatsApp</h4>
                                        <p className="text-[11px] text-noda-textMuted group-hover:text-gray-300">Resposta em minutos</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-noda-textMuted group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                                </a>

                                {/*  Email CTA  */}
                                <a href="mailto:hello@nodasolutions.com.br"
                                    className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-noda-primary/50 hover:bg-noda-primary/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all overflow-hidden">
                                    <div
                                        className="w-10 h-10 rounded-full bg-noda-primary/20 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-noda-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-noda-primary transition-colors">
                                            E-mail</h4>
                                        <p className="text-[11px] text-noda-textMuted group-hover:text-gray-300">
                                            hello@nodasolutions.com.br</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-noda-textMuted group-hover:text-noda-primary group-hover:translate-x-1 transition-all" />
                                </a>

                                {/*  Instagram CTA  */}
                                <a href="https://www.instagram.com/nodasolucoes?igsh=MXgydTFvemp3ZHFhbg%3D%3D&utm_source=qr"
                                    className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:shadow-[0_0_20px_rgba(225,48,108,0.15)] transition-all overflow-hidden">
                                    <div
                                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F56040] to-[#E1306C] flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#E1306C] transition-colors">
                                            Instagram</h4>
                                        <p className="text-[11px] text-noda-textMuted group-hover:text-gray-300">@nodasolucoes</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-noda-textMuted group-hover:text-[#E1306C] group-hover:translate-x-1 transition-all" />
                                </a>
                            </>
                        ) : (
                            <>
                                {/*  Nicolas CTA  */}
                                <a href="https://wa.me/5521993844100?text=Ol%C3%A1%20Nicolas%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Noda%21" target="_blank" rel="noopener noreferrer"
                                    className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all overflow-hidden">
                                    <div
                                        className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                                            Falar com Nicolas</h4>
                                        <p className="text-[11px] text-noda-textMuted group-hover:text-gray-300">Sócio & Especialista</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-noda-textMuted group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                                </a>

                                {/*  Augusto CTA  */}
                                <a href="https://wa.me/5521997216004?text=Ol%C3%A1%20Augusto%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Noda%21" target="_blank" rel="noopener noreferrer"
                                    className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all overflow-hidden">
                                    <div
                                        className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                                            Falar com Augusto</h4>
                                        <p className="text-[11px] text-noda-textMuted group-hover:text-gray-300">Sócio & Especialista</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-noda-textMuted group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                                </a>

                                <button onClick={() => setStep('initial')}
                                    className="w-full mt-2 py-3 text-sm font-medium text-noda-textMuted hover:text-white transition-colors flex items-center justify-center group">
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Voltar para opções
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
