import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl,  supabaseKey);
if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase environment variables are missing! Application may not function correctly.");
  }


export default supabase;
