import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

export default function AppProtectedRoutes({children}) {
    let {token} = useContext(AuthContext)

    const navigate = useNavigate()
        useEffect(()=>{

            if (!token) {
                navigate("/login")
            }
        },[token])  

    return children
}
