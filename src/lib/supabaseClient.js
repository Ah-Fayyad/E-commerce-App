// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY } from "../supabaseConfig";

// Client للتعامل مع Supabase (Auth, DB, Storage)
export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
