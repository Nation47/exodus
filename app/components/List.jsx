import Link from "next/link";

const List = ({blog}) => {
    return (
        <>
            <Link href={`/blogs/${blog.id}`}>
                <div className="bg-white  p-4 shadow-md rounded-md">
                    <h2 className="text-lg text-gray-700 font-semibold capitalize">{blog.title}</h2>
                    <p className="text-gray-600">{blog.body.slice(0, 100)}...</p>
                </div>
            </Link>
        </>
    );
}
 
export default List;