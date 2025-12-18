import 'dotenv/config';
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types';

const supabaseUrl = process.env['SUPABASE_URL']!;
const supabaseAnonKey = process.env['SUPABASE_ANON_KEY']!;

export const supabase: SupabaseClient<Database> = createClient(supabaseUrl, supabaseAnonKey);

