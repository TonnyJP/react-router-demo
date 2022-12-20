import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Utils/AuthContext"

export const Profile: React.FC = () => {
    const authContext = React.useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        authContext.logout();
        navigate('/');
    }
    return(<div>
        <h3>Welcome {authContext.user} </h3>
        <button onClick = {handleLogout}>Logout</button>
    </div>)
}