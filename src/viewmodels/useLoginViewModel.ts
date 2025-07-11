import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../models/services/UserServices';

const useLoginViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function loginRequest(username: string, password: string) : Promise<void> {
        const userService = UserServices()
        const resp = await userService.login({
            username : username,
            password : password
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

    return {
        username,
        setUsername,
        password,
        setPassword,
        loginRequest
    }
}

export default useLoginViewModel