import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Utils/AuthContext";

export const Login: React.FC = () => {
    const [user, setUser ] = React.useState("");
    const authContext = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    const handleLogin = () => {
        authContext.login(user);
        navigate(redirectPath, {replace: true})
    }
    return(<div>
        <label>
            Username: {' '}
            <input type={"text"} onChange={e => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>)
}