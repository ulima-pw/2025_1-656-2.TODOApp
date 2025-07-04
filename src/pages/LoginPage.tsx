import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000" // URL Base



const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function loginRequest(username: string, password: string) : Promise<void> {
        const resp = await fetch(`${URL}/usuarios/login`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        if (resp.status == 400) {
            // Error en porque no envio username o password
            console.error("Username and password are required");
            return
        }
        if (resp.status == 401) {
            // Error en login
            console.error("Invalid username or password");
            return
        }
        const data = await resp.json()
        sessionStorage.setItem("USUARIO", JSON.stringify(data))
        navigate('/main'); // Redirigir a la página principal
    }

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary w-100" 
                type="button"
                onClick={
                    () => {
                        loginRequest(username, password)
                    }
                }>
                Login
            </button>
        </div>
    );
};

export default LoginPage; 