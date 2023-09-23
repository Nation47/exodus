

const List2 = ({blog}) => {

    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.snippet}</p>
            <p>{blog.body}</p>
        </>
    );
}
 
export default List2;