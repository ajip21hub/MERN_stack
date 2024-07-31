import React, { createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [email, setEmail] = useState(localStorage.getItem('email'));

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token);
        }else{
            localStorage.removeItem('token');
        }
    }, [token]);

    useEffect(()=>{
        if(email){
            localStorage.setItem('email',email);
        }else{
            localStorage.removeItem('email');
        }
    })

    const login = (newToken, newEmail) => {
        setToken(newToken);
        setEmail(newEmail);
    }

    const logout = () => {
        setToken(null);
        setEmail(null);
        
    }

    return (
        <AuthContext.Provider value={{ token, email, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}