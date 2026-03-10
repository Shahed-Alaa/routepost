import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  
  const [token, setToken] = useState(null)

let userToken = localStorage.getItem("userToken");
  useEffect(()=>{
    if (userToken) {
        setToken(userToken);
    }
  },[])


    return <AuthContext.Provider value={{token,setToken}}> {children}</AuthContext.Provider>
}
