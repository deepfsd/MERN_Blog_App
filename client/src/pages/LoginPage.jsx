import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { toast } from 'react-hot-toast';
 
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                toast.success("User LoggedIn Successfully 😃");
                navigate('/');
            })

        } else {
            toast.error("Wrong Credentials.");
            setUsername('');
            setPassword('');
        }
    }
 
    return (
        <div className="form-container">
            <div className="form-img">
                <img src="../../images/form-img.png" alt="log img " />
            </div>
            <form action="" className="login" onSubmit={login}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder='enter username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input
                    type="password"
                    placeholder='enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className='form-btn'>Login <i className="bi bi-box-arrow-in-right"></i></button>
            </form>
            <p>
                Didn't have an account?
                <Link to='/register' className='form-link'>Register</Link>
            </p>
        </div>
    )
}

export default LoginPage;