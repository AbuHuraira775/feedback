import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouting=()=>{

    const isUserLogin = localStorage.getItem('user')

    return !isUserLogin? <Navigate to='/login' /> : <Outlet />
}


const PublicRouting=()=>{
        const isUserLogin = localStorage.getItem('user')
        return isUserLogin ? <Navigate to='/products' /> : <Outlet />
}

const LogoutRouting = ()=>{
    const isUserLogin = localStorage.getItem('user')
    return !isUserLogin? <Navigate to='/login'/> : <Outlet /> 
}
export {PrivateRouting, PublicRouting,LogoutRouting}