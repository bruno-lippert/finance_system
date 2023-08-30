import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = 'https://lhbjyomlphsgrrrcsmpk.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoYmp5b21scGhzZ3JycmNzbXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MTUyNDAsImV4cCI6MjAwODQ5MTI0MH0.0kzPihbej-Vou1ZaBkAq1nkNjsZwldPMd7NSoflfIJE';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;