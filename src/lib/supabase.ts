
import { createClient } from '@supabase/supabase-js';

// Using public anon key which is safe to expose in client-side code
const supabaseUrl = 'https://dtlziuzryyhgguxxsrdm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bHppdXpyeXloZ2d1eHhzcmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjA2OTgsImV4cCI6MjA1NjU5NjY5OH0.iS_TNUzAy_pMCohzizWWUJBySujP1YjaciYteP--eFE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
