
import List from "./List";
import getBlogs from "../actions/getBlogs";

export default async function Blogs(){
    const blogs = await getBlogs()

    return (
        <>
            <div className="flex flex-col lg:grid grid-cols-3 gap-4">
                {blogs && 
                (Array.isArray(blogs) 
                    ? blogs.map(blog => <List key={blog.id} blog={blog} />)
                    : [<List key={blogs.id} blog={blogs} />]    
                )
            }
            </div>
        </>
    );
}
