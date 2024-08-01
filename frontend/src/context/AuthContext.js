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

    const logout = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({ email: email }), // Replace with actual email
            });
      
            const data = await response.json();
            if (response.status === 200) {
            setToken(null);
            setEmail(null);
              logout();
            } else {
              alert(data.message);
            }
          } catch (err) {
            console.error(err);
          }
     
        
    }

    return (
        <AuthContext.Provider value={{ token, email, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}