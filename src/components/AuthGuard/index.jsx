import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import { Loader2 } from 'lucide-react';

export default function AuthGuard({ children, requiredRole }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 1. Verifica se há uma sessão ativa
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError || !session) {
          throw new Error('Nenhuma sessão ativa encontrada.');
        }

        const user = session.user;

        // 2. Valida o perfil com base no requiredRole
        if (requiredRole === 'admin') {
          const { data: colaboradorData, error: colabError } = await supabase
            .from('colaboradores')
            .select('*')
            .eq('user_id', user.id)
            .eq('status', 'Ativo')
            .single();

          if (colabError || !colaboradorData) {
            throw new Error('Acesso negado: Perfil de administrador não encontrado ou inativo.');
          }
        } else if (requiredRole === 'cliente') {
          const { data: clienteData, error: clienteError } = await supabase
            .from('clientes')
            .select('*')
            .eq('user_id', user.id)
            .eq('status', 'Ativo')
            .single();

          if (clienteError || !clienteData) {
            throw new Error('Acesso negado: Perfil de cliente não encontrado ou inativo.');
          }
        }

        // Se chegou até aqui, o usuário está autorizado
        setIsAuthorized(true);
      } catch (error) {
        console.error('AuthGuard Error:', error.message);
        // Fail-Closed: Desloga e redireciona em caso de falha ou acesso indevido
        await supabase.auth.signOut();
        navigate('/login', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate, requiredRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return isAuthorized ? <>{children}</> : null;
}
