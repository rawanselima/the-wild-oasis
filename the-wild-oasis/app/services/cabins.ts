import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function getCabins(page: number = 1, limit: number = 10, capacity: string = 'all') {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
        .from("cabin")
        .select("*", { count: "exact" });

    if (capacity === 'small') {
        query = query.lte('maxCapacity', 3);
    }
    if (capacity === 'medium') {
        query = query.gte('maxCapacity', 4).lte('maxCapacity', 7);
    }
    if (capacity === 'large') {
        query = query.gte('maxCapacity', 8);
    }

    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
        console.error("Error fetching cabins:", error);
        throw error;
    }

    return { data, count };
}


export async function getCabinDetails(id: string | number) {
    const { data, error } = await supabase.from('cabin').select('*').eq('id', id).single();
    if (error) {
        console.error("Error fetching cabin:", error);
        throw error;
    }
    return data;
}