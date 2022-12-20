import React, { ReactNode } from "react"
import { Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../Utils/AuthContext";

interface IProps{
    children?: ReactNode 
}

export const RequireAuth: React.FC<React.PropsWithChildren<IProps>>  = ({children}) => {
    const auth = React.useContext(AuthContext);
    const location = useLocation()

    if(!auth.user){
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }
    return <>{children}</>;
}