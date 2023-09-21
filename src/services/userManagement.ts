import supabase from "../database";
import { UserLogin } from "../types/Login";

export async function userLogin() {
  const { data, error } = await supabase
    .from("users")
    .select("*")

  if (error) {
    console.error("Usuário não encontrado:", error);
    return null;
  }

  if(data) {
     return data;
  }
 
}

export async function userSingUp(user: UserLogin) {
  const { data, error } = await supabase.from("users").insert(user).select();

  if (error) {
    console.log("Erro ao criar usuário:", error);
    return null;
  }

  return data;
}
