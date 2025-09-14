import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
import { supabaseUrl, supabaseAnonKey } from './config';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
