

import supabase from "@/app/config/supabase";
import {useParams} from 'next/navigation';

import List2 from "./List2";
import getBlogById from "@/app/actions/getBlogbyId";


export default async function BlogDetails({params}){
   
  

    const blogs = await getBlogById(params.id)

    return (
        <>
            <div>
                {blogs && 
                    (Array.isArray(blogs) 
                        ? blogs.map(blog => <List2 key={blog.id} blog={blog} />)
                        : [<List2 key={blogs.id} blog={blogs} />]    
                    )
                }
            </div>
        </>
    );
}
 
// export default BlogDetails;