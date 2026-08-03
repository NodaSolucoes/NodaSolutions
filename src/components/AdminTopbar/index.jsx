import React from 'react';
import { Menu, Bell } from 'lucide-react';

export default function AdminTopbar({ setSidebarOpen }) {
  return (
    <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-white/5 bg-noda-base/50 backdrop-blur-md shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-white hidden sm:block">Painel de Operações</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border border-noda-base"></span>
        </button>
      </div>
    </header>
  );
}
