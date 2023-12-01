import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
import { toast } from 'react-hot-toast';

function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(res => {
            res.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
        toast.success("User LoggedOut Successfully 😃");
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">BLOGGER<span>.com</span></Link>
            <nav>
                {
                    username && (
                        <>
                            <Link to='/create' className='cnb'>Create Blog</Link>
                            <a onClick={logout} className='logout'>Logout</a>

                        </>
                    )
                }
                {
                    !username && (
                        <>
                            <Link to="/login" className='login'>Login</Link>
                            <Link to="/register" className='register' >Register</Link>
                        </>
                    )
                }

            </nav>
            {
                username && (
                    <span className='user-name' >
                        <i className="bi bi-person-circle"></i> {username}
                    </span>
                )
            }
        </header>
    )
}

export default Header