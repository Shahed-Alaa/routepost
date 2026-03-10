import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

export default function AuthProtectedRoutes({children}) {

const navigate = useNavigate()

let {token} = useContext(AuthContext)

 useEffect(()=>{
    if (token) {
        navigate("/")
    }
 },[token])  

 return children
}


