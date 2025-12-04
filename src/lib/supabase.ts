import { createClient } from "@supabase/supabase-js";

// Client-side Supabase client (uses anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our tables
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: "new" | "read" | "replied" | "archived";
  created_at?: string;
}

export interface NewsletterSignup {
  id?: string;
  email: string;
  source?: string;
  subscribed?: boolean;
  created_at?: string;
}

