'use client'

import supabase from "../config/supabase";
import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error} = await supabase
            .from('blogs')
            .insert({title, snippet, body})

            if(error){
                setError('check your internet connection')
            }

        console.log(title);
        console.log(snippet);
        console.log(body);

        setBody('');
        setSnippet('');
        setTitle('');
    }
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title" className="label">post Title</label>
                <input
                    type="text" 
                    className="input"
                    required
                    placeholder="post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="title" className="label">post Description</label>
                <input
                    type="text" 
                    className="input"
                    required
                    placeholder="post description"
                    value={snippet}
                    onChange={(e) => setSnippet(e.target.value)}
                />
               
                <label htmlFor="title" className="label">Body</label>
                <textarea
                    type="text" 
                    className="input py-10"
                    required
                    placeholder="post content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button className="btn">post</button>
            </form>
            {error}
        </>
    );
}
 
export default Form;