import supabase from "../config/supabase";

const getBlogById = async (id) => {
 
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return (data ) || [];
};

export default getBlogById;
