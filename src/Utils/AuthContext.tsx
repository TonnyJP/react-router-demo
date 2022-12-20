import React from "react";

interface IAuthType {
    user: string | null,
    login: (user:string) => void,
    logout: () => void
}

export const AuthContext = React.createContext<IAuthType>({user: "", login:({}) =>{}, logout: () =>{}});

export const AuthContextProvider:React.FC<React.PropsWithChildren> = ({children}) => {
    const [user, setUser ] = React.useState<string| null>(null)

    const login= (user:string) =>{
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    const value= {user, login, logout}

    return<AuthContext.Provider value= {value}>
        {children}
    </AuthContext.Provider>
}