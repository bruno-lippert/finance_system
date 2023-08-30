import supabase from "../database";
import { Item } from "../types/Item";

export async function createBond(bond :Item) {
    const { data, error } = await supabase
    .from('financedata')
    .insert(bond)
    .select()

    if(error) {
        console.log('Erro ao criar despesa:', error)
        return null
    }

    return data;
}

export async function getBonds() {
    const { data, error } = await supabase
    .from('financedata')
    .select('*')
    .order('date')

    if (error) {
        console.error('Erro ao buscar despesas:', error);
        return null;
      }
    
      return data;
}

export async function deleteBonds(id: string) {
    const { error } = await supabase
    .from('financedata')
    .delete()
    .eq('id', id)

    if (error) {
        console.error('Erro ao excluir:', error.message);
        return;
      }
}

export async function updateBond() {

}