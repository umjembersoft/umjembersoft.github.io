// Konfigurasi Supabase
// Silakan ganti URL dan KEY dengan data dari Dashboard Supabase Anda
const SUPABASE_URL = 'https://yanquefwdoussaszmpua.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbnF1ZWZ3ZG91c3Nhc3ptcHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NjM1NzksImV4cCI6MjA4OTEzOTU3OX0.BSsUzvp1CX6B-Cf-rdBgSWJPrYNLi-SJeaHDqAXGpU8';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
