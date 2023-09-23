// 'use client'
import supabase from "../config/supabase";
// import { useEffect, useState } from "react";
import List from "./List";


async function getBlogs(){
    const res = await supabase
    .from("blogs")
    .select()

    if(!res.ok){
        throw new Error("Connection Error");
    }

    return res.json();
}

export default async function Blogs(){
    // const [blogs, setBlogs] = useState([]);
    // const [error, setError] = useState(null);


    const blogs = getBlogs()

    const blog = await blogs



    // useEffect(() => {
    //     const fetch = async () => {
    //         const {data, error} = await supabase
    //             .from("blogs")
    //             .select()

    //             if(data){
    //                 setBlogs(data);
    //                 console.log(data);
    //             } else{
    //                 setError('Check your Network Connection');
    //                 setBlogs(null);
    //             }
    //     }
    //     fetch();
    // },[])

    return (
        <>
             {error}

            <div className="">
                {/* {blogs && 
                (Array.isArray(blogs) 
                    ? blogs.map(blog => <List3 key={blog.id} blog={blog} />)
                    : [<List3 key={blogs.id} blog={blogs} />]    
                )
            } */}
            <List blog={blog}/>
            </div>
        </>
    );
}
 
// export default Blogs;
