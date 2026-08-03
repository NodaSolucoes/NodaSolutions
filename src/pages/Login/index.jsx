import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  GitCommit,
  PlayCircle,
  LifeBuoy,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import { supabase } from '../../services/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openContactModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const closeContactModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setErrorMsg('');

    try {
      // 1. Autenticar usuário no Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw new Error('E-mail ou senha incorretos.');
      }

      const user = authData.user;

      if (!user) {
        throw new Error('Erro ao obter dados do usuário.');
      }

      // 2. Verificar se é Admin (Colaborador)
      const { data: colaboradorData, error: colabError } = await supabase
        .from('colaboradores')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'Ativo')
        .single();

      if (colaboradorData) {
        // Encontrou colaborador ativo -> Redireciona para /admin
        setIsSuccess(true);
        setTimeout(() => navigate('/admin'), 1000);
        return;
      }

      // 3. Verificar se é Cliente/Parceiro
      const { data: clienteData, error: clienteError } = await supabase
        .from('clientes')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'Ativo')
        .single();

      if (clienteData) {
        // Encontrou cliente ativo -> Redireciona para /dashboard
        setIsSuccess(true);
        setTimeout(() => navigate('/dashboard'), 1000);
        return;
      }

      // 4. Se não encontrar em nenhum dos dois ou não estiver ativo
      throw new Error('Conta sem perfil ativo vinculado.');

    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Ocorreu um erro ao tentar fazer login.');
      // Se a autenticação passou mas falhou no perfil, desloga por segurança
      await supabase.auth.signOut();
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-noda-cyan/30 selection:text-white">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-noda-primary/20 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob"></div>
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-noda-cyan/15 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob"
        style={{ animationDelay: '2000ms' }}
      ></div>

      {/* Top Navigation */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-center lg:justify-start">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
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
            <path d="M18.5 6L10 18h5.2l-1.7 8L22 13.5h-5.2L18.5 6z" fill="url(#boltGradient)" filter="url(#boltGlow)" className="transition-transform duration-300 group-hover:scale-105" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-gray-200 transition-colors">
            Noda<span className="text-noda-cyan">.</span>
          </span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-24 lg:mt-0 relative z-10">

        {/* Large Glass Container */}
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-[#111827a6] backdrop-blur-[20px] border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

          {/* Left Side: Login Form */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">Área do Parceiro</h1>
              <p className="text-noda-textMuted">Bem-vindo de volta. Acesse para gerenciar seu ecossistema.</p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-noda-primary focus:ring-1 focus:ring-noda-primary transition-all"
                    placeholder="seu@email.com.br"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                  <a href="#" className="text-sm font-medium text-noda-cyan hover:text-noda-primary transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-noda-primary focus:ring-1 focus:ring-noda-primary transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-noda-primary focus:ring-noda-primary focus:ring-offset-gray-900"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-noda-textMuted cursor-pointer">
                  Lembrar meu acesso
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isAuthenticating || isSuccess}
                className={`w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white focus:outline-none transition-all cursor-pointer ${isSuccess
                  ? 'bg-green-500 border-green-500'
                  : 'bg-gradient-to-r from-noda-primary to-noda-cyan hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                  }`}
              >
                {isAuthenticating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Autenticando...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Acesso Liberado
                  </>
                ) : (
                  <>
                    Entrar no Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-noda-textMuted">
                Ainda não é um parceiro?{' '}
                <a href="#contato" onClick={openContactModal} className="font-medium text-white hover:text-noda-cyan transition-colors border-b border-noda-cyan/30 hover:border-noda-cyan">
                  Fale conosco
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Side: Features / Steps Reminder */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/[0.02] to-white/[0.05] border-t lg:border-t-0 lg:border-l border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center">

            {/* Decorative Blur inside right panel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-noda-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2 text-gradient">O controle total do seu projeto.</h2>
              <p className="text-sm text-noda-textMuted mb-10">Acompanhe cada fase da engenharia do seu software de forma transparente e direta.</p>

              {/* Steps Timeline */}
              <div className="space-y-8 relative">

                {/* Step 1 */}
                <div className="relative flex items-start group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-noda-cyan/30 bg-noda-cyan/10 text-noda-cyan shrink-0 z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:bg-noda-cyan/20 transition-colors">
                    <GitCommit className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white mb-1">1. Visão Panorâmica</h3>
                    <p className="text-sm text-noda-textMuted">Acompanhe o andamento do seu projeto em tempo real. Veja etapas concluídas, sprints atuais e os próximos passos do desenvolvimento.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 shrink-0 z-10 group-hover:border-noda-primary/50 group-hover:text-noda-primary group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all">
                    <PlayCircle className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white mb-1">2. Acesso a Protótipos</h3>
                    <p className="text-sm text-noda-textMuted">Veja sua ideia tomar forma. Acesse links seguros para testar interfaces e funcionalidades antes do lançamento oficial.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 shrink-0 z-10 group-hover:border-indigo-400/50 group-hover:text-indigo-400 group-hover:shadow-[0_0_15px_rgba(67,56,202,0.2)] transition-all">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white mb-1">3. Gestão e Suporte</h3>
                    <p className="text-sm text-noda-textMuted">Gerencie seu ecossistema. Solicite suporte direto com os engenheiros, realize upgrades e adapte seu plano à sua demanda.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactModal
        isModalOpen={isModalOpen}
        closeContactModal={closeContactModal}
      />
    </div>
  );
}
