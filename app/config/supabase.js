import { createClient } from "@supabase/supabase-js";


const supabase = createClient (
    'https://kaergrfkxpsmsepxrwca.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZXJncmZreHBzbXNlcHhyd2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NzEzMDYsImV4cCI6MjAwODA0NzMwNn0.BHc5YVzcQ25UcONEhbVieUwlTJ97oK9h1WxIqSMD0C4'
)

export default supabase;