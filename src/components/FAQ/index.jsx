import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <div data-aos="fade-up" className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
                    <p className="text-noda-textMuted">Tudo o que você precisa saber sobre como trabalhamos.</p>
                </div>

                <div className="space-y-4" id="faq-container">
                    {/*  FAQ Item 1  */}
                    <div data-aos="fade-up" data-aos-delay="100"
                        className="glass-card rounded-xl border border-white/10 overflow-hidden">
                        <button onClick={() => toggleFaq(0)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none faq-btn">
                            <span className="font-semibold text-white">Como funciona o tempo de desenvolvimento sob
                                medida?</span>
                            <ChevronDown className={`w-5 h-5 text-noda-textMuted transition-transform duration-300 transform ${openFaqIndex === 0 ? '-rotate-180' : ''}`} />
                        </button>
                        <div className={`accordion-content bg-white/5 ${openFaqIndex === 0 ? 'open' : ''}`}>
                            <div className="p-5 pt-4 text-sm text-noda-textMuted">
                                O prazo varia conforme a complexidade. Projetos MVP (Mínimo Produto Viável) geralmente levam
                                de 4 a 8 semanas, garantindo que você tenha um produto funcional rapidamente para testar no
                                mercado.
                            </div>
                        </div>
                    </div>

                    {/*  FAQ Item 2  */}
                    <div data-aos="fade-up" data-aos-delay="200"
                        className="glass-card rounded-xl border border-white/10 overflow-hidden">
                        <button onClick={() => toggleFaq(1)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none faq-btn">
                            <span className="font-semibold text-white">O StudioHub pode ser integrado ao meu sistema
                                atual?</span>
                            <ChevronDown className={`w-5 h-5 text-noda-textMuted transition-transform duration-300 transform ${openFaqIndex === 1 ? '-rotate-180' : ''}`} />
                        </button>
                        <div className={`accordion-content bg-white/5 ${openFaqIndex === 1 ? 'open' : ''}`}>
                            <div className="p-5 pt-4 text-sm text-noda-textMuted">
                                Sim. O StudioHub possui APIs nativas e Webhooks que permitem a comunicação com diversas
                                plataformas modernas de CRM e agenda, além de sua integração perfeita com o EasyWallet.
                            </div>
                        </div>
                    </div>

                    {/*  FAQ Item 3  */}
                    <div data-aos="fade-up" data-aos-delay="300"
                        className="glass-card rounded-xl border border-white/10 overflow-hidden">
                        <button onClick={() => toggleFaq(2)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none faq-btn">
                            <span className="font-semibold text-white">Por que vocês não integram com ERPs legados?</span>
                            <ChevronDown className={`w-5 h-5 text-noda-textMuted transition-transform duration-300 transform ${openFaqIndex === 2 ? '-rotate-180' : ''}`} />
                        </button>
                        <div className={`accordion-content bg-white/5 ${openFaqIndex === 2 ? 'open' : ''}`}>
                            <div className="p-5 pt-4 text-sm text-noda-textMuted">
                                Sistemas antigos frequentemente possuem arquiteturas fechadas, baixa documentação e
                                tecnologias defasadas (como SOAP). Isso atrasa o desenvolvimento e compromete a performance.
                                Preferimos focar em ecossistemas modernos (REST, GraphQL) para entregar velocidade e
                                qualidade excepcionais.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
