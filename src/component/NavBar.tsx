import React from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Utils/AuthContext"

export const NavBar: React.FC = () => {
    const authContext = React.useContext(AuthContext)
    return(
        <nav className="primary-nav">
            <NavLink to="/"> Home</NavLink>
            <NavLink to= "/about"> About </NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to={"/users"}> Users </NavLink>
            <NavLink to= {"/profile"}>Profile</NavLink>
            {!authContext.user && <NavLink to="/login">Login</NavLink>}
        </nav>
    )
}