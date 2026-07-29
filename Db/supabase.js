import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const API_KEY = process.env.API_KEY

export const SbClient = createClient(SUPABASE_URL, API_KEY)
