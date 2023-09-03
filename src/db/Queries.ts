import { Insert, Select, users } from "./schema";
import { supabase } from "./supabase";

export async function InsertUsers(userEmail: Insert[]): Promise<Insert[]> {
  const insertedUsersData = await supabase.insert(users).values(userEmail).returning();
    return insertedUsersData;
}

export async function SelectUsers(): Promise<Select[]> {
  const usersData = await supabase.select().from(users);
    return usersData;
}