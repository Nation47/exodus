import {useRouter} from 'next/navigation';

const List2 = ({blog}) => {
    const router = useRouter()
const handleClick = async()=>{
    router.push(`/blogid/${blog.id}`)
}
    return (
        <>
            <h1 onClick={handleClick}>{blog.title}</h1>
        </>
    );
}
 
export default List2;