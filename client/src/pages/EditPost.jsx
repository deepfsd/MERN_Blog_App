import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../Editor';

function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                });
            });
    }, []);

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            navigate('/post/'+id)
        }
    }

    return ( 
        <div className="create-container">
            <form onSubmit={updatePost}>
                <input
                    type="title"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="summary"
                    placeholder='Summary'
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
                <input
                    type="file"
                    // value={files}
                    onChange={ev => setFiles(ev.target.files)}
                />
                <Editor onChange={setContent} value={content} />

                <button className='create-btn'>Update Blog</button>
            </form>

        </div>
    )
}

export default EditPost;