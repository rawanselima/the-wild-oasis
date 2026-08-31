import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function getCabins(page: number = 1, limit: number = 10) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
    .from("cabin")
    .select("*", { count: "exact" })
    .range(from, to);

    if (error) {
        console.error("Error fetching cabins:", error);
        throw error;
    }

    return { data, count };
}


