import { supabase } from './supabaseClient';

export const projectsService = {
  /**
   * Busca todos os projetos ativos
   * @returns {Promise<Array>} Lista de projetos
   */
  async getActiveProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        client:clients(name, initials),
        responsavel:users(id, name, initials)
      `)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Erro ao buscar projetos:', error);
      throw error;
    }
    
    return data;
  }
};
