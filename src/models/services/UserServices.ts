import type LoginRequestType from "../types/LoginRequestType"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const UserServices = () => {
    const login = async (req : LoginRequestType) => {
        const resp = await fetch(`${BACKEND_URL}/usuarios/login`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: req.username,
                password: req.password
            })
        })

        return resp
    }

    return {
        login
    }

}

export default UserServices