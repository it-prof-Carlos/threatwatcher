// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mhywhfvzzgqvumcmixko.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oeXdoZnZ6emdxdnVtY21peGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODM4NzEsImV4cCI6MjA1MTc1OTg3MX0.P5fbrUMGhHJOjCL_A9sJVpd3lGfnvQk40g5LT2KBD1s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);