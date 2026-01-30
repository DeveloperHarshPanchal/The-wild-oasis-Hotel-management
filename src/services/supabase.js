import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jawtzirtfoskkzsobsig.supabase.co";
const supabaseKey = "sb_publishable_1d8stlerQNIYDrlzNryzsA_qQMkaUgT";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
