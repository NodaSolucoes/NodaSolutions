import { useState } from 'react';
import { MapPin, Mail, Check, Send } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [countryCode, setCountryCode] = useState('+55');

    const sanitizeInput = (input) => {
        return input.replace(/[<>]/g, ''); // Prevents HTML tag injection
    };

    const handlePhoneChange = (e) => {
        let val = e.target.value.replace(/\D/g, ''); // keep only numbers
        if (val.length > 11) val = val.slice(0, 11); // max 11 digits (BR mobile)

        // Static WhatsApp mask for Brazil: (XX) XXXXX-XXXX
        if (val.length > 7) {
            val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
        } else if (val.length > 2) {
            val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
        }
        setPhone(val);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            e.target.reset();
            setName('');
            setPhone('');
            setMessage('');
        }, 1500);
    };

    const resetFormSuccess = () => {
        setIsSuccess(false);
    };

    return (
        <section id="contato" className="relative pt-24 pb-12">
            <div
                className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-noda-primary/10 to-transparent pointer-events-none -z-10">
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    <div data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Pronto para elevar o nível tecnológico
                            da sua empresa?</h2>
                        <p className="text-noda-textMuted text-lg mb-8">
                            Deixe-nos entender o seu desafio. Preencha o formulário e nossa equipe técnica (sem vendedores)
                            entrará em contato com você pelo WhatsApp para alinhar uma solução direta e reta.
                        </p>

                        <div className="flex items-center gap-4 text-noda-textMuted mt-12">
                            <div
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-noda-cyan" />
                            </div>
                            <div>
                                <p className="font-medium text-white">Localização</p>
                                <p className="text-sm">Rio de Janeiro - RJ, Brasil</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-noda-textMuted mt-6">
                            <div
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-noda-primary" />
                            </div>
                            <div>
                                <p className="font-medium text-white">E-mail</p>
                                <p className="text-sm">hello@nodasolutions.com.br</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left"
                        className="glass-card p-8 rounded-2xl relative border-t border-white/10 shadow-2xl">
                        <div id="form-success"
                            className={`${isSuccess ? 'flex' : 'hidden'} absolute inset-0 bg-noda-base/90 backdrop-blur-md rounded-2xl flex-col items-center justify-center z-10 p-6 text-center border border-green-500/30`}>
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Enviado com sucesso!</h4>
                            <p className="text-sm text-noda-textMuted">Olhe o email para as próximas atualizações, entraremos em contato.</p>
                            <button type="button" id="reset-form-btn" onClick={resetFormSuccess}
                                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-sm">Enviar
                                nova mensagem</button>
                        </div>

                        <form id="contact-form" className="space-y-5" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Nome
                                    completo</label>
                                <input type="text" id="name" required
                                    value={name}
                                    onChange={(e) => setName(sanitizeInput(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-noda-primary focus:ring-1 focus:ring-noda-primary transition-all"
                                    placeholder="Seu nome" />
                            </div>
                            <div>
                                <label htmlFor="whatsapp"
                                    className="block text-sm font-medium text-gray-300 mb-1.5">WhatsApp</label>
                                <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-noda-primary focus-within:ring-1 focus-within:ring-noda-primary transition-all">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="bg-transparent text-white px-3 py-3 outline-none border-r border-white/10 cursor-pointer hover:bg-white/5"
                                    >
                                        <option value="+55" className="bg-[#0f172a]">🇧🇷 +55</option>
                                        <option value="+1" className="bg-[#0f172a]">🇺🇸 +1</option>
                                        <option value="+44" className="bg-[#0f172a]">🇬🇧 +44</option>
                                        <option value="+49" className="bg-[#0f172a]">🇩🇪 +49</option>
                                        <option value="+33" className="bg-[#0f172a]">🇫🇷 +33</option>
                                        <option value="+39" className="bg-[#0f172a]">🇮🇹 +39</option>
                                        <option value="+34" className="bg-[#0f172a]">🇪🇸 +34</option>
                                        <option value="+351" className="bg-[#0f172a]">🇵🇹 +351</option>
                                        <option value="+61" className="bg-[#0f172a]">🇦🇺 +61</option>
                                        <option value="+81" className="bg-[#0f172a]">🇯🇵 +81</option>
                                    </select>
                                    <input type="tel" id="whatsapp" required
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
                                        placeholder="(00) 00000-0000" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Como podemos
                                    ajudar?</label>
                                <textarea id="message" required rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(sanitizeInput(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-noda-primary focus:ring-1 focus:ring-noda-primary transition-all resize-none"
                                    placeholder="Conte-nos um pouco sobre o seu desafio..."></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-noda-primary to-noda-cyan text-white font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                {isSubmitting ? <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" /> : <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
