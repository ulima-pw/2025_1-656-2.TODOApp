import useLoginViewModel from "../../viewmodels/useLoginViewModel";

const LoginPage = () => {
    const { username, setUsername,
        password, setPassword,
        loginRequest
     } = useLoginViewModel()

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