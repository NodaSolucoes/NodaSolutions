import React from 'react';
import { LogOut } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function DashboardPlaceholder() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard do Cliente</h1>
      <p className="text-gray-400 mb-8">Esta página está em construção.</p>
      
      <button 
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        Sair
      </button>
    </div>
  );
}
