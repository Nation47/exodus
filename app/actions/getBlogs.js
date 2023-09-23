import supabase from "../config/supabase";

const getBlogs = async ()=> {
   
  
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
  
    if (error) {
      console.log(error.message);
    }
  
    return (data ) || [];
  };
  
  export default getBlogs;