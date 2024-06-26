import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-hot-toast';
import formImg from '../images/form-img.png'

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
            toast.success("User Registered Successfully 😃");
            navigate('/login');
        } else {
            toast.error("Registration Failed! Username already exist.");
            setUsername('');
            setPassword('');
        }
    }

    return (
        <>
            <div className="form-container">
                <div className="form-img">
                    <img src={formImg} alt=" reg img" />
                </div>
                <form action="" className="register" onSubmit={register}>
                    <h1>Register</h1>
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
                    <button className='form-btn'>Register</button>
                </form>
                <p>
                    Already have an account?
                    <Link to='/login' className='form-link'>Login</Link>
                </p>
            </div>
        </>
    )
}

export default RegisterPage;