import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { formatISO9075 } from "date-fns";
import {UserContext} from '../UserContext'

// https://blogger-backend-8mon.onrender.com
// http://localhost:4000

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if (!postInfo) return '';
    return (
        <div className="post-page">
            <h1>
                {postInfo.title}
            </h1>
            <time>
                {formatISO9075(new Date(postInfo.createdAt))}
            </time>
            <div className="author">
                by @{postInfo.author.username} 
            </div>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                        Edit blog
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                </div>
            )}
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}

export default PostPage;