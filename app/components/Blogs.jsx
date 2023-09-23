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


    const blogs = await getBlogs()

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
                {blogs && (
                    <div  className="flex flex-col lg:grid grid-cols-3 gap-4">
                            {blogs.map((blog) => (
                                <List key={blog.id} blog={blog} />
                            ))}
                    </div>
                )}
            </div>
        </>
    );
}
 
// export default Blogs;
