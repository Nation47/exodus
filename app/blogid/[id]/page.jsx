import List3 from "@/app/components/List3";
import supabase from "@/app/config/supabase";
import {useParams} from 'next/navigation';
import { useEffect, useState } from "react";

export default function BlogId(){
    const [blogs, setBlogs] = useState(null);
    const params = useParams()
    const id = params?.id

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase 
                .from('blogs')
                .select('*')
                .eq('id', id)

                if(data){
                    setBlogs(data);
                    console.log(data)
                }

        }
        fetchPost();
    }, [])
    return(
        <>
        <div>
            {blogs && 
                (Array.isArray(blogs) 
                    ? blogs.map(blog => <List3 key={blog.id} blog={blog} />)
                    : [<List3 key={blogs.id} blog={blogs} />]    
                )
            }
        </div>
    </>
    )
}