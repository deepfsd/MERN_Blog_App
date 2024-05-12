import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';
import Editor from '../Editor';
import { toast } from 'react-hot-toast';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    const navigate = useNavigate();

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            toast.success("Blog added Successfully 👍");
            navigate('/')
          }
    }

    return (
        <div className="create-container">
            <form onSubmit={createNewPost}>
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
                <Editor onChange={setContent} value={content}/>

                <button className='create-btn'>Add Blog <i className="bi bi-plus-square"></i></button>
            </form>

        </div>
    )
}

export default CreatePost;