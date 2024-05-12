import Post from "../Post";
import { useEffect, useState } from "react";

// https://blogger-backend-8mon.onrender.com
// http://localhost:4000

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {
                posts.length > 0 && posts.map(post => (
                    <Post {...post} key={Math.random()*10000}/>
                ))
            }

        </>
    )
}
